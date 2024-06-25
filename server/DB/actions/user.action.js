"use server"
import { createUserService } from "../service/user.service";

export const createUserAction = async (prev, fd) => {
    const body = Object.fromEntries(fd);


    try {
        return { success: await createUserService(body) };

    } catch (error) {
        console.log(error?.message);
        return { error: error?.message }
    }
};
