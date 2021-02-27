import { combineReducers } from "redux";
import { ingredientQueryReducer } from "./ingredientQueryReducer";
import { ingredientRecipesReducer } from "./ingredientRecipesReducer";
import { notificationReducer } from "./notificationReducer";

export const createRootReducer = () => combineReducers({
    query: ingredientQueryReducer,
    results: ingredientRecipesReducer,
    notification: notificationReducer,
})
