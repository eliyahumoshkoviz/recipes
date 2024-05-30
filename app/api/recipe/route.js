import { readRecipesService } from "@/server/DB/recipe.service";
import { connectToMongo } from "@/server/connectToMongo";
import { NextResponse } from "next/navigation";

export const GET = async () => {
   try {
      await connectToMongo()
      const recipes = await readRecipesService()
      return NextResponse.json(recipes)
   } catch (error) {
      console.log(error);
   }
}

export const POST = async () => {

}