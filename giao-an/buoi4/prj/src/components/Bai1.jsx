import React from "react"

export default function Bai1() {
    return (
        <div>
            <nav className="flex items-center justify-between p-4 text-white bg-gray-800">
                <div className="text-xl font-bold">Logo</div>
                <ul className="hidden space-x-6 md:flex">
                    <li>
                        <a href="#" className="hover:text-gray-300">
                            Trang chủ
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-300">
                            Giới thiệu
                        </a>
                    </li>
                    <li>
                        <a href="#" className="sr-only hover:text-gray-300">
                            Dịch vụ
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-300">
                            Liên hệ
                        </a>
                    </li>
                </ul>
                <div className="md:hidden">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
            </nav>
        </div>
    )
}
