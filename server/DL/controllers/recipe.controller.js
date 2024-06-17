import { RecipeModel } from "../models/recipe.model"

export const readRecipes = () => RecipeModel.find()
export const readRecipeById = (id, populate = false) => 
    populate ? RecipeModel.findById(id).populate('category') : RecipeModel.findById(id);

export const createRecipe = (data) => RecipeModel.create(data)
export const updateRecipe= (id, data) => RecipeModel.findByIdAndUpdate({ _id: id }, data, { new: true }).lean();

export const deleteRecipeById = (id) => RecipeModel.deleteOne({ _id: id })