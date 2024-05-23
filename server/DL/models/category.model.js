import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({

  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  recipes:  [{type: mongoose.Schema.Types.ObjectId}],
});

export const CategoryModel =
  mongoose.models.Category || mongoose.model("Category", categorySchema);
