import type { RouteObject } from "react-router-dom"
import HomeLayout from "./HomeLayout"
import HomePage from "./HomePage"
import AboutPage from "./AboutPage"
import AuthLayout from "./AuthLayout"
import LoginPage from "./LoginPage"
import RegisterPage from "./RegisterPage"
import NotFound from "./NotFound"
import ProfilePage from "./ProfilePage"
import ProfileCurrentUserPage from "./ProfileCurrentUserPage"

const routes: RouteObject[] = [
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/profile",
                element: <ProfileCurrentUserPage />,
            },
            {
                path: "/profile/:id",
                element: <ProfilePage />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "/auth/login",
                element: <LoginPage />,
            },
            {
                path: "/auth/register",
                element: <RegisterPage />,
            },
        ],
    },
]

export default routes
