import { connectToMongo } from "../DL/connectToMongo";
import { updateCategory } from "../DL/controllers/category.controller";
import { createRecipe, readRecipeById, readRecipes, updateRecipe } from "../DL/controllers/recipe.controller";
import { readCategoryService } from "./category.service";
import { saveImgToCloud } from "./cloudInary";


export const createRecipesService = async (recipe) => {
  await connectToMongo();
  const img = recipe.image && await saveImgToCloud(recipe.image);
  recipe.image = img ? img : 'https://cdn.pixabay.com/photo/2024/04/23/09/32/ai-generated-8714513_1280.jpg';
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
  for (const key in obj) {
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