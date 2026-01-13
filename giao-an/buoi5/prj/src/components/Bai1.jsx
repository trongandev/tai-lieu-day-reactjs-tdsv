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
                <p className="text-xl font-semibold  h-12 w-12 flex items-center justify-center rounded-md bg-gray-200 border border-gray-300 transition-all duration-300">{count}</p>

                <button
                    onClick={increment}
                    className="h-12 w-12 rounded-md bg-gray-200 border border-gray-300 cursor-pointer hover:bg-gray-300 transition-[background-color,transform]  active:scale-[0.97]"
                >
                    +
                </button>
            </div>
            <div className="text-center ">{error && <p className="text-red-500 mt-5 text-sm">{error}</p>}</div>
        </>
    )
}
