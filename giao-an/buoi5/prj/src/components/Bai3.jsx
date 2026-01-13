import React from "react"
import { useState } from "react"

export default function Bai3() {
    const [input, setInput] = useState("")

    return (
        <>
            <input type="text" placeholder="Nhập giá trị vào ô" className="border border-gray-300 h-12 px-3 rounded-md w-full " value={input} onChange={(e) => setInput(e.target.value)} />
            <p className="mt-4">
                Bạn đã nhập: <span className="bg-yellow-200">{input || "Chưa có giá trị"}</span>
            </p>
        </>
    )
}
