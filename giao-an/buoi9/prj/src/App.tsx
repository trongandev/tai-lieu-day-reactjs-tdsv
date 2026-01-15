import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import NotFound from "./pages/NotFound"
import HomeLayout from "./pages/HomeLayout"
import AuthLayout from "./pages/AuthLayout"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import routes from "./pages/router"

// function App() {
//     return (
//         <Routes>
//             <Route path="/" element={<HomeLayout />}>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/about" element={<AboutPage />} />
//                 <Route path="*" element={<NotFound />} />
//             </Route>
//             <Route path="/auth" element={<AuthLayout />}>
//                 <Route path="/auth/login" element={<LoginPage />} />
//                 <Route path="/auth/register" element={<RegisterPage />} />
//             </Route>
//         </Routes>
//     )
// }
const router = createBrowserRouter(routes)
function App() {
    return <RouterProvider router={router} />
}
export default App
