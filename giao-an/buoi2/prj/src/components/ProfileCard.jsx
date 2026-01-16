import React from "react"

export default function ProfileCard() {
    return (
        <div className="bg-white rounded-lg shadow-md p-10 max-w-sm">
            <div className="flex flex-col items-center">
                <img src="https://camerabox.vn/wp-content/uploads/2025/05/thuat-ngu-nhiep-anh.jpg" alt="Profile" className="w-32 h-32 rounded-full mb-4 object-cover" />
                <h2 className="text-2xl font-bold mb-2">Nguyễn Văn A</h2>
                <p className="text-gray-600 mb-4">Web Developer</p>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Follow</button>
            </div>
        </div>
    )
}
