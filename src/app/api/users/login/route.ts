import connect from "@/db/config"
import User from "@/models/user"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from 'bcryptjs'

connect()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body
    console.log(body);

    // check if user exist
    const user = await User.findOne({ email })
    if (!user) {
      return NextResponse.json({ error: "Email not found" }, { status: 400 })
    }

    // check if password is correct
    const validPassword = await bcryptjs.compare(password, user.password)
    if (!validPassword) {
      return NextResponse.json({ error: "Wrong password entered" }, { status: 400 })
    }

    return NextResponse.json({ message: "User created successfully" }, { status: 200 })
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}