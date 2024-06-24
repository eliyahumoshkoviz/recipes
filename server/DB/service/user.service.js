import { createUser } from "@/server/DL/controllers/user.controller";
import { checkFields, uploadImage } from "../function/function";
import { validEmail, validPassword } from "../function/userValidation";


export const createUserService = async (user) => {
    checkFields(user, ["email", "userName", "password"]);
    validEmail(user.email);
    validPassword(user.password);

    const userSchema = {
        email: user.email,
        userName: user.userName,
        password: user.password,
        avatar: user.avatar && (user.avatar = await uploadImage(user.avatar, 'userImage'))
    }

    return await createUser(userSchema);
};


