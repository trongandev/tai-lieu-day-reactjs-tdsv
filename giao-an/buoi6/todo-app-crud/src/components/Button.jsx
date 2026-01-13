import React from "react"

export default function Button({ onClick, children = "Nút", type = "button", size = "md", variant = "primary", className = "" }) {
    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-5 py-2.5 text-lg",
    }
    const variants = {
        primary: "bg-blue-500 hover:bg-blue-600 text-white",
        secondary: "bg-gray-500 hover:bg-gray-600 text-white",
        danger: "bg-red-500 hover:bg-red-600 text-white",
        success: "bg-green-500 hover:bg-green-600 text-white",
    }

    return (
        <button onClick={onClick} type={type} className={`rounded  ${sizes[size]} ${variants[variant]} ${className} transition-all duration-150 active:scale-[0.97] hover:scale-[1.02] cursor-pointer`}>
            {children}
        </button>
    )
}
