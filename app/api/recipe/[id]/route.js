import { readRecipeByIdService} from "@/server/DB/recipe.service";
import { connectToMongo } from "@/server/DL/connectToMongo";
import { NextResponse } from "next/server";


export const PUT = async (req, { params }) => {
   try {
      const body = await req.json();
      const { id } = params;
      const searchParams = Object.fromEntries(req.nextUrl.searchParams)
      return NextResponse.json({ body, id, searchParams })
   } catch (error) {
      console.log(error);
   }
}

export const GET = async (req, { params }) => {
   try {
      await connectToMongo()
      const { id } = params;
      const recipes = await readRecipeByIdService( id )
      return NextResponse.json(recipes);
   } catch (error) {
      console.log(error);
   }
}

