import { createUserService } from "@/server/DB/service/user.service";
import { NextResponse } from "next/server";



export const POST = async (req) => {
    if (req.method === 'POST') {
      try {
        const body = await req.json();
        const result = await createUserService(body);
       console.log(result);
       
        return NextResponse.json({result});
      } catch (err) {
        console.log({ err });
        return NextResponse.json({ error: 'Image upload failed', details: err.message }, { status: 500 });
      }
    } else {
      return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
    }
  };