import { connectToMongo } from "../DL/connectToMongo";
<<<<<<< HEAD
import { createRecipe, readRecipeById, readRecipes, updateRecipe} from "../DL/controllers/recipe.controller";
=======
import {
  createRecipe,
  readRecipeById,
  readRecipes,
  updateRecipe,
} from "../DL/controllers/recipe.controller";
>>>>>>> efcc14b6eeaec8a6453e955adde989e269bf6d83
import { readCategoryService } from "./category.service";

export const createRecipesService = async (recipe) => {
  checkFields(recipe,['title','ingredients','typeFood','instructions','category']);
  await connectToMongo();
  recipe.category = (await readCategoryService({ title: recipe.category }))["_id"];
  recipe.ingredients = extractValues(recipe);
  return await createRecipe(recipe);
};
export const readRecipesService = (filter) => readRecipes(filter);
export const readRecipeByIdService = (id) => readRecipeById(id);
export const updateRecipService = (id) => updateRecipe(id, data);

function extractValues(obj) {
  const values = [];
<<<<<<< HEAD
  for (let key in obj) {
=======
  for (const key in obj) {
>>>>>>> efcc14b6eeaec8a6453e955adde989e269bf6d83
    if (key.startsWith("ingredients")) {
      obj[key] !== "" && values.push(obj[key]);
      delete obj[key];
    }
  }
  return values;
}

function checkFields(obj, fields) {
  for (const field of fields) {
    if (obj[field] === "") {
      throw new Error(`Field '${field}' does not exist in object`);
    }
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> efcc14b6eeaec8a6453e955adde989e269bf6d83
