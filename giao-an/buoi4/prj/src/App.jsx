import "./App.css"
import Bai1 from "./components/Bai1"
import Bai2 from "./components/Bai2"
import Bai3 from "./components/Bai3"

function App() {
    const handleChangeTheme = () => {
        document.documentElement.classList.toggle("dark")
    }

    return (
        // <div className="bg-red-500 dark:bg-green-500 w-50 h-50 transition-all duration-500" onClick={handleChangeTheme}>
        //     <p className="text-text text-2xl font-bold">Chuyển đổi giao diện</p>
        // </div>
        <div className="p-10">
            {/* <button
                className="bg-primary px-4 py-2 rounded-lg 
            text-white active:scale-[0.95] hover:scale-105 
            transition-all duration-150 cursor-pointer"
            >
                Đăng nhập
            </button> */}
            {/* Loading Icon*/}
            <div
                className="w-20 h-20 border border-r-2 
            border-transparent border-r-primary 
            rounded-full animate-spin"
            ></div>
        </div>
    )
}

export default App
