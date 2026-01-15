# BUỔI 1: TỪ RAZOR VIEW SANG JSX & TƯ DUY TAILWIND

**Mục tiêu:** Hiểu cách React tạo HTML (Client-side), làm quen với JSX và tư duy "Utility-first CSS" với Tailwind.

**Thời lượng:** 90 phút

**Lời mở đầu**

-   Để học reactjs. Chúng ta cần nền tảng HTML, CSS, JavaScript căn bản.
    Trong dự án này, chúng ta sẽ chuyển từ cách làm việc truyền thống với Razor View trong ASP.NET MVC sang sử dụng ReactJS kết hợp với TailwindCSS. Buổi học này sẽ giúp bạn nắm bắt được sự khác biệt trong tư duy phát triển giao diện người dùng và cách tận dụng tối đa các công cụ hiện đại để xây dựng ứng dụng web nhanh chóng và hiệu quả.

Khóa học này sẽ gồm những gì:

-   Được chia thành 13 buổi học, mỗi buổi kéo dài 90 phút.
-   Mỗi buổi sẽ bao gồm phần lý thuyết và thực hành để bạn có thể áp dụng ngay kiến thức đã học. Do mọi người đã làm việc cả ngày rồi mà nói lý thuyết nhiều quá sẽ rất mệt và buồn ngủ, vì vậy em sẽ nói ít lý thuyết lại. Thay vào đó sẽ tập trung vào thực hành nhiều hơn.

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

**Bai 2: Danh sách bài viết tin tức (Tĩnh)**

-   Tạo một danh sách gồm 3 bài viết, mỗi bài có tiêu đề, mô tả ngắn và ảnh đại diện.
-   Yêu cầu:
    -   Sử dụng `flex` để bố trí ảnh và nội dung bên cạnh nhau.
    -   Các bài viết sẽ có (`flex-1`) để chia đều không gian.
    -   Thêm khoảng cách giữa các bài viết (`gap-5`).
    -   Tiêu đề bài viết in đậm (`font-bold`).
    -   Mô tả có màu xám nhạt (`text-gray-600`).
    -   Ảnh có kích thước cố định (`w-full h-48`).

**Bài 3: Lịch đá bóng**

-   Tạo giao diện hiển thị lịch thi đấu bóng đá với các trận đấu sắp tới.

**Bài 4: Tạo trang Landing Page đơn giản:**

-   Header (Logo + Menu).
-   Banner (Ảnh nền + Text to).
-   Footer (Copyright).
