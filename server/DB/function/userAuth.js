import { cookies } from "next/headers";
import { checkToken } from "@/server/DB/utils/jwt";

export const getPermission = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) return null;
  const { permission } = checkToken(token);
  return permission;
};
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) return null;
  const { permission } = checkToken(token);
  return permission;
};

export const isAdmin = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) return null; //throw new Error ({message: 'token not found'})
  try {
    const { permission } = checkToken(token);
    return permission === "admin";
  } catch (e) {
    return null; //throw new Error ({message: 'token not found'})
  }
};
export const isEditor = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) return null; //throw new Error ({message: 'token not found'})
  try {
    const { permission } = checkToken(token);
    return permission === "editor" || permission === "admin";
  } catch (e) {
    return null; //throw new Error ({message: 'token not found'})
  }
};
