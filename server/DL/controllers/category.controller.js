import { CategoryModel } from "../models/category.model";

export const readCategorys = () => CategoryModel.find().lean();

export const readCategory = async (filter, populate = false) => {
  const query = await CategoryModel.findOne(filter);
  if (populate) {
    await query.populate("recipes");
  }
  return query
};

export const readCategoryById = (id) =>
  CategoryModel.findById(id).populate("recipes").lean();
export const createCategory = (data) => CategoryModel.create(data);
export const updateCategory = (id, data) =>
  CategoryModel.findByIdAndUpdate({ _id: id }, data, { new: true })?.lean();
