import { CategoryModel } from "../models/category.model"

export const readCategorys = (filter) => CategoryModel.find(filter)
export const readCategoryById = (id) => CategoryModel.findById(id)
export const createCategory = (data) => CategoryModel.create(data)
export const updateCategory= (id, data) => CategoryModel.findByIdAndUpdate({ _id: id }, data, { new: true });
