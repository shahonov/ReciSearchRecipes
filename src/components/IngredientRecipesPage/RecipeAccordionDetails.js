import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    AccordionDetails,
} from '@material-ui/core';

import { ArrowRight } from '@material-ui/icons';

import './ingredientRecipesPage.scss';

const RecipeAccordionDetails = ({
    recipe
}) => {
    // checks if both used and missed ingredients exists
    // if yes - takes them both
    // if some of them exists - takes the existing one
    // if none exists - returns empty collection
    const getIngredientsCollection = () => {
        if (recipe.usedIngredients) {
            if (recipe.missedIngredients) {
                return recipe.usedIngredients.concat(recipe.missedIngredients);
            } else {
                return recipe.usedIngredients;
            }
        } else if (recipe.missedIngredients) {
            return recipe.missedIngredients;
        } else {
            return [];
        }
    }

    return (
        <AccordionDetails className='accordion-details'>
            <div className='image-wrapper'>
                <img src={recipe.image} alt='recipe-image' className='recipe-image' />
            </div>
            <List component='ul'>
                {
                    getIngredientsCollection().map((ingredientInfo, i) => {
                        return (
                            <ListItem key={i}>
                                <ListItemIcon>
                                    <ArrowRight />
                                </ListItemIcon>
                                <ListItemText primary={ingredientInfo.originalString} />
                            </ListItem>
                        )
                    })
                }
            </List>
        </AccordionDetails>
    )
}

export default RecipeAccordionDetails;
