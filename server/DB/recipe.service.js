import { connectToMongo } from "../DL/connectToMongo";
import {
  createRecipe,
  readRecipeById,
  readRecipes,
  updateRecipe,
} from "../DL/controllers/recipe.controller";
import { readCategoryService } from "./category.service";


const saveImgToCloud = async (img) => {

  const arrayBuffer = await img.arrayBuffer()
  const buffer = new Uint8Array(arrayBuffer)
  const imgLink = new Promise((res) => {
    cloudinary.uploader.upload_stream({ folder: "aaa" }, (err, uploadRes) => {
      return res(uploadRes)
    }).end(buffer)
  }).then(uploadedImg => {
    return uploadedImg.url
  })
  return imgLink
}


export const createRecipesService = async (recipe) => {
  checkFields(recipe, ['title', 'ingredients', 'typeFood', 'instructions', 'category', 'image']);
  await connectToMongo();
  recipe.image = await saveImgToCloud(recipe.image)
  recipe.category = (await readCategoryService({ title: recipe.category }))["_id"];
  recipe.ingredients = extractValues(recipe);
  return await createRecipe(recipe);
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

function checkFields(obj, fields) {
  for (const field of fields) {
    if (obj[field] === "") {
      throw new Error(`Field '${field}' does not exist in object`);
    }
  }
}
