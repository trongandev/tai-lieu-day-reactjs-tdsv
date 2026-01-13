# BUỔI 13: PROJECT E-COMMERCE (PHẦN 2: CART & LOCALSTORAGE)

**Mục tiêu:** Xử lý logic Giỏ hàng - tính năng quan trọng nhất của E-commerce.

**Thời lượng:** 90 phút

---

## 1. Tư duy Giỏ hàng (15 phút)

-   Giỏ hàng là một mảng các item: `{ productId, quantity, price, ... }`.
-   Cần lưu ở Global State (Context) để truy cập từ mọi nơi (Header, ProductDetail).
-   Cần lưu vào `localStorage` để F5 không mất.

---

## 2. Xây dựng CartContext (45 phút)

-   **State:** `cartItems`.
-   **Actions:**
    -   `addToCart(product)`: Nếu có rồi thì tăng số lượng, chưa có thì push vào.
    -   `removeFromCart(id)`: Xóa item.
    -   `updateQuantity(id, amount)`: Tăng giảm số lượng.
    -   `clearCart()`: Xóa hết.
-   **Sync LocalStorage:** Dùng `useEffect` để mỗi khi `cartItems` thay đổi -> lưu vào Storage.

---

## 3. Thực hành UI Giỏ hàng (30 phút)

-   Trang `/cart`:
    -   Hiển thị bảng danh sách sản phẩm đã chọn.
    -   Cho phép sửa số lượng, xóa.
    -   Tính tổng tiền (Total Price).

---

## 4. Bài tập về nhà

-   Thêm hiệu ứng bay vào giỏ hàng (Animation) khi bấm nút "Mua ngay".
-   Hiển thị số lượng item trên icon giỏ hàng ở Header.
