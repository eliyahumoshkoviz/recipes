import { UserModel } from "../models/user.model";

export const createUser = (data) => UserModel.create(data)



export const readUserById = async (id,select ='', populate = {}, lean = true) => {
   let user = await UserModel.findById(id, select);
   if (populate && populate.recipes && user) await user.populate("recipes.recipe");
   if (populate && populate.cayegory && user) await user.populate('recipes.recipe.category');
   if(lean) user.lean();
   return user;
}

export const updateUser= (id, data) => UserModel.findByIdAndUpdate({ _id: id }, data, { new: true }).lean();

export const deletUserById = (id) => UserModel.deleteOne({ _id: id })



async function readOne(filter, select ='', populate = {}) {
  let query = await UserModel.findOne(filter, select);
  if (populate && populate.chats && query) await query.populate("chats.chat");
  if (populate && populate.users && query) await query?.populate('chats.chat.to');
  return query?.toObject();
}

async function update(id, data) {
  // כמו findOne מחזיר את האוביקט ולא רק כמה הוגדר
  return await UserModel.findByIdAndUpdate({ _id: id }, data, { new: true });
}
async function del(id) {
  return await update(id, { isActive: false });
}

module.exports = { create, readOne, update, del };