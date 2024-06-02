"use server"

import { createRecipesService, updateRecipService } from "../recipe.service"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

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


export const updateRecipeAction = async (_id,fd) => {
   const body = Object.fromEntries(fd)
   try {
      await updateRecipService(id, fd)
   } catch (error) {
      console.log({ error });
   }
   redirect('/')
} 

