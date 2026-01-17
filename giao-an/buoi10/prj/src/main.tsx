import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { UserProvider } from "./contexts/userContext.tsx"
import { NavBarProvider } from "./contexts/navBarContext.tsx"
import { CartProvider } from "./contexts/cartContext.tsx"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <UserProvider>
            <NavBarProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </NavBarProvider>
        </UserProvider>
    </StrictMode>,
)
