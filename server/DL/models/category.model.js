import mongoose from "mongoose";

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

  recipes:  [{type: mongoose.Schema.Types.ObjectId, ref: 'Recipe'}],
});

export const CategoryModel =
  mongoose.models.Category || mongoose.model("Category", categorySchema);
