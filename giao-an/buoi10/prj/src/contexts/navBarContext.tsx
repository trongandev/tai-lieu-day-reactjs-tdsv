/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react"

interface NavBarContextType {
    isOpen: boolean
    toggle: () => void
}

const NavBarContext = createContext<NavBarContextType | undefined>(undefined)

export const NavBarProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return <NavBarContext.Provider value={{ isOpen, toggle }}>{children}</NavBarContext.Provider>
}

export const useNavBar = (): NavBarContextType => {
    const context = useContext(NavBarContext)
    if (context === undefined) {
        throw new Error("useNavBar must be used within a NavBarProvider")
    }
    return context
}
