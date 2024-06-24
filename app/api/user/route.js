import { createUserService } from "@/server/DB/service/user.service";
import { NextResponse } from "next/server";



export const POST = async (req) => {
    if (req.method === 'POST') {
      try {
        const body = await req.json();
        const user = await createUserService(body);
       console.log(user);
       
        return NextResponse.json({body});
      } catch (err) {
        console.log({ err });
        return NextResponse.json({ error: 'Image upload failed', details: err.message }, { status: 500 });
      }
    } else {
      return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
    }
  };