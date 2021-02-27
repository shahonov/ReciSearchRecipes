import { httpsSerivce } from "./httpService";

export const ingredientsService = {
    getRecipesByIngredients: ingredient => httpsSerivce.get(ingredient)
}
