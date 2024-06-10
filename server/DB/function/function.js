import { readCategoryService } from "../category.service";
import { readRecipeByIdService } from "../recipe.service";
const extractValues = (obj) => {
  const values = [];
  for (const key in obj) {
    if (key.startsWith("ingredients")) {
      obj[key] !== "" && values.push(obj[key]);
      delete obj[key];
    }
  }
  return values;
};

const checkFields = (obj, fields) => {
  for (const field of fields) {
    if (obj[field] === "") {
      throw new Error(`Field '${field}' does not exist in object`);
    }
  }
};

const getCategoryId = async (filter) =>
  (await readCategoryService(filter))._id.toString();

const changeCategory = async (recipeId, prevCat, newCat) => {
  await removeRecipeFromCategory(recipeId, prevCat);
  const newCatId = await getCategoryId(newCat);
  await addRecipeToCategory(recipeId, newCatId);
  changeRecipeCategory(recipeId, prevCat, newCatId);
};

const changeRecipeCategory = async (recipeId, prevCat, newCat) => {
  const recipe = await readRecipeByIdService(recipeId);
  recipe.category = recipe.category.filter((id) => id.toString() !== prevCat);
  recipe.category.push({ _id: newCat });
  await recipe.save();

};

const removeRecipeFromCategory = async (recipeId, categoryId) => {
  const category = await readCategoryService({ _id: categoryId });
  category.recipes = category.recipes.filter(
    (id) => id.toString() !== recipeId
  );
  await category.save();
};

const addRecipeToCategory = async (recipeId, categoryId) => {
  const category = await readCategoryService({ _id: categoryId });
  category.recipes.push(recipeId);
  await category.save();
};

module.exports = { extractValues, checkFields, getCategoryId, changeCategory };
