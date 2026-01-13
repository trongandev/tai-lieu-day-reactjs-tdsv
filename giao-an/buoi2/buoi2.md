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

**Bài 1: Tách Component từ Buổi 1**

-   Lấy code `ProfileCard` từ bài tập về nhà Buổi 1.
-   Tách ra thành file `src/components/ProfileCard.jsx`.
-   Import và sử dụng lại trong `App.jsx` 3 lần.

**Bài 2: Xây dựng UI Kit cơ bản**

-   Tạo thư mục `src/components/ui`.
-   Tạo component `Button.jsx`: Style mặc định đẹp (Tailwind).
-   Tạo component `Input.jsx`: Style input có border, padding.
-   Sử dụng chúng để tạo một Form đăng nhập đơn giản (chưa cần xử lý logic).

**Bài 3: Layout Dashboard**

-   Tạo các component: `Sidebar`, `Header`, `MainContent`.
-   Ghép chúng lại trong `App.jsx` sử dụng Flexbox để chia cột (Sidebar bên trái, còn lại bên phải).

---

## 4. Bài tập về nhà

1.  **Hoàn thiện Layout Dashboard:**
    -   Thêm nội dung giả vào `MainContent`.
    -   Sidebar có các item menu (Dashboard, Users, Settings).
    -   Header có Avatar và thanh tìm kiếm.
2.  **Refactor:** Xem lại code cũ, chỗ nào lặp lại code HTML giống nhau -> Tách thành Component.
