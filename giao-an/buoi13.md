# BUỔI 14: PROJECT E-COMMERCE (PHẦN 3: CHECKOUT & ADMIN)

**Mục tiêu:** Hoàn tất quy trình đặt hàng và trang quản trị đơn giản.

**Thời lượng:** 90 phút

---

## 1. Trang Checkout (Thanh toán) (40 phút)

-   Sử dụng **Formik + Yup** để làm form thông tin giao hàng.
-   Hiển thị lại tóm tắt đơn hàng (Tổng tiền).
-   **Xử lý Submit:**
    -   Validate thông tin.
    -   Tạo đơn hàng (gửi API hoặc lưu vào localStorage `orders`).
    -   Xóa sạch giỏ hàng (`clearCart`).
    -   Chuyển hướng sang trang "Cảm ơn".

---

## 2. Trang Admin (Quản lý sản phẩm) (40 phút)

-   Route: `/admin/products`.
-   Bảng danh sách sản phẩm (CRUD).
-   Form thêm/sửa sản phẩm.
-   **Yêu cầu:**
    -   Xóa phải có Modal xác nhận (ShadcnUI).
    -   Thêm/Sửa thành công phải có Toast thông báo.

---

## 3. Tổng kết & Review (10 phút)

-   Review lại toàn bộ luồng đi của ứng dụng.
-   Đóng gói (Build) project: `npm run build`.
-   Hướng dẫn deploy cơ bản (Vercel/Netlify).

---

## 4. Bài tập phát triển thêm (Sau khóa học)

-   Tích hợp thanh toán online (Momo/Stripe - Sandbox).
-   Làm chức năng Đăng nhập/Đăng ký thật (kết nối Firebase hoặc Backend thật).
-   Chức năng Lịch sử đơn hàng (My Orders).
