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


export const updateRecipeAction = async (id,prev,fd) => {
   // let img = fd.get("image")
   // if (typeof img !== 'string') {
   //    console.log('img', img);
   //    return;ו
      // img = await saveImgToCloud(fd.image);

   // }
   const body = Object.fromEntries(fd)
   body.ingredients = extractValues(body);
   try {
      await updateRecipService(id, body);
      revalidatePath(`/recipe/${id}`)
      return 'The recipe has been successfully updated'
   } catch (error) {
      console.log({ error });
   }

   redirect(`/recipe/${id}`)

}

export const cretaeCategoryAction = async (fd) => {
   const body = Object.fromEntries(fd)
   try {
      await createCategorysService(body)
      revalidatePath('/createRecipe')
   } catch (error) {
      console.log({ error });
   }
   redirect('/createRecipe')
}