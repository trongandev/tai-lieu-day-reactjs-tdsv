# BUỔI 11: PROJECT E-COMMERCE (PHẦN 1: SETUP & LISTING)

**Mục tiêu:** Bắt đầu xây dựng ứng dụng thương mại điện tử hoàn chỉnh.

**Thời lượng:** 90 phút

---

## 1. Khởi tạo Project (20 phút)

- Cấu trúc thư mục chuẩn: `components`, `pages`, `context`, `hooks`, `utils`.
- Cài đặt thư viện: `react-router-dom`, `axios`, `formik`, `yup`, `clsx`, `tailwindcss`, `@tailwindcss/vite`.
- Sử dụng ShadcnUI cho UI components.
- Setup Mock API (dùng `json-server` hoặc `mockapi.io`) với resource `products`.

---

## 2. Xây dựng Layout & Trang chủ (30 phút)

- Thiết kế gia diện đẹp mắt, thân thiện.
- **Layout:** Header (Logo, Search, Cart Icon, User), Footer.
- **Home Page:** Banner quảng cáo, Danh sách sản phẩm nổi bật.

---

## 3. Trang Danh sách sản phẩm (40 phút)

- Fetch API lấy danh sách sản phẩm.
- Hiển thị dạng Grid.
- **Tính năng:**
    - Lọc theo danh mục (Category).
    - Sắp xếp theo giá (Tăng/Giảm).
    - Skeleton loading khi đang tải.
- Hoàn thiện giao diện trang danh sách.
- Thêm chức năng tìm kiếm sản phẩm (Client-side filter).
