"use server"

import { connectToMongo } from "@/server/DL/connectToMongo"
import { createRecipesService } from "../recipe.service"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export const createRecipeAction = async (fd) => {
   const body = Object.fromEntries(fd)

   try {
      await connectToMongo()
      await createRecipesService(body)
      revalidatePath('/')
   } catch (error) {
      console.log({ error });
   }
   redirect('/')
} 