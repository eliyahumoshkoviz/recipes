import { MdPeopleOutline } from "react-icons/md";
import { connectToMongo } from "../DL/connectToMongo";
import { updateCategory } from "../DL/controllers/category.controller";
import {
  createRecipe,
  deleteRecipeById,
  readRecipeById,
  readRecipes,
  updateRecipe,
} from "../DL/controllers/recipe.controller";
import { readCategoryService } from "./category.service";
import { saveImgToCloud } from "./cloudinary/cloudinary";
import { extractValues, checkFields, removeRecipeFromCategory } from "./function/function";
import { revalidatePath } from "next/cache";

export const createRecipesService = async (recipe) => {
  await connectToMongo();

  const { _id, image: imageDefault } = await readCategoryService({
    title: recipe.category,
  });
  const img = recipe.image ? await saveImgToCloud(recipe.image) : imageDefault;

  recipe.image = img;

  checkFields(recipe, [
    "title",
    "ingredients",
    "typeFood",
    "instructions",
    "category",
  ]);

  recipe.ingredients = extractValues(recipe);
  recipe.category = _id;
  delete recipe._id;

  const createdRecipe = await createRecipe(recipe);
  const idRecipe = createdRecipe._id;

  await updateCategory(_id, { $push: { recipes: idRecipe } });

  return idRecipe;
};

export const updateRecipService = async (id, data) => {
  const { category, ...dataWithoutTitle } = data; // Extract title and keep the rest
  return await updateRecipe(id, dataWithoutTitle);
};


export const readRecipesService = () => readRecipes();
export const readRecipeByIdService = (id,populate) => readRecipeById(id,populate);

export const deleteRecipe = async (recipeId , categoryId) => {
  try {
    await removeRecipeFromCategory(recipeId , categoryId);
    await deleteRecipeById(recipeId);
    revalidatePath("/");
    
  } catch (error) {
    console.log({ error });
  }

};
