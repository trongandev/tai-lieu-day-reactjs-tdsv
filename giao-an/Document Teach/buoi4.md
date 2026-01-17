# BUỔI 4: STYLING NÂNG CAO & RESPONSIVE

**Mục tiêu:** Làm chủ TailwindCSS để dựng layout phức tạp và Responsive (Mobile-first).

**Thời lượng:** 90 phút

---

## 1. Responsive với Tailwind (20 phút)

-   **Mobile First:** Mặc định là style cho mobile.
-   **Prefix:** `sm:`, `md:`, `lg:`, `xl:`, `2xl:`.

```jsx
<div className="w-full md:w-1/2 lg:w-1/3">{/* Mobile: 100%, Tablet: 50%, Desktop: 33% */}</div>
```

---

## 2. Flexbox & Grid nâng cao (20 phút)

-   **Flex:** `flex-col`, `justify-between`, `items-center`, `gap-4`.
-   **Grid:** `grid-cols-1 md:grid-cols-3`, `col-span-2`.

---

## 3. Bài tập thực hành tại lớp (40 phút)

**Bài 1: Responsive Navbar**

-   Desktop: Logo bên trái, Menu bên phải (nằm ngang).
-   Mobile: Logo bên trái, Menu ẩn đi (hoặc hiện icon Hamburger - chưa cần bấm được).
-   Sử dụng `hidden md:block` để ẩn hiện menu.

**Bài 2: Pricing Table (Bảng giá)**

-   Tạo 3 thẻ giá (Basic, Pro, Enterprise).
-   Mobile: Xếp dọc (1 cột).
-   Tablet: Xếp dọc hoặc 2 cột trên 1 cột dưới.
-   Desktop: Xếp ngang (3 cột).
-   Thẻ "Pro" ở giữa nổi bật hơn (to hơn, màu khác).

**Bài 3: Form Layout phức tạp**

-   Tạo form "Thông tin giao hàng".
-   Hàng 1: Họ (50%) - Tên (50%).
-   Hàng 2: Địa chỉ (100%).
-   Hàng 3: Thành phố (33%) - Quận (33%) - Zipcode (33%).
-   Sử dụng Grid để chia cột.
