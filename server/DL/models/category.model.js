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
  recipes: {
    type: [mongoose.types.ObjectId],
    require: true,
  }
});

export const CategoryModel =
  mongoose.models.Category || mongoose.model("Category", categorySchema);
