"use server"
import { cookies } from "next/headers";
import { createUserService, loginService } from "../service/user.service";

export const createUserAction = async (prev, fd) => {
    const body = Object.fromEntries(fd);

    try {
        return { success: await createUserService(body) };

    } catch (error) {
        console.log(error?.message);
        return { error: error?.message }
    }
};
export const loginAction = async (prev, fd) => {
    const body = Object.fromEntries(fd);

    try {
        const success = await loginService(body);
        cookies().set("token",success.token,{secure: true,path: '/',httpOnly: true,})
        cookies().set("name",success.userlogged?.name,{secure: true,path: '/',httpOnly: true,})
        cookies().set("avatar",success.userlogged?.avatar,{secure: true,path: '/',httpOnly: true,})
        return { success };

    } catch (error) {
        console.log(error?.message);
        return { error: error?.message }
    }
};
