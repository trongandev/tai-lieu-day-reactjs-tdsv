import { useState } from "react"

export default function Bai2() {
    const [show, setShow] = useState(false)

    return (
        <div className="space-y-4">
            <button onClick={() => setShow(!show)} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                {show ? "Thu gọn" : "Xem chi tiết"}
            </button>
            {show && (
                <p className="mt-4 text-gray-700 ">
                    Đây là đoạn văn bản chi tiết. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            )}
        </div>
    )
}
