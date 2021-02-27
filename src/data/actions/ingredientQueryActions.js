import { showNotification, notificationType } from './notificationActions';

import { DELETE_INGREDIENT_SEARCH_PARAM, SAVE_INGREDIENT_SEARCH_PARAM } from '../actionTypes';

const saveSearchIngredientParam = ingredient => ({
    type: SAVE_INGREDIENT_SEARCH_PARAM,
    payload: ingredient,
})

const deleteSearchIngredientParam = ingredient => ({
    type: DELETE_INGREDIENT_SEARCH_PARAM,
    payload: ingredient,
})

export const saveToRecentSearches = input => async dispatch => {
    try {
        dispatch(saveSearchIngredientParam(input));
    } catch (err) {
        dispatch(showNotification(`Error occured while saving to recent searches: ${input}`, notificationType.error));
    }
}

export const deleteFromRecentSearches = input => async dispatch => {
    try {
        dispatch(deleteSearchIngredientParam(input));
        dispatch(showNotification('Successfully deleted recent search.', notificationType.success));
    } catch (err) {
        dispatch(showNotification(`Error occured while deleting from recent searches: ${input}`, notificationType.error));
    }
}
