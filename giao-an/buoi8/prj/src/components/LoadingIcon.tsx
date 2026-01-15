import React from "react"

export default function LoadingIcon({ className = "" }) {
    return <div className={` h-8 w-8 border-2 border-gray-200 border-t-2 border-t-blue-500 rounded-full animate-spin mx-auto ${className}`}></div>
}
