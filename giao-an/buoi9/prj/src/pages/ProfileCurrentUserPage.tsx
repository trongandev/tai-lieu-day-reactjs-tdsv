import React, { useState } from "react"
import type { User } from "../types/user"
import ProfileUser from "../components/ProfileUser"

export default function ProfileCurrentUserPage() {
    const [user, setUser] = useState<User | null>(() => {
        const storedUser = localStorage.getItem("current_user")
        return storedUser ? JSON.parse(storedUser) : []
    })
    return (
        <div>
            <h1 className="text-2xl font-medium mb-10">Profile Page</h1>
            {user && <ProfileUser user={user} isCurrentUser={true} />}
        </div>
    )
}
