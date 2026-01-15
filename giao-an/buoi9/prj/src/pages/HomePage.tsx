import React, { useState } from "react"
import type { User } from "../types/user"
import { Mail, UserIcon } from "lucide-react"
import { Link } from "react-router-dom"

export default function HomePage() {
    const [users] = useState<User[]>(() => {
        const storedUsers = localStorage.getItem("users_data")
        return storedUsers ? JSON.parse(storedUsers) : []
    })
    console.log(users)
    return (
        <div>
            <h1 className="text-2xl font-medium">Trang chủ quản lý users</h1>
            <div className="grid grid-cols-5 gap-5 mt-5">
                {users.map((user, index) => (
                    <Link to={`/profile/${user.id}`} key={index} className="border border-gray-300 rounded-md p-5">
                        <div className="flex gap-2 items-center">
                            <UserIcon size={20} /> {user.displayName}
                        </div>
                        <div className="flex gap-2 items-center">
                            <Mail size={20} /> {user.email}
                        </div>
                    </Link>
                ))}
                {users.length === 0 && <div>Chưa có user nào đăng ký</div>}
            </div>
        </div>
    )
}
