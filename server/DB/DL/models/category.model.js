import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  mainDishes: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Recipe",
    unique: true
  }],
  extras: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Recipe",
    unique: true
  }],
  desserts: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Recipe",
    unique: true
  }],
  cakes: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Recipe",
    unique: true
  }],
});

export const CategoryModel =
  mongoose.models.Recipe || mongoose.model("Category", categorySchema);
