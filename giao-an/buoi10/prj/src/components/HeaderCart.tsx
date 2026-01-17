import React from "react"
import { Button } from "./ui/button"
import { ShoppingCart, Trash2 } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useCart } from "@/contexts/cartContext"
export default function HeaderCart() {
    const { items, removeItem } = useCart()
    console.log(items)
    return (
        <div className="p-5 bg-gray-50 flex items-center justify-between">
            <h1 className="text-2xl font-medium">CartPage</h1>
            <div className="flex gap-5 items-center">
                <p className="text-blue-500 font-medium">Trang chủ</p>
                <p>Blog</p>
                <p>Về chúng tôi</p>
            </div>
            <div className="flex gap-5 items-center">
                <Popover>
                    <PopoverTrigger asChild>
                        <div className="relative">
                            <ShoppingCart />
                            <div className="absolute -top-1 -right-2 w-4 h-4 bg-red-500 rounded-full text-center flex items-center justify-center text-white text-[10px]">{items.length}</div>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-full md:max-w-xl">
                        {items.length === 0 ? (
                            <p className="w-full">Giỏ hàng trống...</p>
                        ) : (
                            <div className="space-y-5">
                                {items.map((item) => (
                                    <div key={item.id} className="border-b border-gray-100  pb-2 flex items-center gap-5">
                                        <img src={item.img} alt={item.name} className="w-20" />
                                        <div className="flex-1">
                                            <p className="line-clamp-2 font-medium">{item.name}</p>
                                            <p className="text-md font-medium text-red-500"> {item.price.toLocaleString()}đ</p>
                                        </div>
                                        <Button variant={"destructive"} onClick={() => removeItem(item.id)}>
                                            <Trash2 />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </PopoverContent>
                </Popover>
                <Button>Đăng nhập</Button>
            </div>
        </div>
    )
}
