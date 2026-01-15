import "./App.css"

// demo tailwindcss
// function App() {
//     return (
//         <div className="p-10">
//             <h1 className="text-3xl font-bold text-center">Xin chào</h1>
//             <p className="text-blue-800">Em tên là An</p>
//             <p className="bg-orange-200">Em sẽ là giáo viên dạy lớp React của TDSV</p>
//             <img
//                 src="https://200lab.io/blog/_next/image?url=https%3A%2F%2Fstatics.cdn.200lab.io%2F2024%2F11%2Fhuong-dan-cai-dat-tailwind-css-co-ban.png&w=3840&q=75"
//                 alt=""
//                 className="mt-5 rounded-2xl w-full"
//             />
//             <div className="mt-5 bg-red-50 p-5 rounded-lg border border-red-300 shadow-lg ">
//                 <h1 className="text-red-600 text-xl font-medium">Lưu ý:</h1>
//                 <p className="text-red-800">Chúng ta sẽ học lý thuyết rất ít, hầu như là thực hành</p>
//             </div>
//             <h1 className="mt-10 mb-5 text-2xl font-medium text-center">Chúng ta sẽ học về</h1>
//             <div className="flex gap-5 justify-center">
//                 <div className="bg-green-200 w-32 h-32 rounded-full  flex items-center justify-center text-green-700 font-bold">Cách bo tròn</div>
//                 <div className="bg-purple-200 w-32 h-32 rounded-full  flex items-center justify-center text-purple-700 font-bold">Flexbox</div>
//                 <div className="bg-blue-200 w-32 h-32 rounded-full  flex text-center items-center justify-center text-blue-700 font-bold">Căn giữa chữ trong div</div>
//             </div>
//         </div>
//     )
// }

//demo card travel
// function App() {
//     return (
//         <div className="flex gap-5 mx-auto py-50 max-w-5xl">
//             <div className="flex-1 border border-gray-200 shadow rounded-xl overflow-hidden">
//                 <img src="https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/2090486035-1676518664908.jpg" className="w-full h-48 object-cover" alt="" />
//                 <div className="p-5 space-y-3">
//                     <p className="text-gray-500">TRAVEL</p>
//                     <h1 className="font-medium text-gray-700 text-2xl">Trip Planing for Total Beginners</h1>
//                     <p className="line-clamp-3 text-gray-600">
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui soluta, illum beatae ab nam quaerat, dolorum hic molestias ipsum unde quia corrupti nulla velit quibusdam. Placeat
//                         iusto nobis perferendis doloremque!
//                     </p>
//                 </div>
//             </div>
//             <div className="flex-1 border border-gray-200 shadow rounded-xl overflow-hidden">
//                 <img src="https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/shutterstock1577304508huge-1676518445531.jpg" className="w-full h-48 object-cover" alt="" />
//                 <div className="p-5 space-y-3">
//                     <p className="text-gray-500">TRAVEL</p>
//                     <h1 className="font-medium text-gray-700 text-2xl">7 Way to Survival in the Japan</h1>
//                     <p className="line-clamp-3 text-gray-600">
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui soluta, illum beatae ab nam quaerat, dolorum hic molestias ipsum unde quia corrupti nulla velit quibusdam. Placeat
//                         iusto nobis perferendis doloremque!
//                     </p>
//                 </div>
//             </div>
//             <div className="flex-1 border border-gray-200 shadow rounded-xl overflow-hidden">
//                 <img src="https://dulichlaichau.vn/mypicture/images/Nm2024/Thng5Trang/1--dai-dien-dinh-nui.jpg" className="w-full h-48 object-cover" alt="" />
//                 <div className="p-5 space-y-3">
//                     <p className="text-gray-500">TRAVEL</p>
//                     <h1 className="font-medium text-gray-700 text-2xl">5 Amazing Travel Destinations</h1>
//                     <p className="line-clamp-3 text-gray-600">
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui soluta, illum beatae ab nam quaerat, dolorum hic molestias ipsum unde quia corrupti nulla velit quibusdam. Placeat
//                         iusto nobis perferendis doloremque!
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

//demo News
// function App() {
//     return (
//         <div className="mx-auto max-w-xl text-gray-700 pt-5">
//             <div className="border border-gray-200 shadow rounded-xl overflow-hidden p-5">
//                 <h1 className="font-bold">MOBILE</h1>
//                 <div className="flex gap-5 items-center border-t border-t-gray-200 pt-3 mt-3">
//                     <img src="https://cdn.wccftech.com/wp-content/uploads/2026/01/Xiaomi-XRING-02-2.jpg" alt="" className="w-30 h-30 object-cover rounded-md" />
//                     <div className="">
//                         <h1 className="font-medium text-xl mb-2">Xiaomi sử dụng quy trình cũ cho chip XRING 02, không cạnh tranh với Qualcomm và MediaTek</h1>
//                         <p className="text-sm text-gray-600 ">
//                             Xiaomi quyết định sử dụng quy trình sản xuất cũ cho chip XRING 02, không cạnh tranh với Qualcomm và MediaTek trong thị trường chip smartphone.
//                         </p>
//                     </div>
//                 </div>
//                 <div className="border-t border-t-gray-200 border-dashed mt-4 pt-4 text-sm">iPhone Fold của Apple có thể sử dụng bản lề kim loại lỏng và vỏ titan</div>
//                 <div className="border-t border-t-gray-200 border-dashed mt-4 pt-4 text-sm">iPhone 18 có nhiều tính năng đột phá</div>
//                 <div className="border-t border-t-gray-200 border-dashed mt-4 pt-4 text-sm">Samsung có thể giải quyết điểm yếu lớn nhất của Exynos với Exynos 2700 trên Galaxy S27</div>
//             </div>
//             <div className="border border-gray-200 shadow rounded-xl overflow-hidden p-5 mt-5">
//                 <h1 className="font-bold">AI</h1>
//                 <div className="flex gap-5 items-center border-t border-t-gray-200 pt-3 mt-3">
//                     <img
//                         src="https://genk.mediacdn.vn/zoom/270_164/139269124445442048/2026/1/15/avatar1768446390910-17684463914021364332298.jpg"
//                         alt=""
//                         className="w-30 h-30 object-cover rounded-md"
//                     />
//                     <div className="">
//                         <h1 className="font-medium text-xl mb-2">Anthropic dùng chính AI Claude "cây nhà lá vườn" để phát triển 100% công cụ AI mới</h1>
//                         <p className="text-sm text-gray-600 ">
//                             Anthropic phát triển Cowork, công cụ năng suất mới, chủ yếu sử dụng AI Claude Code, cho phép thực hiện các công việc thực tế và hoạt động tự động hơn so với các giao diện
//                             chat thông thường.
//                         </p>
//                     </div>
//                 </div>
//                 <div className="border-t border-t-gray-200 border-dashed mt-4 pt-4 text-sm">Sự "sụp đổ" của những thành trì bảo thủ: Khi các huyền thoại lập trình cũng... vibe coding</div>
//                 <div className="border-t border-t-gray-200 border-dashed mt-4 pt-4 text-sm">Nhờ Google "cất nhắc", robot nhào lộn của Boston Dynamics vừa "trúng tuyển" vào làm công nhân Huyndai</div>
//                 <div className="border-t border-t-gray-200 border-dashed mt-4 pt-4 text-sm">FPT mở trung tâm đổi mới sáng tạo tại Israel: Tập trung AI, an ninh mạng và bán dẫn</div>
//             </div>
//         </div>
//     )
// }

// bài tập 1: tạo card profile
// function App() {
//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="bg-white rounded-lg shadow-md p-10 max-w-sm">
//                 <div className="flex flex-col items-center">
//                     <img src="https://camerabox.vn/wp-content/uploads/2025/05/thuat-ngu-nhiep-anh.jpg" alt="Profile" className="w-32 h-32 rounded-full mb-4 object-cover" />
//                     <h2 className="text-2xl font-bold mb-2">Nguyễn Văn A</h2>
//                     <p className="text-gray-600 mb-4">Web Developer</p>
//                     <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Follow</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

//demo lịch thi đấu u23 CUP
function App() {
    return (
        <div className=" bg-gray-50 h-screen">
            <div className="max-w-xl mx-auto pt-20 space-y-5">
                <div className="border border-gray-200 bg-white flex items-center p-5 rounded-lg">
                    <div className="space-y-3 flex-1">
                        <div className="flex items-center gap-2">
                            <img src="http://sotrans.com.vn/images/stories/Quoc%20ky%20cac%20quoc%20gia/ja-t.gif" alt="" className="w-12 h-8 border border-gray-500 object-cover" />
                            <p>U-23 Nhật Bản</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="http://sotrans.com.vn/images/stories/Quoc%20ky%20cac%20quoc%20gia/jo-t.gif" alt="" className="w-12 h-8 border border-gray-500 object-cover" />
                            <p>U-23 Jordan</p>
                        </div>
                    </div>
                    <div className="border-l border-gray-200 px-10 text-center">
                        <h1>Ngày mai</h1>
                        <p>18:30</p>
                    </div>
                </div>
                <div className="border border-gray-200 bg-white flex items-center p-5 rounded-lg">
                    <div className="space-y-3 flex-1">
                        <div className="flex items-center gap-2">
                            <img src="http://sotrans.com.vn/images/stories/Quoc%20ky%20cac%20quoc%20gia/vm-t.gif" alt="" className="w-12 h-8 border border-gray-500 object-cover" />
                            <p>U-23 Việt Nam</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="http://sotrans.com.vn/images/stories/Quoc%20ky%20cac%20quoc%20gia/ue-t.gif" alt="" className="w-12 h-8 border border-gray-500 object-cover" />
                            <p>U-23 UAE</p>
                        </div>
                    </div>
                    <div className="border-l border-gray-200 px-10 text-center">
                        <h1>Ngày mai</h1>
                        <p>22:30</p>
                    </div>
                </div>
                <div className="border border-gray-200 bg-white flex items-center p-5 rounded-lg">
                    <div className="space-y-3 flex-1">
                        <div className="flex items-center gap-2">
                            <img src="http://sotrans.com.vn/images/stories/Quoc%20ky%20cac%20quoc%20gia/uz-t.gif" alt="" className="w-12 h-8 border border-gray-500 object-cover" />
                            <p>U-23 Uzbekistan</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="http://sotrans.com.vn/images/stories/Quoc%20ky%20cac%20quoc%20gia/ch-t.gif" alt="" className="w-12 h-8 border border-gray-500 object-cover" />
                            <p>U-23 Trung Quốc</p>
                        </div>
                    </div>
                    <div className="border-l border-gray-200 px-10 text-center">
                        <h1>Thứ 7, 17/1</h1>
                        <p>18:30</p>
                    </div>
                </div>
                <div className="border border-gray-200 bg-white flex items-center p-5 rounded-lg">
                    <div className="space-y-3 flex-1">
                        <div className="flex items-center gap-2">
                            <img src="http://sotrans.com.vn/images/stories/Quoc%20ky%20cac%20quoc%20gia/at-t.gif" alt="" className="w-12 h-8 border border-gray-500 object-cover" />
                            <p>U-23 Úc</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="http://sotrans.com.vn/images/stories/Quoc%20ky%20cac%20quoc%20gia/ks-t.gif" alt="" className="w-12 h-8 border border-gray-500 object-cover" />
                            <p>U-23 Hàn Quốc</p>
                        </div>
                    </div>
                    <div className="border-l border-gray-200 px-10 text-center">
                        <h1>Thứ 7, 17/1</h1>
                        <p>22:30</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// function App() {
//     return (
//         <div className="min-h-screen">
//             {/* Header */}
//             <header className="bg-gray-800  shadow-md">
//                 <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//                     <div className="text-2xl font-bold text-white">Logo</div>
//                     <nav>
//                         <ul className="flex space-x-6 text-gray-100">
//                             <li>
//                                 <a href="#" className=" hover:text-blue-600 transition">
//                                     Home
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#" className=" hover:text-blue-600 transition">
//                                     About
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#" className=" hover:text-blue-600 transition">
//                                     Services
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#" className=" hover:text-blue-600 transition">
//                                     Contact
//                                 </a>
//                             </li>
//                         </ul>
//                     </nav>
//                 </div>
//             </header>

//             {/* Banner */}
//             <main className="h-screen bg-gray-700 flex items-center justify-center">
//                 <div className="text-center text-white px-4">
//                     <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
//                     <p className="text-xl mb-8">Build amazing things with modern technology</p>
//                     <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Get Started</button>
//                 </div>
//             </main>

//             {/* Footer */}
//             <footer className="bg-gray-800 text-white py-6">
//                 <div className="container mx-auto px-4 text-center">
//                     <p>&copy; 2024 Your Company. All rights reserved.</p>
//                 </div>
//             </footer>
//         </div>
//     )
// }
export default App
