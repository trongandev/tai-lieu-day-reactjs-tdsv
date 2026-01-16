import React from "react"

export default function Header() {
    return (
        <div className=" bg-green-200 flex items-center justify-between px-5 py-3">
            <h1>Header</h1>
            <div className="flex items-center gap-5">
                <p>Trang chủ</p>
                <p>Giới thiệu</p>
                <p>Liên hệ</p>
            </div>
            <button className="bg-blue-500 text-white px-3 py-1 rounded-md">Login</button>
        </div>
    )
}
