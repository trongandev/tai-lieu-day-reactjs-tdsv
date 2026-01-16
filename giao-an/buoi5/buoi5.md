# BUỔI 5: USESTATE & EVENT HANDLING

**Mục tiêu:** Hiểu cơ chế State (Trạng thái) - trái tim của React, và cách xử lý sự kiện người dùng.

**Thời lượng:** 90 phút

---

## . Các loại sự kiện trong React

React hỗ trợ nhiều loại sự kiện, bao gồm nhưng không giới hạn:

-   Sự kiện chuột: onClick, onDoubleClick, onMouseEnter, onMouseLeave, v.v.
-   Sự kiện bàn phím: onKeyDown, onKeyPress, onKeyUp.
-   Sự kiện chuỗi: onChange, onFocus, onBlur.
-   Sự kiện tương tác: onSubmit, onReset, onInput.

---

## 2. useState Hook (30 phút)

**Cú pháp:** `const [state, setState] = useState(initialValue);`

**Nguyên lý:**

-   Khi `setState` được gọi -> React so sánh giá trị mới và cũ -> Nếu khác nhau -> Re-render component -> UI cập nhật.
-   Biến thường (`let x = 0`) thay đổi không làm UI cập nhật.

---

## 3. Bài tập thực hành tại lớp (40 phút)

**Bài 1: Counter (Bộ đếm)**

-   Tạo nút Tăng (+) và Giảm (-).
-   Hiển thị số ở giữa.
-   Không cho giảm xuống dưới 0.

**Bài 2: Toggle Visibility (Ẩn/Hiện)**

-   Tạo nút "Xem chi tiết".
-   Bấm vào -> Hiện đoạn văn bản, đổi text nút thành "Thu gọn".
-   Bấm lại -> Ẩn văn bản, đổi text nút thành "Xem chi tiết".
-   _Gợi ý:_ `const [show, setShow] = useState(false)`.

**Bài 3: Input Binding (Cơ bản)**

-   1 ô Input và 1 thẻ `p`.
-   Gõ gì vào Input thì thẻ `p` hiện text đó ngay lập tức (Real-time).
-   _Gợi ý:_ `onChange={(e) => setText(e.target.value)}`.

**Bài 4: Color Picker (Chọn màu)**

-   3 nút màu: Đỏ, Xanh, Vàng.
-   1 hình vuông bên dưới.
-   Bấm nút nào thì hình vuông đổi màu đó.

**Bài 5: Form Đăng ký đơn giản:**

-   2 ô Input: Tên và Email.
-   Nút Submit.
-   Khi submit, hiện alert với nội dung "Chào [Tên], email của bạn là [Email]".
