import { NextRequest } from "next/server";
import jwt from "jsonwebtoken"

export const extractToken = (request: NextRequest) => {
  try {
    const payload = request.cookies.get("token")?.value || ""
    const decodedToken: any = jwt.verify(payload, process.env.TOKEN_SECRET!)
    return decodedToken.id
  } catch (error: any) {
    throw new Error(error.message)
  }
}