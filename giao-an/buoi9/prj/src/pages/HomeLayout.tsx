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
            <div className="flex items-center justify-between w-full gap-5 px-10 py-5 bg-gray-200">
                <Link to="/" className="text-2xl font-extrabold text-blue-600">
                    AuthApp
                </Link>
                <div className="flex items-center gap-5">
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
            <div className="w-full py-10 mx-auto md:max-w-7xl">
                <Outlet />
            </div>
        </div>
    )
}
