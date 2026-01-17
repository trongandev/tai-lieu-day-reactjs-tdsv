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
import { useFormik } from "formik"
import * as Yup from "yup"

export default function TestComponent() {
    const formik = useFormik({
        initialValues: { email: "" },
        validationSchema: Yup.object({
            email: Yup.string().email("Email sai").required("Bắt buộc"),
        }),
        onSubmit: (values) => {
            console.log("values")
        },
    })

    return (
        <>
            <input name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </>
    )
}
```

---

## 3. Bài tập thực hành tại lớp (40 phút)

**Bài 1: Sử dụng Formik & Yup để nâng cấp bài tập 2: `Quản lý đăng ký` trong buổi 6**

**Bài 2: Tối ưu code với Component**

-   Viết component `InputField` nhận vào `formik` props để tái sử dụng, tránh lặp lại code hiển thị lỗi.
-   Lưu ý: để `input` hoặc `button` nhận được hết props truyền vào, dùng cú pháp: `<input {...props} />` và `<button {...props} />` để tránh phải liệt kê từng prop một.

---

## 4. Bài tập về nhà

1.  **Form Checkout (Thanh toán):**
    -   Thông tin người nhận (Tên, SĐT, và 3 ô địa chỉ combobox cho người dùng chọn xã, huyện, tỉnh).
    -   Phương thức thanh toán (Radio button: COD / Chuyển khoản).
    -   Ghi chú (Textarea).
    -   Validate chặt chẽ (SĐT phải là số, Địa chỉ không được quá ngắn).
    -   Fetch API giả lập để lấy danh sách xã, huyện, tỉnh tại Việt Nam (có thể dùng JSON tĩnh). Truy cập vào demo tại: https://vn-provinces-vue-demo.netlify.app/. Sau đó mở tab Network chọn Fetch/XHR để xem cấu trúc dữ liệu trả về và thực hiện tương tự.
