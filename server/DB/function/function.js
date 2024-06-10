import {readCategoryService} from "../category.service";
const extractValues = (obj) => {
  const values = [];
  for (const key in obj) {
    if (key.startsWith("ingredients")) {
      obj[key] !== "" && values.push(obj[key]);
      delete obj[key];
    }
  }
  return values;
};

const checkFields = (obj, fields) => {
  for (const field of fields) {
    if (obj[field] === "") {
      throw new Error(`Field '${field}' does not exist in object`);
    }
  }
};

const getCategoryId = async (filter) => {
    const category = await readCategoryService(filter);
    return  category._id;
  };
  
module.exports = { extractValues, checkFields, getCategoryId };
