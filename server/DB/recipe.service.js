import { connectToMongo } from '../DL/connectToMongo';
import { createRecipe, readRecipeById, readRecipes, updateRecipe } from '../DL/controllers/recipe.controller';
import { readCategoryService } from './category.service';

export const createRecipesService = async (data) => {
    await connectToMongo();     
    data.category = (await readCategoryService({title:data.category}))['_id'];
    data.ingredients= [1,1,1,0]
    
    return await createRecipe(data) 
};
export const readRecipesService = (filter) => readRecipes(filter);
export const readRecipeByIdService = (id) => readRecipeById(id);
export const updateRecipService = (id) => updateRecipe(id, data);
