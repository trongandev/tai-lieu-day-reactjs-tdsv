import React from "react"

export default function Input({ className = "", ...props }) {
    return <input {...props} className={`w-full flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300/50 ${className}`} />
}
