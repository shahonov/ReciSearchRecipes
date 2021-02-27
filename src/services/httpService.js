import { spoonacular_apiKey } from '../config';

const baseUrl = 'https://api.spoonacular.com/recipes/';
const ingredients = 'findByIngredients';

const buildIngredientsUrl = (param) => {
    return `${baseUrl}${ingredients}?apiKey=${spoonacular_apiKey}&ingredients=${param}&number=100`;
}

export const httpsSerivce = {
    get: async param => {
        const url = buildIngredientsUrl(param);
        const rawResponse = await fetch(url);
        const jsonResponse = await rawResponse.json();
        return jsonResponse;
    },
}
