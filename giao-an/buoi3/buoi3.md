# BUỔI 3: PROPS & TRUYỀN DỮ LIỆU

**Mục tiêu:** Hiểu cách truyền dữ liệu từ cha xuống con (Props) để component trở nên động (Dynamic).

**Thời lượng:** 90 phút

---

## 1. Props là gì? (20 phút)

-   Giống tham số hàm (Arguments).
-   Giống `@model` trong MVC View.
-   **Read-only:** Con không được sửa props của cha.

```jsx
function Welcome({ name, role }) {
    return (
        <h1>
            Xin chào {name}, chức vụ: {role}
        </h1>
    )
}
// Sử dụng
;<Welcome name="Admin" role="Quản trị viên" />
```

---

## 2. Render List (Map) (20 phút)

Hiển thị danh sách dữ liệu mảng.

```jsx
const products = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
]
return (
    <div>
        {products.map((p) => (
            <ProductItem key={p.id} data={p} />
        ))}
    </div>
)
```

---

## 3. Bài tập thực hành tại lớp (40 phút)

**Bài 1: Product Card động**

-   Sửa component `ProfileCard` (Buổi 2) để nhận props: `name`, `job`, `avatarUrl`.
-   Trong `App.jsx`, tạo mảng `users` gồm 3 người.
-   Dùng `.map()` để hiển thị 3 thẻ Profile với thông tin khác nhau.
-   Tương tự như vậy cho các `component` từ buổi trước để hiển thị dữ liệu động như:
    -   `NewsCard`, `FootballSchedule`, `Button`, `Input`, `Label`

**Bài 2: Component Badge (Trạng thái)**

-   Tạo component `Badge` nhận prop `status` ("active", "inactive", "pending").
-   Dựa vào `status`, hiển thị màu nền khác nhau (Xanh, Đỏ, Vàng).
-   _Gợi ý:_ Dùng object mapping hoặc template literal string trong className.

```jsx
const colors = {
    active: "bg-green-500",
    inactive: "bg-red-500"
};
className={`${colors[status]} text-white p-1 rounded`}

```

**Bài 3: Cập nhật các component Input, Button**

-   Tạo component `Input` nhận props: `type`, `placeholder`, `value`, `onChange`.
-   Tạo component `Button` nhận props: `children`, `onClick`, `variant` ("primary: màu xanh lá", "secondary: màu đen", outline: "chỉ có màu viền").
-   _Gợi ý:_ Sử dụng active:scale-[0.97] để tạo hiệu ứng nhấn nút, hover:scale-[1.02] để tạo hiệu ứng khi di chuột. Thêm transition để tạo hiệu ứng chuyển đổi mượt mà khi hover và active.

**Bài 4: User Avatar**

-   Tạo component `Avatar` nhận props: `src`, `alt`, `size` (sm, md, lg).
-   Xử lý size ảnh thay đổi theo prop `size` (w-8, w-16, w-32).

**Bài 5: Xây dựng trang danh sách sản phẩm:**

-   Tạo mảng dữ liệu 10 sản phẩm (Tên, Giá, Ảnh, Còn hàng/Hết hàng).
-   Hiển thị dạng lưới (Grid) 4 cột.
-   Sử dụng component `ProductCard` và `Badge` (để hiện tình trạng hàng).
