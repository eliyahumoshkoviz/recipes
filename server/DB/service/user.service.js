// import { createUser, readUserOne } from "@/server/DL/controllers/user.controller";
// import { checkFields, uploadImage } from "../function/function";
// const bcrypt = require('bcrypt');
const saltRounds = 10;
import { validEmail, validPassword } from "../function/userValidation";
import { createToken } from "../utils/jwt";


export const createUserService = async (user) => {
    checkFields(user, ["email", "userName", "password"]);
    validEmail(user.email);
    validPassword(user.password);
    
    const userSchema = {
        email: user.email,
        userName: user.userName,
        password: bcrypt.hashSync(user.password, saltRounds),
        avatar: user.avatar && (user.avatar = await uploadImage(user.avatar, 'userImage'))
    }
    const result = await createUser(userSchema);
    return result.email !==undefined;
};

export const login = async (data) => {
    const user = await readUserOne({ email: data.email }, {}, true,'password');
    if (!user) throw { msg: 'User not found' }
    console.log({ user });
    const correctPassword = bcrypt.compareSync(data.password, user.password)
    if (!correctPassword) throw { msg: 'password mismatch' }
    const token = createToken(user._id);
    user.password = null
    return { token: token, user: user.avatar }
}


