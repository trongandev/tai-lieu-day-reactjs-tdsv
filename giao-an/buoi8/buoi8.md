# BUỔI 8: USEEFFECT, API & TYPESCRIPT BASIC

**Mục tiêu:** Kết nối với thế giới bên ngoài (API), xử lý bất đồng bộ và làm quen với TypeScript để code an toàn hơn.

**Thời lượng:** 90 phút

---

Lưu ý: trong buổi này chúng ta sẽ setup project React với TypeScript từ đầu để làm quen.

```bash
npm create vite prj -- --template react-ts
```

## 1. useEffect & Fetch API (30 phút)

-   **useEffect:** Chạy code khi component mount (load lần đầu).
-   **Fetch API:** Lấy dữ liệu từ Server.
-   **Loading State:** UX quan trọng - báo cho user biết đang tải.

```jsx
import React, { useState, useEffect } from "react"

function DataFetchingComponent() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://api.example.com/data")
            const result = await response.json()
            setData(result)
        }

        fetchData()
    }, []) // Chạy một lần khi component mount

    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    )
}
```

---

## 2. TypeScript Basic & JSON to TS (20 phút)

**Tại sao cần TypeScript?**

-   JS: `user.name` (nếu user null -> Crash app).
-   TS: Báo lỗi ngay lúc code nếu có khả năng null hoặc sai kiểu.

**Extension "JSON to TS":**

-   Copy JSON response từ API (Postman/Browser).
-   Paste vào file TS -> Tự động sinh ra Interface.

**Ví dụ Interface:**

```ts
interface User {
    id: number
    name: string
    email: string
}
const [users, setUsers] = useState<User[]>([])
```

---

## 3. Bài tập thực hành tại lớp (30 phút)

**Bài 1: User List từ API**

-   API: `https://jsonplaceholder.typicode.com/users`.
-   Tạo Interface `User` (dùng extension hỗ trợ).
-   Fetch dữ liệu và hiển thị danh sách.
-   **Yêu cầu UX:**
    -   Khi đang tải: Hiện chữ "Loading..." hoặc Spinner.
    -   Khi tải xong: Hiện danh sách.
    -   Hiện chữ "No users found" nếu danh sách rỗng.

**Bài 2: Open Weather Map API**

-   Đăng ký tài khoản miễn phí tại https://openweathermap.org/api để lấy API key.
-   API: `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`.
-   Tạo Interface `Weather` (dùng extension hỗ trợ).
-   Tạo input để nhập tên thành phố. Và thêm tính năng lấy vị trí hiện tại của người dùng (sử dụng Geolocation API).
-   Fetch dữ liệu thời tiết khi người dùng nhập tên thành phố và nhấn nút "Get Weather".
-   Hiển thị thông tin thời tiết cơ bản: nhiệt độ, mô tả thời tiết, độ ẩm.

**Bài 3: Province VietNam**

-   API docs: `https://provinces.open-api.vn/`.
-   Tạo Interface `Province`, `District`, `Ward` (dùng extension hỗ trợ).
-   Tạo 3 dropdown: Tỉnh/Thành phố, Quận/Huyện, Phường/Xã.
-   Khi chọn Tỉnh -> Load Quận tương ứng. Khi chọn Quận -> Load Phường tương ứng.
-   Hiển thị đầy đủ địa chỉ dưới dropdown khi chọn xong.
-   Demo mẫu: https://vn-provinces-lustre-demo.netlify.app/. F12 vào tab Network chọn Fetch/XHR để xem cách gọi API.

---

## 4. Bài tập về nhà
