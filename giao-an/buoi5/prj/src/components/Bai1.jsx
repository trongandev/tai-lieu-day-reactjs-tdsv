import { useState } from "react"

export default function Bai1() {
    const [count, setCount] = useState(0)
    const [error, setError] = useState("")
    // Hàm để tăng giá trị count
    const increment = () => {
        setCount(count + 1)
        setError("")
    }

    // Hàm để giảm giá trị count
    const decrement = () => {
        if (count < 1) {
            setError("Bạn không thể giảm nữa")
            return
        }
        setCount(count - 1)
    }
    return (
        <>
            <div className="flex items-center gap-5 ">
                <button
                    onClick={decrement}
                    className="h-12 w-12 rounded-md bg-gray-200 border border-gray-300 cursor-pointer hover:bg-gray-300 transition-[background-color,transform]  active:scale-[0.97]"
                >
                    -
                </button>
                <p className="flex items-center justify-center w-12 h-12 text-xl font-semibold transition-all duration-300 bg-gray-200 border border-gray-300 rounded-md">{count}</p>

                <button
                    onClick={increment}
                    className="h-12 w-12 rounded-md bg-gray-200 border border-gray-300 cursor-pointer hover:bg-gray-300 transition-[background-color,transform]  active:scale-[0.97]"
                >
                    +
                </button>
            </div>
            <div className="text-center ">{error && <p className="mt-5 text-sm text-red-500">{error}</p>}</div>
        </>
    )
}
