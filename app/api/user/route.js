import { checkToken } from "@/server/DB/utils/jwt";
import { connectToMongo } from "@/server/DL/connectToMongo";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export const POST = async (req) => {
   if (req.method === 'POST') {
      try {
         
         await connectToMongo()   
         const cookieStore = cookies()
         const token = cookieStore.get('token');
         const _id = checkToken(token.value)

         return NextResponse.json(_id);
      } catch (error) {
         console.log(error.message);
      }
   }
}

