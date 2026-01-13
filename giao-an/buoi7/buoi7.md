# BUỔI 7: FORM & VALIDATION (FORMIK + YUP)

**Mục tiêu:** Xử lý Form chuyên nghiệp, validate dữ liệu chặt chẽ bằng thư viện.

**Thời lượng:** 90 phút

---

## 1. Vấn đề của Form thủ công (15 phút)

-   Phải tạo nhiều state cho từng input.
-   Phải tự viết logic validate (check rỗng, check email...).
-   Phải xử lý `onBlur` (khi người dùng rời khỏi ô input).

---

## 2. Giới thiệu Formik & Yup (25 phút)

-   **Formik:** Quản lý state của form, xử lý submit, handle change/blur.
-   **Yup:** Định nghĩa schema validation (luật lệ) cực kỳ ngắn gọn.

**Cài đặt:** `npm install formik yup`

**Cấu trúc cơ bản:**

```jsx
const formik = useFormik({
  initialValues: { email: '' },
  validationSchema: Yup.object({
    email: Yup.string().email('Email sai').required('Bắt buộc')
  }),
  onSubmit: values => { ... }
});
```

---

## 3. Bài tập thực hành tại lớp (40 phút)

**Bài 1: Form Đăng ký thành viên**

-   Các trường:
    -   Họ tên (Bắt buộc, tối thiểu 2 ký tự).
    -   Email (Bắt buộc, đúng định dạng).
    -   Mật khẩu (Bắt buộc, tối thiểu 6 ký tự).
    -   Nhập lại mật khẩu (Phải khớp với mật khẩu).
-   Hiển thị lỗi màu đỏ ngay bên dưới ô input khi người dùng nhập sai (và đã blur ra ngoài).
-   Nút Submit chỉ hoạt động (hoặc xử lý) khi không còn lỗi.

**Bài 2: Tối ưu code với Component**

-   Viết component `InputField` nhận vào `formik` props để tái sử dụng, tránh lặp lại code hiển thị lỗi.

---

## 4. Bài tập về nhà

1.  **Form Checkout (Thanh toán):**
    -   Thông tin người nhận (Tên, SĐT, Địa chỉ).
    -   Phương thức thanh toán (Radio button: COD / Chuyển khoản).
    -   Ghi chú (Textarea).
    -   Validate chặt chẽ (SĐT phải là số, Địa chỉ không được quá ngắn).
