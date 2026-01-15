import { Link, Outlet, useLocation } from "react-router-dom"
import Button from "../components/Button"
import { useState } from "react"
import type { User } from "../types/user"

export default function HomeLayout() {
    const [currentUser, setCurrentUser] = useState<User | null>(() => {
        const storedUser = localStorage.getItem("current_user")
        return storedUser ? JSON.parse(storedUser) : null
    })
    const location = useLocation()
    const path = location.pathname
    console.log(currentUser)

    const handleLogout = () => {
        localStorage.removeItem("current_user")
        setCurrentUser(null)
    }
    return (
        <div>
            <div className="flex justify-between items-center gap-5 w-full bg-gray-200 py-5 px-10">
                <Link to="/" className="text-blue-600 font-extrabold text-2xl">
                    AuthApp
                </Link>
                <div className="flex gap-5 items-center">
                    <Link to="/" className={`${path === "/" ? "text-red-500" : ""}`}>
                        Home
                    </Link>
                    <Link to="/about" className={`${path === "/about" ? "text-red-500" : ""}`}>
                        About
                    </Link>
                    <Link to="/another" className={`${path === "/another" ? "text-red-500" : ""}`}>
                        NotFound Page
                    </Link>
                </div>
                {currentUser ? (
                    <div className="">
                        <div>
                            Xin chào,{" "}
                            <Link to={`/profile`} className="underline cursor-pointer">
                                {currentUser.displayName}
                            </Link>
                        </div>
                        <Button onClick={handleLogout} variant="danger">
                            Logout
                        </Button>
                    </div>
                ) : (
                    <Link to="/auth/login">
                        <Button>Login</Button>
                    </Link>
                )}
            </div>
            <div className="py-10 w-full md:max-w-7xl mx-auto">
                <Outlet />
            </div>
        </div>
    )
}
