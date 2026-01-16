import React from "react"

export default function Button() {
    return (
        <button className={`rounded  bg-blue-500 hover:bg-blue-600 text-white transition-all duration-150 active:scale-[0.97] hover:scale-[1.02] cursor-pointer px-4 py-2 text-base`}>
            Component Button
        </button>
    )
}
