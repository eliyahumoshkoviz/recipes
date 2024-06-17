import { createCategory, readCategoryById, readCategorys, updateCategory, readCategory } from '../DL/controllers/category.controller';
import { saveImgToCloud } from "./cloudinary/cloudinary";
import { checkFields } from './function/function';
// import { extractValues } from './function/function'

export const createCategorysService = async (category) => {

  checkFields(category, ["title", "colorLabel", "image"]);
  const img = await saveImgToCloud(category.image);
  category.image = img;
  createCategory(category)
};
export const readCategoryByIdService = (id) => readCategoryById(id);
export const readCategorysService = () => readCategorys();
export const readCategoryService = (filter,populate) => readCategory(filter,populate);
export const updateCategoryService = (id,data) => updateCategory(id, data);
