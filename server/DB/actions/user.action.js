import { createUserService } from "../service/user.service";


export const createUserAction = async (fd) => {
    const body = Object.fromEntries(fd);
    console.log(body)

    try {
        const result = await createUserService(body);
        // console.log(result)
    } catch (error) {
        console.log({ error });
    }
};
