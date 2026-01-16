# BUỔI 10: CONTEXT API & GLOBAL STATE

**Mục tiêu:** Quản lý trạng thái toàn cục (Global State), cụ thể là thông tin User đăng nhập.

**Thời lượng:** 90 phút

---

## 1. Context API là gì? (20 phút)

-   Giải quyết vấn đề "Prop Drilling" (truyền props qua quá nhiều cấp).
-   **AuthContext:** Lưu trữ `user`, `isLoggedIn`, hàm `login`, `logout`.

---

## 2. Bài tập thực hành tại lớp (60 phút)

**Bài 1: Xây dựng AuthContext**

-   Tạo `AuthContext`.
-   Tạo `AuthProvider` bao bọc toàn bộ App.
-   State: `user` (null hoặc object).

**Bài 2: Kết nối Login**

-   Trong trang Login: Thay vì chỉ navigate, hãy gọi `login(userData)` từ Context.
-   Sau khi login, `user` trong Context sẽ có dữ liệu.

**Bài 3: Cập nhật Navbar**

-   Navbar lắng nghe Context.
-   Nếu `user` có dữ liệu -> Hiện "Xin chào, [Tên]" và nút "Logout".
-   Nếu `user` null -> Hiện nút "Login" / "Register".
-   Nút Logout -> Gọi hàm `logout()` -> Xóa user -> Navbar tự đổi lại.

---

## 3. Bài tập về nhà

1.  **Private Route (Bảo vệ Route):**
    -   Tạo component `PrivateRoute`.
    -   Nếu chưa login mà cố truy cập `/profile` hoặc `/cart` -> Tự động đá về `/login`.
    -   Gợi ý: Kiểm tra `user` trong Context, dùng `<Navigate />`.
