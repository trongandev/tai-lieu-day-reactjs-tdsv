# BUỔI 11: TỔNG ÔN & BEST PRACTICES (UX/UI)

**Mục tiêu:** Review kiến thức, tối ưu trải nghiệm người dùng (UX) bằng các kỹ thuật hiện đại.

**Thời lượng:** 90 phút

---

## 1. Review kiến thức (30 phút)

-   Component, Props, State.
-   Lifecycle, Hooks (useState, useEffect).
-   Routing, Context.

---

## 2. Best Practices UX/UI (50 phút)

**1. Loading State & Skeleton**

-   Thay vì hiện chữ "Loading...", hãy hiện khung xương (Skeleton) giống Facebook/Youtube.
-   **Thực hành:** Tạo component `Skeleton` đơn giản (div màu xám, animate pulse) và áp dụng vào danh sách sản phẩm khi đang fetch API.

**2. Feedback hành động (Toast/Modal)**

-   Khi xóa/lưu thành công -> Hiện thông báo nhỏ góc màn hình (Toast).
-   Khi xóa dữ liệu quan trọng -> Hiện Modal xác nhận.
-   **Thực hành:**
    -   Tích hợp ShadcnUI Dialog (Modal).
    -   Làm chức năng: Bấm nút Xóa -> Hiện Modal -> Bấm Đồng ý mới thực sự xóa.

**3. Empty State**

-   Khi danh sách rỗng, đừng để trắng trơn. Hãy hiện hình ảnh vui nhộn "Chưa có dữ liệu".

---

## 3. Bài tập về nhà

1.  **Chuẩn bị cho Project lớn:**
    -   Tìm kiếm ý tưởng giao diện E-commerce (tham khảo Shopee, Tiki).
    -   Setup sẵn project mới, cài đặt các thư viện cần thiết (Router, Axios, Tailwind, ShadcnUI...).
