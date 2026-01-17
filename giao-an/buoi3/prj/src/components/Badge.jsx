import React from "react"

export default function Badge({ className, variant = "active", children }) {
    const variants = {
        active: "bg-green-500",
        inactive: "bg-red-500",
        pending: "bg-yellow-500",
    }
    return <div className={`text-white inline-block text-xs px-3 py-1 rounded-full ${variants[variant]} ${className} `}>{children}</div>
}
