import { Toaster } from "sonner"
import "./App.css"
import CartPage from "./components/CartPage"
import CHome from "./components/CHome"
import CLogin from "./components/CLogin"
import HeaderCart from "./components/HeaderCart"

function App() {
    return (
        // <div className="flex p-5 gap-5">
        //     <CLogin />
        //     <CHome />
        // </div>
        <div className="bg-gray-50 min-h-screen">
            <HeaderCart />
            <CartPage />
            <Toaster />
        </div>
    )
}

export default App
