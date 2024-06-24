import { createUser } from "@/server/DL/controllers/user.controller";
import { checkFields, uploadImage } from "../function/function";
import { validEmail, validPassword } from "../function/userValidation";


export const createUserService = async (user) => {
    checkFields(user, ["email", "userName", "password"]);
    console.log({ user });
    validEmail(user.email);
    validPassword(user.password);

    const userSchema = {
        email: user.email,
        userName: user.userName,
        password: user.password,
        avatar: user.avatar && (user.avatar = await uploadImage(user.avatar, 'userImage'))
    }
    const result = await createUser(userSchema);
    console.log(result)
    if (user) return true;

    return false;
};


