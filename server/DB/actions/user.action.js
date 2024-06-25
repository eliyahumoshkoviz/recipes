"use server"
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
        return { success: await loginService(body) };

    } catch (error) {
        console.log(error?.message);
        return { error: error?.message }
    }
};
