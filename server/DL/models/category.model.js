import mongoose from "mongoose";
<<<<<<< HEAD
import { RecipeModel } from "./recipe.model";
=======
import Recipe from '../models/recipe.model';

>>>>>>> 7bac08d8dc9cdd66eec6f352f76999dae66cc27b
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

<<<<<<< HEAD
  recipes:  [{type: mongoose.Types.ObjectId, ref: 'Recipe'}],
=======
  recipes:  [{type: mongoose.Schema.Types.ObjectId, ref: 'Recipe'}],
>>>>>>> 7bac08d8dc9cdd66eec6f352f76999dae66cc27b
});

export const CategoryModel =
  mongoose.models.Category || mongoose.model("Category", categorySchema);
