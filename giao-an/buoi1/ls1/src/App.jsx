import "./App.css"

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

function App() {
    return (
        <div className="min-h-screen">
            {/* Header */}
            <header className="bg-gray-800  shadow-md">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">Logo</div>
                    <nav>
                        <ul className="flex space-x-6 text-gray-100">
                            <li>
                                <a href="#" className=" hover:text-blue-600 transition">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className=" hover:text-blue-600 transition">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className=" hover:text-blue-600 transition">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className=" hover:text-blue-600 transition">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Banner */}
            <main className="h-screen bg-gray-700 flex items-center justify-center">
                <div className="text-center text-white px-4">
                    <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
                    <p className="text-xl mb-8">Build amazing things with modern technology</p>
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Get Started</button>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
export default App
