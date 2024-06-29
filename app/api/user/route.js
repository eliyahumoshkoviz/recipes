import { checkToken } from "@/server/DB/utils/jwt";
import { connectToMongo } from "@/server/DL/connectToMongo";
import { NextResponse } from "next/server";


export const POST = async (req) => {
   if (req.method === 'POST') {
      try {
         await connectToMongo()
         const body = await req.json();
         const _id = checkToken(body.token)
         return NextResponse.json(_id);
      } catch (error) {
         console.log(error.message);
      }
   }
}

