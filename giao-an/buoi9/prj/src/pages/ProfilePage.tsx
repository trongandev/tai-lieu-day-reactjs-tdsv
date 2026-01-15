import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import type { User } from "../types/user"
import ProfileUser from "../components/ProfileUser"

export default function ProfilePage() {
    const params = useLocation().pathname
    const userId = params.split("/").pop()
    const [user, setUser] = useState<User | null>(() => {
        const storedUserData = localStorage.getItem("users_data")
        const users: User[] = storedUserData ? JSON.parse(storedUserData) : []
        return users.find((user) => String(user.id) === String(userId)) || null
    })
    console.log(user)

    return (
        <div className="">
            <h1 className="text-2xl font-medium mb-10">Profile Page</h1>
            {user && <ProfileUser user={user} />}
        </div>
    )
}
