import { connectToMongo } from "../DL/connectToMongo";
<<<<<<< HEAD
import { createRecipe, readRecipeById, readRecipes, updateRecipe} from "../DL/controllers/recipe.controller";
=======
import { updateCategory } from "../DL/controllers/category.controller";
import { createRecipe, readRecipeById, readRecipes, updateRecipe } from "../DL/controllers/recipe.controller";
>>>>>>> e5f09e23695fd54b75b28ec4884ef0ea9b5f74ef
import { readCategoryService } from "./category.service";

export const createRecipesService = async (recipe) => {
  await connectToMongo();
  recipe.image = recipe.image ? recipe.image.name : 'https://cdn.pixabay.com/photo/2024/04/23/09/32/ai-generated-8714513_1280.jpg';
  checkFields(recipe, [ "title","ingredients","typeFood","instructions","category",
  ]);
  recipe.ingredients = extractValues(recipe);
  const {_id} = await readCategoryService({ title: recipe.category });
  recipe.category = _id;
  const idRecipe = (await createRecipe(recipe))["_id"];
  await updateCategory(_id, { $push: { recipes: idRecipe } });
  return idRecipe;

};
export const readRecipesService = (filter) => readRecipes(filter);
export const readRecipeByIdService = (id) => readRecipeById(id);
export const updateRecipService = (id,data) => updateRecipe(id, data);

function extractValues(obj) {
  const values = [];
  for (let key in obj) {
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
}
