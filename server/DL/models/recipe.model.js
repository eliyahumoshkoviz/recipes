import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  preparationTime: {
    type: Number,
    required: true,
  },
  servings: {
    type: Number,
    required: true,
  },
  category: [
    {
      type: String,
      enum: ["mainDishes", "extras", "desserts", "cakes"],
      required: true,
    },
  ],
});

export const RecipeModel =
  mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);
