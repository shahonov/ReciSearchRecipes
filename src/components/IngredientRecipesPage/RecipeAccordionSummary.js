import {
    Chip,
    Typography,
    AccordionSummary,
} from '@material-ui/core';

import { ExpandMore, ThumbUpAlt } from '@material-ui/icons';

import './ingredientRecipesPage.scss';

const RecipeAccordionSummary = ({
    recipe
}) => {
    return (
        <AccordionSummary
            expandIcon={<ExpandMore />}
            className='accordion-summary-expand-item'
        >
            <span className='accordion-summary'>
                <Typography>{recipe.title}</Typography>
                <Chip
                    color='primary'
                    label={recipe.likes}
                    variant='outlined'
                    style={{ marginLeft: '10px', cursor: 'pointer' }}
                    icon={<ThumbUpAlt style={{ marginLeft: '10px' }} color='primary' />}
                />
            </span>
        </AccordionSummary>
    )
}

export default RecipeAccordionSummary;
