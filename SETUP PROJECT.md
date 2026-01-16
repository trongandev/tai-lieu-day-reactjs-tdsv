# SETUP PROJECT

Trong file này, chúng ta sẽ thiết lập một dự án ReactJS cơ bản sử dụng Vite và TailwindCSS.

## Bước 1: Cài đặt Node.js và npm

Trước tiên, hãy đảm bảo rằng bạn đã cài đặt Node.js và npm trên máy tính của mình. Bạn có thể tải Node.js từ trang chính thức: [https://nodejs.org/](https://nodejs.org/)

Lưu ý:

-   npm sẽ được cài đặt kèm theo Node.js.
-   Để kiểm tra phiên bản đã cài đặt, bạn có thể chạy các lệnh sau trong terminal:

```bash
node -v
npm -v
```

-   Nếu bạn đã cài bản Node.js phiên bản cũ hơn để chạy các dự án trong công ty, tuy nhiên khi phát triển ReactJS bạn nên sử dụng phiên bản mới hơn (>=16). Bạn có thể sử dụng [nvm](https://github.com/nvm-sh/nvm) để quản lý các phiên bản Node.js trên máy tính của mình.

## Bước 2: Tạo dự án React với Vite

Mở terminal và chạy lệnh sau để tạo một dự án React mới sử dụng Vite:

```bash
npm create vite buoi1 -- --template react
```

Thay `buoi1` bằng tên dự án bạn muốn. Sau khi lệnh hoàn tất, di chuyển vào thư mục dự án:

```bash
cd buoi1
```

## Bước 3: Cài đặt TailwindCSS

Cài đặt từ docs chính thức của [TailwindCSS](https://tailwindcss.com/docs/installation/using-vite):

```bash
npm install tailwindcss @tailwindcss/vite
```

## Bước 4: Cấu hình TailwindCSS

Mở file `vite.config.ts` và thêm `tailwindcss` vào phần plugins:

```ts
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

import tailwindcss from "@tailwindcss/vite"
// https://vite.dev/config/

export default defineConfig({
    plugins: [react(), tailwindcss()],
})
```

Tiếp theo, mở file `src/index.css` và thêm dòng sau vào đầu file để nhập TailwindCSS:

```css
@import "tailwindcss";
```

## Bước 5: Chạy dự án

Cuối cùng, chạy lệnh sau để khởi động dự án:

```bash
npm run dev
```

Mở trình duyệt và truy cập vào địa chỉ được cung cấp trong terminal (thường là `http://localhost:5173`) để xem ứng dụng ReactJS của bạn đang chạy.
Bây giờ bạn đã thiết lập xong một dự án ReactJS cơ bản với Vite và TailwindCSS! Bạn có thể bắt đầu phát triển ứng dụng của mình từ đây.
