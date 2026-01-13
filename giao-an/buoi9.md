# BUỔI 9: ROUTING & AUTH PAGES

**Mục tiêu:** Điều hướng trang, truyền tham số trên URL và xây dựng luồng Đăng nhập/Đăng ký.

**Thời lượng:** 90 phút

---

## 1. React Router Dom & Navigate (30 phút)

-   **Cài đặt:** `npm install react-router-dom`.
-   **Cấu hình:** `BrowserRouter`, `Routes`, `Route`.
-   **Link:** Chuyển trang không reload.
-   **useNavigate:** Chuyển trang bằng code (ví dụ sau khi login xong).
-   **Dynamic Route:** `/product/:id`.

---

## 2. Bài tập thực hành tại lớp (50 phút)

**Bài 1: Cấu trúc Routing**

-   Tạo các trang: `Home`, `Login`, `Register`, `ProductList`, `ProductDetail`.
-   Setup menu điều hướng.

**Bài 2: Luồng Login/Register**

-   Trang Login: Form (email, pass).
    -   Submit -> Kiểm tra (giả lập) -> Nếu đúng -> `navigate('/')`.
-   Trang Register: Form đăng ký -> Submit -> `navigate('/login')`.

**Bài 3: Chi tiết sản phẩm**

-   Trang `ProductList`: Danh sách sản phẩm.
-   Click vào sản phẩm -> `navigate('/product/' + id)`.
-   Trang `ProductDetail`:
    -   Lấy ID từ URL: `const { id } = useParams()`.
    -   Gọi API (hoặc tìm trong mảng giả lập) để lấy chi tiết sản phẩm theo ID đó.
    -   Hiển thị thông tin chi tiết.

---

## 3. Bài tập về nhà

1.  **Hoàn thiện UI Auth:**
    -   Trang Login/Register đẹp, căn giữa màn hình.
    -   Có link chuyển đổi qua lại ("Chưa có tài khoản? Đăng ký ngay").
2.  **404 Page:**
    -   Tạo trang `NotFound`.
    -   Cấu hình Route sao cho nếu user gõ link linh tinh thì hiện trang này (`path="*"`).
