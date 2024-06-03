import { connectToMongo } from "../DL/connectToMongo";
import { updateCategory } from "../DL/controllers/category.controller";
import { createRecipe, readRecipeById, readRecipes, updateRecipe } from "../DL/controllers/recipe.controller";
import { readCategoryService } from "./category.service";
import { saveImgToCloud } from "./cloudinary/cloudinary";
import {extractValues,checkFields} from './function/function'

export const createRecipesService = async (recipe) => {
  await connectToMongo();

  const { _id, image } = await readCategoryService({ title: recipe.category });
  const imageDefault = image;
  const img = recipe.image ? await saveImgToCloud(recipe.image) : imageDefault;
  
  recipe.image = img;
  
  checkFields(recipe, ["title", "ingredients", "typeFood", "instructions", "category"]);
  
  recipe.ingredients = extractValues(recipe);
  recipe.category = _id;
  delete recipe._id;

  const createdRecipe = await createRecipe(recipe);
  const idRecipe = createdRecipe._id;
  
  await updateCategory(_id, { $push: { recipes: idRecipe } });

  return idRecipe;
};


export const updateRecipService = async (id, data) => {
  return await updateRecipe(id, data)
};


export const readRecipesService = (filter) => readRecipes(filter);
export const readRecipeByIdService = (id) => readRecipeById(id);


