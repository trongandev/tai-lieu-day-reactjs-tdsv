/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react"

interface User {
    username: string
    password: string
}

interface UserContextType {
    user: User | null
    login: (newUser: User) => void
    logout: () => void
    update: (username: string) => void
}

// tạo context
const UserContext = createContext<UserContextType | null>(null)

// tạo provider cho UserContext
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)

    const login = (newUser: User) => {
        setUser(newUser)
    }

    const logout = () => {
        setUser(null)
    }

    const update = (username: string) => {
        if (user) {
            setUser({ ...user, username })
        }
    }

    return <UserContext.Provider value={{ user, login, logout, update }}>{children}</UserContext.Provider>
}

// custom hook để sử dụng UserContext
export const useUser = (): UserContextType | null => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error("useUser must be used within a UserProvider")
    }
    return context
}
