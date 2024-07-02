import { cookies } from "next/headers";
import { checkToken } from "@/server/DB/utils/jwt";

export const getPermission = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) return null;
  const { permission } = checkToken(token);
  return permission;
};

export const isAdmin = () => {
<<<<<<< HEAD
    const cookieStore = cookies()
    const token = cookieStore.get("token")?.value
    if (!token) return false //throw new Error ({message: 'token not found'})
    const { permission } = checkToken(token)
    return permission === 'admin'
}
export const isEditor = () => {
    const cookieStore = cookies()
    const token = cookieStore.get("token")?.value
    if (!token) return false //throw new Error ({message: 'token not found'})
    const { permission } = checkToken(token)
    return permission === 'editor' || permission === 'admin'
}
=======
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) return null; 
  try {
    const { permission } = checkToken(token);
    return permission === "admin";
  } catch (e) {
    return null; 
  }
};
export const isEditor = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) return null; 
  try {
    const { permission } = checkToken(token);
    return (permission === "editor" || permission === "admin");
  } catch (e) {
    return null;
  }
};
>>>>>>> 5e8b1827fd47177ab001ab63014c5847c15eb58b
