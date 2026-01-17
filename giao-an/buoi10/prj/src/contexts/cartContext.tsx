/* eslint-disable react-refresh/only-export-components */
import type { CartItem } from "@/types/cart"
import { createContext, useContext, useState } from "react"

interface CartContextType {
    items: CartItem[]
    addItem: (item: CartItem) => void
    removeItem: (itemId: number) => void
    clearCart: () => void
}
const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>([])
    const addItem = (item: CartItem) => {
        setItems((prevItems) => [...prevItems, item])
    }
    const removeItem = (itemId: number) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== itemId))
    }
    const clearCart = () => {
        setItems([])
    }
    return <CartContext.Provider value={{ items, addItem, removeItem, clearCart }}>{children}</CartContext.Provider>
}

export const useCart = (): CartContextType => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error("useCart must be used within a CartProvider")
    }
    return context
}
