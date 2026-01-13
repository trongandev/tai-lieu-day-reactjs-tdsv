import React from "react"

export default function Input({ type = "text", placeholder = "", value, onChange, className = "" }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300/50 ${className}`}
        />
    )
}
