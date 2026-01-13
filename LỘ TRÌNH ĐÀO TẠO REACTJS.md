# LỘ TRÌNH ĐÀO TẠO REACTJS CHUYÊN SÂU

**(Dành cho Developer chuyển đổi từ ASP.NET MVC)**

---

## TỔNG QUAN

Khóa học được thiết kế để thay đổi tư duy lập trình từ Server-side Rendering (MVC) sang Client-side Rendering (ReactJS). Học viên sẽ đi từ các khái niệm cơ bản nhất đến việc xây dựng một ứng dụng E-commerce hoàn chỉnh với các công nghệ hiện đại nhất hiện nay (Vite, TailwindCSS, ShadcnUI, Formik, Context API).

---

## GIAI ĐOẠN 1: TƯ DUY RENDER & COMPONENT (Buổi 1 - 4)

_Mục tiêu: Hiểu rõ sự khác biệt giữa Razor View và JSX, làm quen với tư duy Component và Styling hiện đại._

### Buổi 1: Từ Razor View sang JSX & Tư duy TailwindCSS

-   **Mục tiêu:** Hiểu cơ chế Client-side Rendering và làm quen với Utility-first CSS.
-   **Nội dung chính:**
    1.  So sánh mô hình MVC vs React.
    2.  Khởi tạo dự án với Vite (thay thế Visual Studio template).
    3.  Cú pháp JSX và cách viết HTML trong JavaScript.
    4.  Làm quen với TailwindCSS (loại bỏ tư duy viết file CSS riêng lẻ).
-   **Thực hành:** Xây dựng Profile Card tĩnh sử dụng TailwindCSS.

### Buổi 2: Component & Tư duy chia nhỏ giao diện

-   **Mục tiêu:** Biết cách phân rã giao diện thành các thành phần nhỏ tái sử dụng (tương tự Partial View).
-   **Nội dung chính:**
    1.  Functional Component là gì?
    2.  Cấu trúc thư mục chuẩn cho dự án React.
    3.  Kỹ thuật Import/Export component.
-   **Thực hành:** Xây dựng bộ UI Kit cơ bản (Button, Input) và ghép Layout Dashboard.

### Buổi 3: Props & Truyền dữ liệu

-   **Mục tiêu:** Hiểu luồng dữ liệu một chiều và cách truyền dữ liệu giữa các component.
-   **Nội dung chính:**
    1.  Props là gì? (So sánh với ViewModel/@model).
    2.  Truyền dữ liệu từ cha xuống con.
    3.  Kỹ thuật Render danh sách (List Rendering).
-   **Thực hành:** Hiển thị danh sách sản phẩm động từ dữ liệu mảng.

### Buổi 4: Styling nâng cao & Responsive Design

-   **Mục tiêu:** Xây dựng giao diện phức tạp thích ứng với mọi thiết bị.
-   **Nội dung chính:**
    1.  Tư duy Mobile-first trong TailwindCSS.
    2.  Sử dụng Flexbox và Grid system nâng cao.
-   **Thực hành:** Xây dựng Navbar Responsive và Bảng giá (Pricing Table) đa giao diện.

---

## GIAI ĐOẠN 2: TƯ DUY STATE & DATA FLOW (Buổi 5 - 8)

_Mục tiêu: Làm chủ việc quản lý trạng thái (State), xử lý Form và tương tác với API._

### Buổi 5: useState & Event Handling

-   **Mục tiêu:** Hiểu trái tim của React - State và cách xử lý sự kiện người dùng.
-   **Nội dung chính:**
    1.  Xử lý sự kiện (`onClick`, `onChange`).
    2.  `useState` Hook: Tại sao biến thường không cập nhật giao diện?
-   **Thực hành:** Xây dựng các chức năng tương tác: Bộ đếm, Ẩn/Hiện nội dung, Input binding.

### Buổi 6: CRUD (Create, Read, Update, Delete)

-   **Mục tiêu:** Thao tác thêm, sửa, xóa dữ liệu trực tiếp trên State.
-   **Nội dung chính:**
    1.  Tư duy Immutability (Bất biến) khi sửa đổi State.
    2.  Các kỹ thuật thao tác mảng trong React.
-   **Thực hành:** Xây dựng ứng dụng Todo List hoàn chỉnh chức năng CRUD.

### Buổi 7: Form & Validation (Formik + Yup)

-   **Mục tiêu:** Xử lý Form chuyên nghiệp và kiểm tra dữ liệu đầu vào.
-   **Nội dung chính:**
    1.  Quản lý Form state với thư viện Formik.
    2.  Xây dựng Schema Validation với Yup.
-   **Thực hành:** Form Đăng ký/Đăng nhập với đầy đủ validate và thông báo lỗi.

### Buổi 8: useEffect, API & TypeScript Basic

-   **Mục tiêu:** Kết nối ứng dụng với thế giới bên ngoài (Server API).
-   **Nội dung chính:**
    1.  Vòng đời Component và `useEffect`.
    2.  Gọi API lấy dữ liệu (Fetch/Axios).
    3.  Làm quen với TypeScript cơ bản (Interface/Type).
-   **Thực hành:** Lấy danh sách User từ API, xử lý trạng thái Loading/Error.

---

## GIAI ĐOẠN 3: ROUTING & GLOBAL STATE (Buổi 9 - 11)

_Mục tiêu: Xây dựng ứng dụng đa trang (SPA) và quản lý dữ liệu toàn cục._

### Buổi 9: Routing & Auth Flow

-   **Mục tiêu:** Điều hướng trang mượt mà không reload và phân quyền truy cập.
-   **Nội dung chính:**
    1.  Cấu hình React Router Dom.
    2.  Dynamic Route (Trang chi tiết).
    3.  Điều hướng bằng code (`useNavigate`).
-   **Thực hành:** Xây dựng luồng Login -> Trang chủ -> Chi tiết sản phẩm.

### Buổi 10: Context API & Global State

-   **Mục tiêu:** Quản lý dữ liệu dùng chung cho toàn bộ ứng dụng (User, Theme, Cart).
-   **Nội dung chính:**
    1.  Vấn đề Prop Drilling.
    2.  Sử dụng Context API để chia sẻ trạng thái.
-   **Thực hành:** Xây dựng AuthContext để quản lý trạng thái đăng nhập toàn trang.

### Buổi 11: Tổng ôn & UX/UI Best Practices

-   **Mục tiêu:** Tối ưu hóa trải nghiệm người dùng.
-   **Nội dung chính:**
    1.  Review kiến thức cốt lõi.
    2.  Các Pattern UX hiện đại: Skeleton Loading, Toast Notification, Modal Confirm.
-   **Thực hành:** Refactor (tối ưu) lại các bài tập cũ, áp dụng thư viện ShadcnUI.

---

## GIAI ĐOẠN 4: THỰC CHIẾN PROJECT E-COMMERCE (Buổi 12 - 14)

_Mục tiêu: Tổng hợp kiến thức xây dựng ứng dụng bán hàng hoàn chỉnh (Mini Shopee)._

### Buổi 12: Khởi tạo & Listing

-   **Nội dung:** Setup dự án, cấu trúc thư mục, xây dựng Layout và trang Danh sách sản phẩm (Filter, Sort).

### Buổi 13: Giỏ hàng (Cart) & LocalStorage

-   **Nội dung:** Xây dựng logic Giỏ hàng (Thêm, Sửa, Xóa), lưu trữ dữ liệu vào LocalStorage để giữ trạng thái khi F5.

### Buổi 14: Checkout & Admin Dashboard

-   **Nội dung:** Xây dựng trang Thanh toán, trang Quản trị sản phẩm và tổng kết khóa học.
