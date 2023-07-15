"use client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"
import { useEffect, useState } from "react"

export default function UserProfile({ params }: any) {

  const router = useRouter()

  const onLogout = async () => {
    try {
      await axios.get("/api/users/logout")
      toast.success("Logout successfull")
      router.push("/login")
    } catch (error: any) {
      console.error(error);
      toast.error(error.response.data.error)
    }
  }

  return (
    <div>
      <h1>User Details</h1>
      <h1>{params.id}</h1>
      <hr />

      <button className="bg-gray-500 hover:bg-gray-700 text-black font-bold 
        py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
        onClick={onLogout}>
        Logout
      </button>
    </div>
  )
}
