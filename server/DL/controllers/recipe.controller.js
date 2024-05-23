import { RecipelModel } from "../models/recipe.model"

export const readRecipes = (filter) => RecipelModel.find(filter).lean()
export const readRecipeById = (id) => RecipelModel.findById({ _id: id })
export const createRecipe = (data) => RecipelModel.create(data)
export const updateRecipe= (id, data) => RecipelModel.findByIdAndUpdate({ _id: id }, data, { new: true });
  