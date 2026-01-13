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

1. **Mở rộng Todo List với các tính năng nâng cao:**

-   Sửa nội dung (Update nâng cao): Khi bấm vào chữ (text) sẽ hiển thị ô input để sửa nội dung công việc. Khi nhấn Enter sẽ lưu lại nội dung mới.
-   Lọc công việc: Thêm 3 nút "Tất cả", "Chưa hoàn thành", "Đã hoàn thành" để lọc hiển thị công việc theo trạng thái.
-   Lưu trữ vào Local Storage: Khi thêm/xóa/sửa công việc thì lưu lại vào Local Storage. Khi load trang thì lấy dữ liệu từ Local Storage ra.
-   Đếm số công việc: Hiển thị số lượng công việc chưa hoàn thành ở trên đầu danh sách.
-   Thêm ngày tạo công việc: Mỗi công việc có thêm thuộc tính `createdAt` (ngày giờ tạo). Hiển thị ngày tạo bên cạnh công việc.

2. **Quản lý đăng ký:**

-   Tạo form đăng nhập và đăng ký với các trường (Username, Email, Password, Confirm Password).
-   Validate dữ liệu nhập vào:
    -   Username không được để trống.
    -   Username phải có ít nhất 5 ký tự.
    -   Email phải đúng định dạng.
    -   Password phải có ít nhất 6 ký tự.
    -   Password phải chứa ít nhất 1 chữ số.
    -   Password phải chứa ít nhất 1 chữ cái hoa.
    -   Password và Confirm Password phải khớp nhau.
-   Hiển thị thông báo lỗi ngay bên dưới ô input khi người dùng nhập sai (Gợi ý: sử dụng hàm onBlur() của input và hàm onChange()).
-   Nút Submit chỉ hoạt động (hoặc xử lý) khi không còn lỗi.
-   Khi đăng ký thành công, lưu thông tin người dùng vào Local Storage.
-   Hiển thị danh sách người dùng đã đăng ký bên dưới form được load từ LocalStorage.
-   Tích hợp chức năng CRUD cho danh sách người dùng đã đăng ký (Xóa, Sửa thông tin người dùng).

## 4. Bài tập về nhà

1.  **Quản lý sinh viên:**
    -   Danh sách sinh viên (Mã SV, Tên, Điểm).
    -   Chức năng: Thêm, Xóa, Sửa điểm.
    -   Tính điểm trung bình cả lớp và hiển thị.
    -   Xếp loại (Giỏi/Khá/TB) dựa trên điểm.
