import React from "react"
import { Button } from "./ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/cartContext"
import { toast } from "sonner"
import type { CartItem } from "@/types/cart"

export default function CartPage() {
    const { addItem } = useCart()
    const carts = [
        { id: 1, name: "Samsung Galaxy A56 5G 12GB/256GB", img: "https://cdn.tgdd.vn/Products/Images/42/334932/samsung-galaxy-a56-5g-gray-thumb-1-600x600.jpg", quantity: 929, price: 10430000 },
        { id: 2, name: "realme C75 8GB/128GB", img: "https://cdn.tgdd.vn/Products/Images/42/332234/realme-c75-8gb-128gb-thumb-600x600.jpg", quantity: 93, price: 7590000 },
        {
            id: 3,
            name: "MacBook Pro 14 inch Nano M5 16GB/512GB",
            img: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/358093/macbook-pro-14-inch-nano-m5-16gb-512gb-den-638962956060321611-600x600.jpg",
            quantity: 34,
            price: 4950000,
        },
        {
            id: 4,
            name: "MSI Gaming Bravo 15 B7ED R5 7535HS (010VN)",
            img: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/314849/msi-bravo-15-b7ed-r5-010vn-thumb-638754849999959588-600x600.jpg",
            quantity: 82,
            price: 43590000,
        },
        {
            id: 5,
            name: "Bộ Bàn Phím Chuột Không Dây Philips SPT6348",
            img: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/4547/338172/bo-ban-phim-chuot-khong-day-philips-spt6348-160525-103518-470-600x600.jpg",
            quantity: 32,
            price: 1690000,
        },
    ]

    const handleAddCart = (cart: CartItem) => {
        addItem(cart)
        toast.success("Đã thêm vào giỏ hàng")
    }
    return (
        <div className="p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5">
                {carts.map((cart) => (
                    <div key={cart.id} className="bg-white border border-gray-200 shadow p-2 py-3 space-y-3 rounded-md">
                        <img src={cart.img} alt={cart.name} className="w-full h-60" />
                        <p className="line-clamp-2 h-12 font-medium">{cart.name}</p>
                        <p className="text-gray-600">Còn {cart.quantity} sản phẩm</p>
                        <p className="text-xl font-medium text-red-500"> {cart.price.toLocaleString()}đ</p>
                        <Button className="w-full" variant={"destructive"} onClick={() => handleAddCart(cart)}>
                            <ShoppingCart /> Mua ngay
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}
