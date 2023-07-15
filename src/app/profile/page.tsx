"use client"
import axios from "axios"
import { toast } from "react-hot-toast"
import { useEffect, useState } from "react"

export default function Profile() {

  const [user, setUser] = useState({
    username: "",
    email: "",
  })

  const getUserDetails = async () => {
    try {
      const response = await axios.get("/api/users/me")
      console.log(response);
      setUser(response.data.user)
    } catch (error: any) {
      console.error(error);
      toast.error(error.response.data.error)
    }
  }

  useEffect(() => {
    getUserDetails()
  }, [])


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {user && (
        <>
          <h1>Username: {user.username}</h1>
          <h1>Email: {user.email}</h1>
        </>
      )}
    </div>
  )
}
