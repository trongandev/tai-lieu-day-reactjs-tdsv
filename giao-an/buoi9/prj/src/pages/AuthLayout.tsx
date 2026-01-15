import React from "react"
import { Outlet, useNavigate } from "react-router-dom"
import Button from "../components/Button"

export default function AuthLayout() {
    const navigate = useNavigate()
    return (
        <div className="max-w-xl bg-gray-50 mx-auto p-5 rounded-xl mt-10 shadow">
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
