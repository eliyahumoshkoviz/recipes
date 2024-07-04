import { isAdmin } from "@/server/DB/function/userAuth";
import { deleteRecipe, readRecipeByIdService } from "@/server/DB/service/recipe.service";
import { connectToMongo } from "@/server/DL/connectToMongo";
import { NextResponse } from "next/server";


export const GET = async (req, { params }) => {
   if (req.method === "GET") {
      try {
         await connectToMongo()
         const { id } = params;
         const recipes = await readRecipeByIdService(id, true)
         return NextResponse.json(recipes);
      } catch (error) {
         console.log(error);
      }
   }
}

export const DELETE = async (req, { params }) => {
   if (req.method === 'DELETE') {
      try {
         if(!isAdmin()) throw new Error("רק מנהל יכול למחוק מתכון")
         const { id } = params;
         const body = await req.json();
         const { category } = body;
         await deleteRecipe(id, category);
         return NextResponse.json({ message: 'המתכון נמחק בהצלחה' });
      } catch (error) {
         console.log(error?.message);
         return NextResponse.json({ error: error?.message });
      }
   }
}



