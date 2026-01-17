# BUỔI 9: ROUTING & AUTH PAGES

**Mục tiêu:** Điều hướng trang, truyền tham số trên URL và xây dựng luồng Đăng nhập/Đăng ký.

**Thời lượng:** 90 phút

---

Lưu ý: trong buổi này chúng ta sẽ setup project React với TypeScript từ đầu để làm quen.

```bash
npm create vite prj -- --template react-ts
```

## 1. React Router Dom

-   Cài đặt thư viện:
    ```bash
    npm install react-router-dom
    ```

### 1.1 Tính năng chính

-   Định tuyến động: Cho phép bạn định nghĩa các đường dẫn (routes) và ánh xạ chúng tới các component cụ thể.
-   Nested Routes: Hỗ trợ các route lồng nhau, cho phép bạn xây dựng cấu trúc trang phức tạp.
-   Redirects: Có khả năng chuyển hướng người dùng từ một route này sang route khác.
-   Route Parameters: Cho phép bạn truyền tham số vào route và sử dụng chúng trong component.
-   Lazy loading: Hỗ trợ tải các component một cách lười biếng (lazily loaded), giúp cải thiện hiệu suất ứng dụng.

### 1.2 Cấu trúc thư mục

```
src/
|-- components/        # Các component tái sử dụng
|-- pages/             # Các trang chính của ứng dụng
|   |-- HomeLayout.tsx # Layout chính cho trang chủ
|   |-- AuthLayout.tsx # Layout cho trang đăng nhập/đăng ký
|   |-- HomePage.tsx   # Trang chủ
|   |-- LoginPage.tsx  # Trang đăng nhập
|   |-- RegisterPage.tsx # Trang đăng ký
|   |-- ProductList.tsx # Trang danh sách sản phẩm
|   |-- ProductDetail.tsx # Trang chi tiết sản phẩm
|   |-- NotFound.tsx   # Trang 404
|   |-- router.tsx    # Định nghĩa các route
|-- App.tsx           # Cấu hình RouterProvider
|-- main.tsx          # Điểm vào ứng dụng
```

### 1.3 Thiết lập Router

-   Sửa file `src/App.tsx` để định nghĩa các route:
    ```tsx
    function App() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                    <Route path="/auth" element={<AuthLayout />}>
                        <Route path="/auth/login" element={<LoginPage />} />
                        <Route path="/auth/register" element={<RegisterPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
    ```

### 1.4 Thiết lập Router với `createBrowserRouter` và `RouterProvider`

-   Tạo file `src/pages/router.tsx` để định nghĩa các route:

```tsx
const routes: RouteObject[] = [
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "/auth/login",
                element: <LoginPage />,
            },
            {
                path: "/auth/register",
                element: <RegisterPage />,
            },
        ],
    },
]

export default routes
```

-   Sửa file `src/App.tsx` để định nghĩa các route:

```tsx
//src/App.tsx
const router = createBrowserRouter(routes)

function App() {
    return <RouterProvider router={router} />
}

export default App
```

### 1.5 useNavigate

#### 1.5.1 useNavigate với 1 tham số

-   Ví dụ bên dưới khi click vào button thì sẽ chuyển đến trang `orders`

```tsx
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        // if login success, redirect to Orders Page
        navigate("orders")
    }

    return <button onClick={handleSubmit}>Submit</button>
}
```

#### 1.5.2 useNavigate với history

-   Trường hợp bạn muốn sử dụng go, goBack, goForward trong lịch sử trình duyệt

```tsx
import { useNavigate } from "react-router-dom"

export default function App() {
    const navigate = useNavigate()

    return (
        <>
            <button onClick={() => navigate(-2)}>Go 2 pages back</button>
            <button onClick={() => navigate(-1)}>Go back</button>
            <button onClick={() => navigate(1)}>Go forward</button>
            <button onClick={() => navigate(2)}>Go 2 pages forward</button>
        </>
    )
}
```

#### 1.5.3 useNavigate với replace true

-   Sử dụng tham số thứ hai của `navigate` để chỉ thay đổi URL chứ không muốn URL đó lưu lại trong lịch sử trình duyệt. Kiểu như tại trang A đi tới trang B, tại trang B chúng ta click back trên trình duyệt thì sẽ không quay trở lại trang A nữa

```tsx
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
    const navigate = useNavigate()
    return <button onClick={() => navigate("orders", { replace: true })}>Go to Orders</button>
}
```

#### 1.5.4 useNavigate với passing data

-   Tình huống đặt ra là tại `componentA` khi navigate chuyển sang `componentB` sẽ kèm thêm một id là 6996
-   Tại `componentB` sẽ nhận được data thông qua `useLocation`

```tsx
// componentA.tsx
import { useNavigate } from "react-router-dom"

const componentA = () => {
    const navigate = useNavigate()

    return <button onClick={() => navigate("orders", { state: { id: "6996" } })}>Send ID to componentB</button>
}
```

```tsx
// componentB.tsx
import { useLocation } from "react-router-dom"

const ComponentB = () => {
    const location = useLocation()
    return <h1>ID nhận từ componentA: {location.state?.id}</h1>
}
```

### 1.6 Nested Routes

-   Nested Routes để lồng component con vào trong component cha.

```tsx
<Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/products" element={<Products />}>
        <Route path="laptop" element={<Laptop />} />
        <Route path="desktop" element={<Desktop />} />
    </Route>
</Routes>
```

```tsx
// Products.tsx
import { Outlet } from "react-router-dom"

const Products = () => (
    <>
        <h1>Products</h1>
        <Outlet />
    </>
)
```

-   Nó rất hữu ích khi bạn muốn giữ nguyên một phần giao diện (như header, sidebar) trong khi thay đổi nội dung chính dựa trên route con.

```tsx
<Routes>
    <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
    </Route>
    <Route path="/auth" element={<AuthLayout />}>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
    </Route>
</Routes>
```

```tsx
// HomeLayout.tsx
<div className="p-10">
    <Outlet />
</div>

// AuthLayout.tsx cũng tương tự
```

### 1.7 Index Routes

-   Index Routes là một cách để xác định route mặc định khi truy cập vào một route cha mà không có route con cụ thể nào được chỉ định.

```tsx
<Routes>
    <Route path="/auth" element={<AuthLayout />}>
        <Route path="/auth/login" index element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
    </Route>
</Routes>
```

-   Ở ví dụ trên, khi người dùng truy cập vào `/auth`, họ sẽ tự động được chuyển đến `LoginPage` vì nó được đánh dấu là index route.

### 1.8 Dynamic Route

-   Dynamic Route cho phép bạn định nghĩa các route với các tham số động trong URL.

```tsx
<Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/courses/:courseId" element={<CourseDetail />} />
</Routes>
```

```tsx
/// CourseDetail.tsx
import { useParams } from "react-router-dom"

const CustomerDetail = () => {
    const params = useParams()
    return <h2>Chi tiết khóa học: {params.courseId}</h2>
}
```

-   Khi người dùng truy cập vào URL như `/courses/123`, tham số `courseId` sẽ có giá trị là `123`, và bạn có thể sử dụng nó trong component `CourseDetail` để hiển thị thông tin chi tiết về khóa học đó.

-   Khi sử dụng Dynamic routes ta có URL theo kiểu courses/html, courses/css, courses/javascript thì đã mô hình hóa nó thành courses/:courseId
-   Trong một vài trường hợp route cố định như courses/add-course hay courses/edit-course thì ta sẽ khai báo route để bắt các trường hợp này

```tsx
<Routes>
    <Route path="/courses" element={<Courses />} />
    <Route path="/courses/:courseId" element={<CourseDetail />} />
    <Route path="/courses/add-course" element={<AddCourse />} />
    <Route path="/courses/edit-course" element={<EditCourse />} />
</Routes>
```

-   Dạng multiple parameters

```tsx
<Routes>
    <Route path="/courses" element={<Courses />} />
    <Route path="/courses/:courseType/" element={<CourseType />} />
    <Route path="/courses/:courseType/:courseId" element={<CourseDetail />} />
</Routes>
```

### 1.9 Protected Routes

-   Protected Routes là các route yêu cầu người dùng phải xác thực (đăng nhập) trước khi truy cập.

```tsx
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/news" element={<News />} />
    <Route element={<PrivateRoutes />}>
        <Route path="/personal" element={<Personal />} />
        <Route path="/account" element={<Account />} />
    </Route>
</Routes>
```

```tsx
// PrivateRoutes.tsx
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoutes = () => {
    const isAuth = true

    return isAuth ? <Outlet /> : <Navigate to="/login" />
}
```

### 1.10 useSearchParams

useSearchParams là một hook trong React Router Dom cho phép bạn làm việc với các tham số truy vấn (query parameters) trong URL của ứng dụng React.

```tsx
import { useSearchParams } from "react-router-dom"

let [searchParams, setSearchParams] = useSearchParams()
```

Để thay đổi params

```tsx
<button onClick={() => setSearchParams({product: 'laptop'})}>
  Laptop
</button>
<button onClick={() => setSearchParams({product: 'laptop', stock: 'in-stock'})}>
  Còn hàng
</button>
<button onClick={() => setSearchParams({})}>
  Clear
</button>
```

-   Khi click vào button Laptop => https://example.com/?product=laptop
-   Khi click vào button Còn hàng => https://example.com/?product=laptop&stock=in-stock
-   Khi click vào button Clear => https://example.com

Để đọc

```tsx
// Đọc params dựa vào url
const productType = searchParams.get("product") // laptop
const stock = searchParams.get("stock") // in-stock
```

---

## 2. Bài tập thực hành tại lớp (50 phút)

**Bài 1: Authentication App**

**Yêu cầu tổng quan:**
Xây dựng ứng dụng xác thực người dùng với đầy đủ chức năng đăng ký, đăng nhập và quản lý thông tin user. Sử dụng formik và yup để xử lý form và validate. Dữ liệu người dùng sẽ được lưu trữ trong localStorage. Sử dụng sweetalert2 để hiển thị thông báo.

**Cấu trúc trang:**

1. **Trang Home** (`/`):

    - Hiển thị danh sách tất cả người dùng đã đăng ký trên hệ thống
    - Dữ liệu lấy từ `users_data` trong localStorage
    - Mỗi user hiển thị dưới dạng link, khi click vào sẽ điều hướng đến trang chi tiết

2. **Trang Profile của bản thân** (`/profile`):

    - Hiển thị thông tin của user đang đăng nhập (lấy từ `current_user` trong localStorage)
    - Nếu chưa đăng nhập, tự động chuyển hướng về trang Login
    - CRUD thông tin cá nhân (chỉ cho phép chỉnh sửa `displayName`)

3. **Trang Profile của người dùng khác** (`/profile/:user_id`):

    - Hiển thị thông tin chi tiết của một user cụ thể
    - Sử dụng `useParams()` để lấy `user_id` từ URL
    - Tìm và hiển thị thông tin user từ `users_data` trong localStorage

4. **Trang Login** (`/auth/login`):

    - Form đăng nhập với email và password
    - Kiểm tra thông tin đăng nhập với dữ liệu trong `users_data`
    - Nếu đăng nhập thành công, lưu thông tin user vào `current_user` trong localStorage
    - Có link chuyển sang trang Register

5. **Trang Register** (`/auth/register`):
    - Form đăng ký với các trường: displayName, email, password
    - Validate form theo yêu cầu (xem bên dưới)
    - Khi đăng ký thành công, thêm user mới vào mảng `users_data` trong localStorage
    - Có link chuyển sang trang Login

**Layout:**

1. **HomeLayout**:

    - Chứa menu điều hướng (navbar)
    - Sử dụng `<Outlet />` để render các trang con (Home, Profile)

2. **AuthLayout**:
    - Layout đơn giản dành cho các trang xác thực
    - Sử dụng `<Outlet />` để render Login hoặc Register

**Quản lý dữ liệu với localStorage:**

1. **`users_data`** (mảng):

    - Lưu trữ thông tin của tất cả người dùng đã đăng ký
    - Cấu trúc: `[{id, displayName, email, password}, ...]`
    - Khi đăng ký: thêm user mới vào mảng
    - Khi đăng nhập: kiểm tra email và password có khớp với user nào trong mảng không

2. **`current_user`** (object):
    - Lưu thông tin của người dùng đang đăng nhập
    - Cấu trúc: `{id, displayName, email}`
    - Được tạo khi đăng nhập thành công
    - Dùng để xác định user hiện tại và cá nhân hóa trải nghiệm

**Validation Form:**

Mỗi user phải có đầy đủ thông tin sau và đáp ứng các yêu cầu validate:

```typescript
interface User {
    id: string // Tự động generate (có thể dùng Date.now() hoặc uuid)
    displayName: string // Bắt buộc, tối thiểu 3 ký tự
    email: string // Bắt buộc, phải đúng định dạng email
    password: string // Bắt buộc, tối thiểu 6 ký tự
}
```

**Các quy tắc validate:**

-   **displayName**:
    -   Không được để trống
    -   Phải có ít nhất 3 ký tự
-   **email**:
    -   Không được để trống
    -   Phải đúng định dạng email (có @ và domain)
    -   Không được trùng với email đã tồn tại trong `users_data`
-   **password**:
    -   Không được để trống
    -   Phải có ít nhất 6 ký tự
