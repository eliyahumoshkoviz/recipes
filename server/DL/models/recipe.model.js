import mongoose from "mongoose";
import Category from './category.model'
 

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
    ref:'Category',
    require: true,
  },]

});

export const RecipeModel =
  mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);
