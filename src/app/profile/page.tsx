"use client"
import axios from "axios"
import { toast } from "react-hot-toast"
import { useEffect, useState } from "react"
import Loading from "./loading"

export default function Profile() {

  const [user, setUser] = useState({
    username: "",
    email: "",
  })

  const [isLoading, setIsLoading] = useState(false)

  const getUserDetails = async () => {
    try {
      setIsLoading(true)
      const response = await axios.get("/api/users/me")
      console.log(response);
      setUser(response.data.user)
    } catch (error: any) {
      console.error(error);
      toast.error(error.response.data.error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getUserDetails()
  }, [])


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {isLoading ?
        <>
          <Loading />
        </> :
        <>
          {user && (
            <>
              <h1>Username: {user.username}</h1>
              <h1>Email: {user.email}</h1>
            </>
          )}
        </>
      }
    </div>
  )
}
