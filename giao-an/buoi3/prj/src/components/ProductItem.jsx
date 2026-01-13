import React from "react"

export default function ProductItem({ data }) {
    return (
        <div className="bg-gray-200 p-5 rounded-md shadow">
            <h3>{data.name}</h3>
        </div>
    )
}
