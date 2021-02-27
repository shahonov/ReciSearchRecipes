import { ingredientsService } from '../../services/ingredientsService';
import { showNotification, notificationType } from './notificationActions';

import { FETCH_RECIPES_BY_INGREDIENTS } from '../actionTypes';

const fetchRecipesByIngredient = recipes => ({
    type: FETCH_RECIPES_BY_INGREDIENTS,
    payload: recipes,
})

export const fetchRecipes = input => async dispatch => {
    try {
        dispatch(showNotification(`Successfully fetched recipes with ${input}`, notificationType.success));
        const response = await ingredientsService.getRecipesByIngredients(input);
        dispatch(fetchRecipesByIngredient(response));
    } catch (err) {
        console.log(err);
        dispatch(showNotification(`Error occured while fetching: ${input}`, notificationType.error));
    }
}
