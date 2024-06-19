import { NextResponse } from "next/server";
import { deleteRecipeByIdService } from "@/server/DB/category.service";
import { connectToMongo } from "@/server/DL/connectToMongo";

export const DELETE = async (req, { params }) => {
    await connectToMongo()
    if(req.method === 'DELETE'){
       const { id } = params;
       try {
          await deleteRecipeByIdService(id);
          return NextResponse.json({ message: 'Recipe deleted successfully' });
       } catch (error) {
          console.log(error);
       }
    }
 }