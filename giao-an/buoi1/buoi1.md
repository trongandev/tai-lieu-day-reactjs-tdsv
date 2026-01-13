# BUỔI 1: TỪ RAZOR VIEW SANG JSX & TƯ DUY TAILWIND

**Mục tiêu:** Hiểu cách React tạo HTML (Client-side), làm quen với JSX và tư duy "Utility-first CSS" với Tailwind.

**Thời lượng:** 90 phút

---

## 1. Giới thiệu & So sánh tư duy (15 phút)

### ASP.NET MVC vs ReactJS

-   **MVC (Server-side):** Server render HTML -> Browser hiển thị.
-   **React (Client-side):** Browser chạy JS -> JS tạo HTML.

### JSX là gì?

-   Viết HTML ngay trong JavaScript.
-   **Quy tắc:**
    -   `class` -> `className`.
    -   `for` -> `htmlFor`.
    -   Các thẻ phải đóng kín (`<img />`, `<br />`).
    -   Bao bọc bởi 1 thẻ cha (hoặc Fragment `<>...</>`).

---

## 2. Setup Project Vite & Tailwind (20 phút)

1.  **Tạo project:** `npm create vite@latest my-app -- --template react`
2.  **Cài đặt TailwindCSS:** (Làm theo docs trang chủ Tailwind).
    -   `npm install -D tailwindcss postcss autoprefixer`
    -   `npx tailwindcss init -p`
    -   Config `tailwind.config.js`.
    -   Add directives vào `index.css`.

---

## 3. Tư duy TailwindCSS (20 phút)

Thay vì viết file `.css` riêng:

```css
.btn-primary {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
}
```

Ta viết trực tiếp class:

```jsx
<button className="bg-blue-500 text-white px-5 py-2 rounded">Click me</button>
```

**Lợi ích:** Không phải nghĩ tên class, không phải chuyển qua lại giữa các file, dễ dàng responsive.

Các className thường dùng:

-   **Layout:** `flex`, `grid`, `container`, `mx-auto`.
-   **Spacing:** `p-4`, `m-2`, `space-x-4`.
-   **Typography:** `text-center`, `font-bold`, `text-lg`.
-   **Background & Border:** `bg-gray-100`, `border`, `rounded-lg`.
-   **Effects:** `shadow-md`, `hover:bg-blue-600`, `transition`.
-   **Responsive:** `md:text-xl`, `lg:flex`.

Các Extension hữu ích hỗ trợ code:

-   Tailwind CSS IntelliSense.
-   Headwind.
-   Prettier - Code formatter.
-   Auto Rename Tag.
-   Material Icon Theme.
-   Import Cost.
-   JavaScript (ES6) code snippets.
-   ES7+ React/Redux/React-Native snippets.

Cài đặt font chữ JetBrains Mono:

-   Truy cập [JetBrains Mono](https://www.jetbrains.com/lp/mono/).
-   Tải về và cài đặt font.
-   Truy cập vào cài đặt VSCode: `File` -> `Preferences` -> `Settings` -> Tìm `Font Family` -> Thêm `JetBrains Mono` vào đầu tiên.
-   Truy cập vào cài đặt, tìm Editor: Font Ligatures, bấm vào edit in settings.json, thêm dòng `"editor.fontLigatures": true`.
-   Khởi động lại VSCode.

---

## 4. Bài tập thực hành tại lớp (35 phút)

**Bài 1: Profile Card (Tĩnh)**

-   Tạo một card hiển thị thông tin cá nhân (Ảnh, Tên, Nghề nghiệp, Nút Follow).
-   Yêu cầu:
    -   Có bo góc (`rounded-lg`), đổ bóng (`shadow-md`).
    -   Ảnh tròn (`rounded-full`).
    -   Nút bấm có hiệu ứng hover (`hover:bg-blue-600`).

---

## 5. Bài tập về nhà

1.  **Tạo trang Landing Page đơn giản:**
    -   Header (Logo + Menu).
    -   Banner (Ảnh nền + Text to).
    -   Footer (Copyright).
    -   **Yêu cầu:** Chỉ dùng TailwindCSS, không viết thêm CSS custom.
