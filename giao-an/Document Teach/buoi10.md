# BUỔI 10: CONTEXT API & GLOBAL STATE

**Mục tiêu:** Quản lý trạng thái toàn cục (Global State), cụ thể là thông tin User đăng nhập.

**Thời lượng:** 90 phút

---

## 1. Context API là gì? (20 phút)

- Giải quyết vấn đề "Prop Drilling" (truyền props qua quá nhiều cấp).
- **AuthContext:** Lưu trữ `user`, `isLoggedIn`, hàm `login`, `logout`.
- Các component con có thể truy cập thông tin user mà không cần truyền props.
- Nhiệm vụ của bài, Yêu cầu async data user sau khi đăng nhập cho tất cả component.
  **Cấu trúc Page:**

```
Page
 ├── CHome.tsx
 │     └── CHeader.tsx
 └── CLogin.tsx
```

**Cú pháp tạo Context:**

```tsx
// src/contexts/userContext.tsx
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

    return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>
}

export const useUser = () => {
    return useContext(UserContext)
}
```

**Đặt Provider ở cấp cao nhất:**

```tsx
// src/main.tsx
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { UserProvider } from "./contexts/userContext.tsx"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <UserProvider>
            <App />
        </UserProvider>
    </StrictMode>,
)
```

**Sử dụng Context trong component:**

```tsx
import { useUser } from "../contexts/userContext.tsx"
const { user, login, logout } = useUser()!
return (
    <div>
        {user ? (
            <>
                <div>Xin chào, {user.username}</div>
                <button onClick={logout}>Logout</button>
            </>
        ) : (
            <>
                <button onClick={() => login({ username: "user1", password: "pass" })}>Login</button>
            </>
        )}
    </div>
)
```

---

## 2. Bài tập thực hành tại lớp (60 phút)

**Bài 1: Cải tiến useContext**

- Thêm tính năng đăng xuất (logout) trong `CHeader`.
- Hiển thị icon `Chỉnh sửa` (Edit) ở tên, khi bấm vào icon sẽ hiện form chỉnh sửa username.

**Bài 2: Cải tiến UI**

- Hiển thị icon <PanelLeft /> trong CHeader, khi bấm vào sẽ toggle đóng mở CLogin.

**Bài 3: Giỏ hàng**

- Tạo `CartContext` để quản lý giỏ hàng.
- Thêm sản phẩm vào giỏ hàng từ trang sản phẩm.
- Hiển thị số lượng sản phẩm trong giỏ hàng ở header. Sử dụng Popover, Badge của ShadcnUI
- Tạo trang giỏ hàng để xem và xóa sản phẩm khỏi giỏ hàng.
