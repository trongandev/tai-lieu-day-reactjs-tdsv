import "./App.css"
import Bai1 from "./components/Bai1"
import Bai2 from "./components/Bai2"
import Bai3 from "./components/Bai3"

function App() {
    const handleChangeTheme = () => {
        document.documentElement.classList.toggle("dark")
    }
    return (
        <div>
            {/* <Bai3 /> */}
            {/* <div className="bg-green-500 w-50 h-50 tablet:bg-primary laptop:bg-secondary desktop:bg-third text-center text-white flex items-center justify-center text-2xl font-bold">
                <p className="block tablet:hidden">Mobile</p>
                <p className="hidden tablet:block laptop:hidden">Tablet</p>
                <p className="hidden laptop:block desktop:hidden">Laptop</p>
                <p className="hidden desktop:block">Desktop</p>
            </div> */}
            <div className="bg-red-500 dark:bg-green-500 w-50 h-50 flex items-center justify-center transition-all duration-500" onClick={handleChangeTheme}>
                <p className="text-text text-2xl font-bold">Chuyển đổi giao diện</p>
            </div>
        </div>
    )
}

export default App
