"use server"

import { revalidatePath } from "next/cache"
import { RedirectType, redirect } from "next/navigation"
import { extractValues } from '../function/function'
import { createRecipesService, updateRecipService } from "../recipe.service"
import { createCategorysService } from "../category.service"


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

   redirect(`/recipe/${_id}`)

}

export const cretaeCategoryAction = async (fd) => {
   const body = Object.fromEntries(fd)
// console.log("aaaa",body);
   try {
      await createCategorysService(body)
      revalidatePath('/createRecipe')
   } catch (error) {
      console.log({ error });
   }
   redirect('/createRecipe')
}