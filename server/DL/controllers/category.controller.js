import { CategoryModel } from "../models/category.model"

export const readCategorys = (filter) => CategoryModel.find(filter).lean()
export const readCategory = (filter) => CategoryModel.findOne(filter).populate('recipes').lean()
export const readCategoryById = (id) => CategoryModel.findById(id).populate('recipes').lean()
export const createCategory = (data) => CategoryModel.create(data)
export const updateCategory= (id, data) => CategoryModel.findByIdAndUpdate({ _id: id }, data, { new: true })?.lean();
