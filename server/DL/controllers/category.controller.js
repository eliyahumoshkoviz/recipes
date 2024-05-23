import { CategoryModel } from "../models/category.model"

export const readCategorys = (filter) => CategoryModel.find(filter).lean()
<<<<<<< HEAD
export const readCategoryById = (id) => CategoryModel.findById(id)
export const createCategory = (data) => CategoryModel.create(data)
export const updateCategory= (id, data) => CategoryModel.findByIdAndUpdate({ _id: id }, data, { new: true });
=======
export const readCategory = (filter) => CategoryModel.findOne(filter).populate('recipes').lean()
export const readCategoryById = (id) => CategoryModel.findById(id).populate('recipes').lean()
export const createCategory = (data) => CategoryModel.create(data).lean()
export const updateCategory= (id, data) => CategoryModel.findByIdAndUpdate({ _id: id }, data, { new: true }).lean();
>>>>>>> 4abe336cb32460e37f2c00549461fca906aa7243
