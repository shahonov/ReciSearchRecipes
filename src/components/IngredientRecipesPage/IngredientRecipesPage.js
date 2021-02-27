import { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    Paper,
    Select,
    Tooltip,
    MenuItem,
    Typography,
    InputLabel,
    IconButton,
    FormControl,
} from '@material-ui/core';
import { YoutubeSearchedFor } from '@material-ui/icons';

import { history } from '../../data/store';
import RecipeAccordion from './RecipeAccordion';
import { getResultRecipes } from '../../data/selectors/ingredientRecipesSelectors';

import './ingredientRecipesPage.scss';

const showCountOptions = [

];

const IngredientRecipesPage = ({
    recipes
}) => {
    const { ingredient } = useParams();

    const [expanded, setExpanded] = useState('');
    const [showCount, setShowCount] = useState(20);

    const handleSetShowCount = ev => {
        setShowCount(ev.target.value);
    }

    const handleExpandedChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const sortByLikes = (recipes) => {
        return recipes.sort((a, b) => b.likes - a.likes);
    }

    const addPanelProps = (recipes) => {
        let index = 0;
        return recipes.map(x => ({ panel: `panel${index++}`, ...x }));
    }

    const sortedByLikes = sortByLikes(recipes);
    const recipesWithPanels = addPanelProps(sortedByLikes).slice(0, showCount);

    return (
        <div className='result-recipes-page-wrapper'>
            <Paper className='paper-container'>
                <Tooltip className='new-search-button' title='New search'>
                    <IconButton onClick={() => history.push('/')}>
                        <YoutubeSearchedFor color='secondary' fontSize='large' />
                    </IconButton>
                </Tooltip>
                <FormControl className='show-count-dropdown'>
                    <InputLabel id="show-count-label">Show Count</InputLabel>
                    <Select
                        value={showCount}
                        labelId="show-count-label"
                        onChange={handleSetShowCount}
                    >
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                    </Select>
                </FormControl>
                <div className='accordions-container'>
                    <Typography
                        variant='h5'
                        className='result-recipes-title'
                    >
                        Recipes with {ingredient}
                    </Typography>
                    {
                        recipesWithPanels.map((recipe, i) => (
                            <RecipeAccordion
                                key={i}
                                recipe={recipe}
                                expanded={expanded}
                                handleExpandedChange={handleExpandedChange}
                            />
                        ))
                    }
                </div>
            </Paper>
        </div>
    )
}

const mapStateToProps = state => ({
    recipes: getResultRecipes(state),
})

export default connect(mapStateToProps)(IngredientRecipesPage);
