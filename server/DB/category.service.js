import { connectToMongo } from '../DL/connectToMongo';
import { createCategory, readCategoryById, readCategorys, updateCategory, readCategory } from '../DL/controllers/category.controller';
import { saveImgToCloud } from "./cloudinary/cloudinary";
import { checkFields } from './function/function';
// import { extractValues } from './function/function'

export const createCategorysService = async (category) => {
  await connectToMongo();

  const img = await saveImgToCloud(category.image);
  category.image = img;
  console.log({img},"######################")
  checkFields(category, ["title", "colorLabel", "image"]);
  createCategory(category)
};
export const readCategoryByIdService = (id) => readCategoryById(id);
export const readCategorysService = () => readCategorys();
export const readCategoryService = (filter,populate) => readCategory(filter,populate);
export const updateCategoryService = (id) => updateCategory(id, data);
