"use server"

import { createRecipesService, updateRecipService } from "../recipe.service"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { saveImgToCloud } from "../cloudInary"

export const createRecipeAction = async (fd) => {
   const body = Object.fromEntries(fd)

   try {
      await createRecipesService(body)
      revalidatePath('/')
   } catch (error) {
      console.log({ error });
   }
   redirect('/')
}


export const updateRecipeAction = async (fd) => {
   let img = fd.get("image")
   // if (typeof img !== 'string') {
   //    img = await saveImgToCloud(fd.image);
   //    console.log('img', img);

   // }
   const _id = fd.get("_id")
   const body = Object.fromEntries(fd)
   body.ingredients = extractValues(body);

   try {
      await updateRecipService(_id, body);
   } catch (error) {
      console.log({ error });
   }
   redirect('/')
}

function extractValues(obj) {
   const values = [];
   for (const key in obj) {
     if (key.startsWith("ingredients")) {
       obj[key] !== "" && values.push(obj[key]);
       delete obj[key];
     }
   }
   return values;
 }
