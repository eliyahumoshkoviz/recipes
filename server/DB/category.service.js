import { createCategory, readCategoryById, readCategorys, updateCategory,readCategory } from '../DL/controllers/category.controller';

export const createCategorysService = (data) => createCategory(data);
export const readCategoryByIdService = (id) => readCategoryById(id);
export const readCategorysService = () => readCategorys();
export const readCategoryService = (filter) => readCategory(filter);
export const updateCategoryService = (id) => updateCategory(id,data);
