import { FETCH_RECIPES_BY_INGREDIENTS } from "../actionTypes";

const sampleObject = {
    "id": 666439,
    "title": "Homemade Ricotta",
    "image": "https://spoonacular.com/recipeImages/666439-312x231.jpg",
    "imageType": "jpg",
    "usedIngredientCount": 2,
    "missedIngredientCount": 1,
    "missedIngredients": [
        {
            "id": 1049,
            "amount": 3,
            "unit": "cups",
            "unitLong": "cups",
            "unitShort": "cup",
            "aisle": "Milk, Eggs, Other Dairy",
            "name": "half & half",
            "original": "3 cups half & half",
            "originalString": "3 cups half & half",
            "originalName": "half & half",
            "metaInformation": [],
            "meta": [],
            "image": "https://spoonacular.com/cdn/ingredients_100x100/fluid-cream.jpg"
        }
    ],
    "usedIngredients": [
        {
            "id": 1077,
            "amount": 5,
            "unit": "cups",
            "unitLong": "cups",
            "unitShort": "cup",
            "aisle": "Milk, Eggs, Other Dairy",
            "name": "full-fat milk",
            "original": "5 cups full-fat buttermilk",
            "originalString": "5 cups full-fat buttermilk",
            "originalName": "full-fat buttermilk",
            "metaInformation": [],
            "meta": [],
            "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
        },
        {
            "id": 1077,
            "amount": 5,
            "unit": "qt",
            "unitLong": "quarts",
            "unitShort": "qt",
            "aisle": "Milk, Eggs, Other Dairy",
            "name": "whole milk",
            "original": "5 qt. whole milk",
            "originalString": "5 qt. whole milk",
            "originalName": "whole milk",
            "metaInformation": ["whole"],
            "meta": ["whole"],
            "image": "https://spoonacular.com/cdn/ingredients_100x100/milk.png"
        }
    ],
    "unusedIngredients": [],
    "likes": 1564
}

const initialState = {
    recipes: [],
}

export const ingredientRecipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RECIPES_BY_INGREDIENTS: return { recipes: action.payload };
        default: return state;
    }
}
