import React from "react"

export default function Bai3() {
    return (
        <div className="max-w-2xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">Thông tin giao hàng</h2>
            <form className="space-y-4">
                {/* Hàng 1: Họ - Tên */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">Họ</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nhập họ" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Tên</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nhập tên" />
                    </div>
                </div>

                {/* Hàng 2: Địa chỉ */}
                <div>
                    <label className="block text-sm font-medium mb-2">Địa chỉ</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Nhập địa chỉ" />
                </div>

                {/* Hàng 3: Thành phố - Quận - Zipcode */}
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-2">Thành phố</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Thành phố" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Quận</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Quận" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Zipcode</label>
                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Zipcode" />
                    </div>
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                    Xác nhận
                </button>
            </form>
        </div>
    )
}
