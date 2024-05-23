import { createCategory, readCategoryById, readCategorys, updateCategory } from '../DL/controllers/category.controller';

export const createCategorysService = (data) => createCategory(data);
export const readCategorysService = (filter) => readCategorys(filter);
export const readCategoryByIdService = (id) => readCategoryById(id);
export const updateCategoryService = (id) => updateCategory(id,data);
