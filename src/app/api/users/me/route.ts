import { extractToken } from "@/helpers/extractToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user"
import connect from "@/db/config";

connect()

export async function GET(request: NextRequest) {
  try {
    const userID = extractToken(request)
    const user = await User.findOne({ _id: userID }).select("-password -isAdmin")

    return NextResponse.json({
      user
    }, {
      status: 200
    })

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}