import { RecipeModel } from "../models/recipe.model"

export const readRecipes = (filter) => RecipeModel.find(filter)
export const readRecipeById = (id) => RecipeModel.findById({ _id: id }).populate('category')
export const createRecipe = (data) => RecipeModel.create(data)
export const updateRecipe= (id, data) => RecipeModel.findByIdAndUpdate({ _id: id }, data, { new: true });
  