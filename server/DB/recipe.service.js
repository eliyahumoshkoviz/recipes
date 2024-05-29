import { connectToMongo } from "../DL/connectToMongo";
import {
  createRecipe,
  readRecipeById,
  readRecipes,
  updateRecipe,
} from "../DL/controllers/recipe.controller";
import { readCategoryService } from "./category.service";

export const createRecipesService = async (data) => {
  await connectToMongo();
  data.category = (await readCategoryService({ title: data.category }))["_id"];
  data.ingredients = extractValues(data);
  return await createRecipe(data);
};
export const readRecipesService = (filter) => readRecipes(filter);
export const readRecipeByIdService = (id) => readRecipeById(id);
export const updateRecipService = (id) => updateRecipe(id, data);

function extractValues(obj) {
  const values = [];

  for (const key in obj) {
    if (key.startsWith("ingredients")) {
      obj[key] !== "" && values.push(obj[key]);
      delete obj[key];
    }
  }

  return values;
}
