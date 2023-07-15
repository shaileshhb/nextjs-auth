import connect from "@/db/config"
import User from "@/models/user"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

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

    // create token
    const payload = {
      id: user._id,
      email: user.email,
      username: user.username
    }

    const jwtToken = jwt.sign(payload, process.env.TOKEN_SECRET!, { expiresIn: '1d' })
    const response = NextResponse.json({
      message: "Login successful"
    }, {
      status: 200
    })

    response.cookies.set('token', jwtToken, { httpOnly: true })

    return response
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}