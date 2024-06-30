import { NextResponse } from "next/server";
import { deleteRecipeByIdService } from "@/server/DB/service/category.service";
import { connectToMongo } from "@/server/DL/connectToMongo";
import { isAdmin } from "@/server/DB/function/userAuth";

export const DELETE = async (req, { params }) => {
    await connectToMongo()
    if(req.method === 'DELETE'){
       const { id } = params;
       try {
         if(!isAdmin()) throw new Error("only admin can delete a category" )
          await deleteRecipeByIdService(id);
          return NextResponse.json({ message: 'Recipe deleted successfully' });
       } catch (error) {
          console.log(error);
       }
    }
 }