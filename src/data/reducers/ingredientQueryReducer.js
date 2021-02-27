import { DELETE_INGREDIENT_SEARCH_PARAM, SAVE_INGREDIENT_SEARCH_PARAM } from "../actionTypes";

const initialState = {
    searches: [],
}

export const ingredientQueryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_INGREDIENT_SEARCH_PARAM: {
            if (!state.searches.includes(action.payload)) {
                const copy = state.searches.slice();
                copy.push(action.payload);
                return { searches: copy };
            } else {
                return state;
            }
        }
        case DELETE_INGREDIENT_SEARCH_PARAM: {
            const foundItem = state.searches.find(x => x === action.payload);
            const index = state.searches.indexOf(foundItem);
            const copy = state.searches.slice();
            copy.splice(index, 1);
            return { searches: copy };
        }
        default: return state;
    }
}
