import connect from "@/db/config"
import User from "@/models/user"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from 'bcryptjs'

connect()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { username, email, password } = body
    console.log(body);

    // check if user exist
    const user = await User.findOne({ email })
    if (user) {
      return NextResponse.json({ error: "User already exist" }, { status: 400 })
    }

    // hash password
    const salt = await bcryptjs.genSalt(12)
    const hashedPassword = await bcryptjs.hash(password, salt)

    const newUser = new User({
      username,
      email,
      password: hashedPassword
    })

    await newUser.save()
    console.log(newUser);

    return NextResponse.json({ message: "User created successfully" }, { status: 200 })
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}