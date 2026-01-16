import React from "react"
import { Outlet, useNavigate } from "react-router-dom"
import Button from "../components/Button"

export default function AuthLayout() {
    const navigate = useNavigate()
    return (
        <div className="max-w-xl p-5 mx-auto mt-10 shadow bg-gray-50 rounded-xl">
            <div className="mb-5">
                <Button onClick={() => navigate("/")} variant="secondary">
                    {" "}
                    Quay về
                </Button>
            </div>
            <Outlet />
        </div>
    )
}
