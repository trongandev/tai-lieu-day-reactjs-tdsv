# BUỔI 8: USEEFFECT, API & TYPESCRIPT BASIC

**Mục tiêu:** Kết nối với thế giới bên ngoài (API), xử lý bất đồng bộ và làm quen với TypeScript để code an toàn hơn.

**Thời lượng:** 90 phút

---

## 1. useEffect & Fetch API (30 phút)

-   **useEffect:** Chạy code khi component mount (load lần đầu).
-   **Fetch API:** Lấy dữ liệu từ Server.
-   **Loading State:** UX quan trọng - báo cho user biết đang tải.

```jsx
useEffect(() => {
    setLoading(true)
    fetch("api/users")
        .then((res) => res.json())
        .then((data) => {
            setUsers(data)
            setLoading(false)
        })
}, [])
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
    -   Nếu lỗi (sai URL): Hiện thông báo lỗi.

---

## 4. Bài tập về nhà

1.  **Photo Gallery:**
    -   API: `https://jsonplaceholder.typicode.com/photos`.
    -   Lấy 20 ảnh đầu tiên.
    -   Hiển thị dạng lưới.
    -   Click vào ảnh -> Log ra ID của ảnh đó.
    -   Áp dụng TypeScript đầy đủ cho state và props.
