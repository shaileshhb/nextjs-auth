"use client";

import Link from "next/link";
import { useState } from "react";

export default function Login() {

  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const onChange = (e: any) => {
    setUser({
      ...user,
      [e.target.id]: e.target?.value
    })
  }

  const onLogin = async () => {
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="mb-4">Login</h1>
      <hr />
      <div className="flex flex-col items-center justify-center mb-4">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={user.email} placeholder="Enter email"
          onChange={(e) => onChange(e)} className="shadow appearance-none border 
          rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none 
          focus:shadow-outline" />
      </div>
      <div className="flex flex-col items-center justify-center mb-4">
        <label htmlFor="password">Password</label>
        <input type="Password" id="password" value={user.password} placeholder="Enter password"
          onChange={(e) => onChange(e)} className="shadow appearance-none border 
          rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none 
          focus:shadow-outline" />
      </div>
      <div className="flex items-center justify-between space-x-28">
        <button className="bg-gray-500 hover:bg-gray-700 text-black font-bold 
        py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Login
        </button>
        <Link href="/signup">Signup</Link>
      </div>
    </div>
  )
}
