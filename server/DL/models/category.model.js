import mongoose from "mongoose";
import { RecipeModel } from "./recipe.model";
const categorySchema = new mongoose.Schema({

  title: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  colorLabel: {
    type: String,
    require: true,
  },

  recipes:  [{type: mongoose.Types.ObjectId, ref: 'Recipe'}],
});

export const CategoryModel =
  mongoose.models.Category || mongoose.model("Category", categorySchema);
