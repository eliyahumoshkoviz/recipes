"use server"

import { createRecipesService, updateRecipService } from "../recipe.service"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const createRecipeAction = async (fd) => {
   const body = Object.fromEntries(fd)

   const img =  fd.get("image")
   console.log(img);
   try {
      await createRecipesService(body)
      revalidatePath('/')
   } catch (error) {
      console.log({ error });
   }
   redirect('/')
} 


export const updateRecipeAction = async (_id,fd) => {
   const body = Object.fromEntries(fd)
   console.log(_id,fd);
   try {
      // await updateRecipService(id, fd)
   } catch (error) {
      console.log({ error });
   }
   redirect('/')
} 

