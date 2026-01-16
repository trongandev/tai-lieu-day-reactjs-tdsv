import React from "react"

export default function NewsCard() {
    return (
        <div className="bg-white border border-gray-200 shadow rounded-xl overflow-hidden p-5 w-full">
            <h1 className="font-bold">MOBILE</h1>
            <div className="flex gap-5 items-center border-t border-t-gray-200 pt-3 mt-3">
                <img src="https://cdn.wccftech.com/wp-content/uploads/2026/01/Xiaomi-XRING-02-2.jpg" alt="" className="w-30 h-30 object-cover rounded-md" />
                <div className="">
                    <h1 className="font-medium text-xl mb-2">Xiaomi sử dụng quy trình cũ cho chip XRING 02, không cạnh tranh với Qualcomm và MediaTek</h1>
                    <p className="text-sm text-gray-600 ">
                        Xiaomi quyết định sử dụng quy trình sản xuất cũ cho chip XRING 02, không cạnh tranh với Qualcomm và MediaTek trong thị trường chip smartphone.
                    </p>
                </div>
            </div>
            <div className="border-t border-t-gray-200 border-dashed mt-4 pt-4 text-sm">iPhone Fold của Apple có thể sử dụng bản lề kim loại lỏng và vỏ titan</div>
            <div className="border-t border-t-gray-200 border-dashed mt-4 pt-4 text-sm">iPhone 18 có nhiều tính năng đột phá</div>
            <div className="border-t border-t-gray-200 border-dashed mt-4 pt-4 text-sm">Samsung có thể giải quyết điểm yếu lớn nhất của Exynos với Exynos 2700 trên Galaxy S27</div>
        </div>
    )
}
