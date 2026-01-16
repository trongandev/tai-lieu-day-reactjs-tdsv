# BUỔI 2: COMPONENT & TƯ DUY CHIA NHỎ

**Mục tiêu:** Học cách chia nhỏ giao diện thành các thành phần tái sử dụng (Component), tư duy giống như Partial View trong MVC.

**Thời lượng:** 90 phút

---

## 1. Functional Component (20 phút)

**Khái niệm:** Component là một hàm trả về JSX.
**Quy tắc:** Tên viết hoa chữ cái đầu (PascalCase).

```jsx
function Button() {
    return <button className="bg-blue-500 text-white p-2 rounded">Click me</button>
}
```

---

## 2. Import & Export (20 phút)

-   **Default Export:** `export default ComponentName` (Mỗi file 1 cái).
-   **Named Export:** `export const ComponentName` (Nhiều cái trong 1 file).

**Cấu trúc thư mục:**

```
src/
  components/
    Header.jsx
    Footer.jsx
    ui/
      Button.jsx
```

---

## 3. Bài tập thực hành tại lớp (40 phút)

**Refactor:** Xem lại code cũ, chỗ nào lặp lại code HTML giống nhau -> Tách thành Component.

**Bài 1: Tách Component từ Buổi 1**

**Trong bài tập Profile**

-   Tách ra thành file `src/components/ProfileCard.jsx`.
-   Import và sử dụng lại trong `App.jsx` 3 lần.
-   Mỗi ProfileCard sẽ nằm trên hàng ngang, dùng `flex` để căn chỉnh.

**Trong bài tập News, Lịch đá bóng**

-   Tách ra thành file `src/components/NewsCard.jsx`.
-   Tách ra thành file `src/components/FootballSchedule.jsx`.
-   Import và sử dụng lại trong `App.jsx` 3 lần đối với NewsCard.
-   Import và sử dụng lại trong `App.jsx` 5 lần đối với FootballSchedule.
-   Mỗi NewsCard, FootballSchedule sẽ nằm trên hàng dọc, cách nhau 20px.
-   Gợi ý: dùng `space-y-5` hoặc xài `flex` với `flex-col` và `gap-5`.

**Bài 2: Layout Dashboard**

-   Tạo các component: `Sidebar`, `Header`, `MainContent`.
-   Ghép chúng lại trong `App.jsx` sử dụng Flexbox để chia cột.
-   Lưu ý: Sidebar bên trái, còn lại bên phải

**Bài 3: Xây dựng UI Kit cơ bản**

-   Tạo thư mục `src/components/ui`.
-   Tạo component `Button.jsx`, `Input.jsx`, `Label.jsx`: Style làm sao cho đẹp.
-   Sử dụng chúng để tạo một Form đăng nhập đơn giản (chưa cần xử lý logic).

---
