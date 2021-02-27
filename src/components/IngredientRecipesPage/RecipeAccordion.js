import { useState } from 'react';
import { Accordion } from '@material-ui/core';

import RecipeAccordionDetails from './RecipeAccordionDetails';
import RecipeAccordionSummary from './RecipeAccordionSummary';

import './ingredientRecipesPage.scss';

const RecipeAccordion = ({
    recipe,
    expanded,
    handleExpandedChange,
}) => {
    

    return (
        <Accordion
            className='accordion-item'
            expanded={expanded === recipe.panel}
            onChange={handleExpandedChange(recipe.panel)}
        >
            <RecipeAccordionSummary recipe={recipe} />
            <RecipeAccordionDetails recipe={recipe} />
        </Accordion>
    )
}

export default RecipeAccordion;
