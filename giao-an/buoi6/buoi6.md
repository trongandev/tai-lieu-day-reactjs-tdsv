# BUỔI 6: CRUD (CREATE, READ, UPDATE, DELETE)

**Mục tiêu:** Thao tác với danh sách dữ liệu (Mảng) sử dụng State. Đây là nền tảng của mọi ứng dụng quản lý.

**Thời lượng:** 90 phút

---

## 1. Tư duy CRUD trên State (20 phút)

Giả sử có state `todos` là mảng object.

-   **Read:** `todos.map(...)`.
-   **Create:** `setTodos([...todos, newItem])` (Spread operator).
-   **Delete:** `setTodos(todos.filter(item => item.id !== id))`.
-   **Update:** `setTodos(todos.map(item => item.id === id ? { ...item, newProp } : item))`.

**Lưu ý:** Không dùng `push`, `splice` trực tiếp lên state (Mutation). Phải tạo mảng mới (Immutability).

---

## 2. Xây dựng ứng dụng Todo List (60 phút)

**Xây dựng ứng dụng Todo List:**

**Bước 1: Hiển thị (Read)**

-   State `todos` có sẵn vài việc mẫu.
-   Render danh sách ra màn hình.

**Bước 2: Thêm mới (Create)**

-   1 ô Input và nút "Thêm".
-   Bấm Thêm -> Tạo object mới `{ id: Date.now(), text: input, completed: false }` -> Thêm vào state.
-   Reset ô input về rỗng.

**Bước 3: Xóa (Delete)**

-   Mỗi dòng có nút "Xóa".
-   Bấm Xóa -> Loại bỏ item đó khỏi danh sách.

**Bước 4: Cập nhật trạng thái (Update)**

-   Click vào text công việc -> Gạch ngang (đánh dấu hoàn thành).
-   Logic: Đảo ngược giá trị `completed` của item đó.

---

## 3. Bài tập tại lớp

-   Sửa nội dung (Update nâng cao): Khi bấm vào chữ (text) sẽ hiển thị ô input để sửa nội dung công việc. Khi nhấn Enter sẽ lưu lại nội dung mới.

## 3. Bài tập về nhà

1.  **Quản lý sinh viên:**
    -   Danh sách sinh viên (Mã SV, Tên, Điểm).
    -   Chức năng: Thêm, Xóa, Sửa điểm.
    -   Tính điểm trung bình cả lớp và hiển thị.
    -   Xếp loại (Giỏi/Khá/TB) dựa trên điểm.
