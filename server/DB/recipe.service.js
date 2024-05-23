import { createRecipe, readRecipeById, readRecipes,updateRecipe } from '../DL/controllers/recipe.controller';

export const createRecipesService = (data) => createRecipe(data);
export const readRecipesService = (filter) => readRecipes(filter);
export const readRecipeByIdService = (id) => readRecipeById(id);
export const updateRecipService = (id) => updateRecipe(id,data);
