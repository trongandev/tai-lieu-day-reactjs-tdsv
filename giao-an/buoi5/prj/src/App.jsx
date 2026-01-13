import { useState } from "react"
import Bai1 from "./components/Bai1"
import Bai2 from "./components/Bai2"
import Bai3 from "./components/Bai3"

function App() {
    const [bgColor, setBgColor] = useState("bg-gray-50")
    return (
        <div className={`flex items-center justify-center flex-col gap-5  h-screen ${bgColor} transition-all duration-300 `}>
            <div className="">{bgColor}</div>
            <div className={`  p-10 grid grid-cols-3 gap-5 rounded-lg shadow-sm shadow-gray-100 border border-gray-200 `}>
                <button
                    onClick={() => setBgColor("bg-gray-50 ")}
                    className={`h-12 w-18 rounded-md  border border-gray-300 cursor-pointer hover:bg-gray-300 transition-[background-color,transform]  active:scale-[0.97] bg-gray-500`}
                >
                    Gray
                </button>
                <button
                    onClick={() => setBgColor("bg-red-100")}
                    className={`h-12 w-18 rounded-md  border border-gray-300 cursor-pointer hover:bg-gray-300 transition-[background-color,transform]  active:scale-[0.97] bg-red-500`}
                >
                    Red
                </button>
                <button
                    onClick={() => setBgColor("bg-green-100")}
                    className={`h-12 w-18 rounded-md  border border-gray-300 cursor-pointer hover:bg-gray-300 transition-[background-color,transform]  active:scale-[0.97] bg-green-500`}
                >
                    Green
                </button>
            </div>
        </div>
    )
}

export default App
