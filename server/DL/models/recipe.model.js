import mongoose from "mongoose";
<<<<<<< HEAD
import { CategoryModel } from "./category.model";
=======
import Category from '../models/category.model';
 
>>>>>>> 7bac08d8dc9cdd66eec6f352f76999dae66cc27b

const recipeSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  ingredients: [{
    type: String,
    required: true,
  }],
  typeFood: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  preparationTime: {
    type: Number,
  },
  CookingTime: {
    type: Number,
  },
  servings: {
    type: Number,
  },
  category:
  [{
    type: mongoose.Schema.Types.ObjectId,
<<<<<<< HEAD
    ref: "Category",
=======
    ref:'Category',
>>>>>>> 7bac08d8dc9cdd66eec6f352f76999dae66cc27b
    require: true,
  },]

}, {
  strictPopulate: false
});

export const RecipeModel =
  mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);
