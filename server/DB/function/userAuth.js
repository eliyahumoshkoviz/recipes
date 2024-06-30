import { cookies } from "next/headers";
import { checkToken } from "@/server/DB/utils/jwt";

export const getPermission = () => {
    const cookieStore = cookies()
    const token = cookieStore.get("token")?.value
    if (!token) return null
    const { permission } = checkToken(token)
    return permission
}

export const isAdmin = () => {
    const cookieStore = cookies()
    const token = cookieStore.get("token")?.value
    if (!token) throw new Error ({message: 'token not found'})
    const { permission } = checkToken(token)
    return permission === 'admin'
}
export const isEditor = () => {
    const cookieStore = cookies()
    const token = cookieStore.get("token")?.value
    if (!token) throw new Error ({message: 'token not found'})
    const { permission } = checkToken(token)
    return permission === 'editor' || permission === 'admin'
}