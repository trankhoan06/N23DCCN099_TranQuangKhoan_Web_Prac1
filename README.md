# [Thực hành 1] Xây dựng Product Page với Next.js & Tailwind

##  Thông tin sinh viên
- **Họ và tên:Trần Quang Khoan
- **Mã sinh viên (MSV):N23DCCN099
- **Môn học:** Lập trinh web

##  Mô tả dự án
Đây là bài thực hành cá nhân số 1, mục tiêu xây dựng một ứng dụng web hiển thị danh sách sản phẩm và trang chi tiết sản phẩm. Dự án được phát triển bằng **Next.js (App Router)** kết hợp với **TypeScript** để đảm bảo tính chặt chẽ của dữ liệu và **Tailwind CSS** để xây dựng giao diện Responsive nhanh chóng. 

Dữ liệu sản phẩm được lấy (fetch) trực tiếp từ [FakeStoreAPI](https://fakestoreapi.com/products).

##  Công nghệ sử dụng
- **Framework:** Next.js 14+ (App Router)
- **Ngôn ngữ:** TypeScript
- **Styling:** Tailwind CSS
- **Data Fetching:** Native `fetch` API

##  Hướng tiếp cận và Xử lý logic

### 1. Xây dựng Trang chủ (Home Page) & Tối ưu Component
- **Tái sử dụng UI Components:** Kế thừa và tích hợp các component giao diện mẫu (như `Navbar`, `Button`, `ProductCard`). Việc này giúp đảm bảo tính đồng bộ của UI, chuẩn hóa cấu trúc thư mục dự án theo hướng Component-based.
- **Hiển thị danh sách:** Tiến hành gọi API lấy toàn bộ dữ liệu sản phẩm và hiển thị lên trang chủ dưới dạng Grid Layout, đảm bảo tính Responsive (tương thích tốt trên cả Mobile và Desktop).

### 2. Xây dựng Trang Chi tiết Sản phẩm (Product Detail Page)
- **Điều hướng thông minh (Routing):** Tại trang chủ, mỗi thẻ `ProductCard` được bọc bởi thẻ `<Link>` của Next.js. Đường dẫn được thiết lập theo chuẩn **Dynamic Route** (VD: `/product/1`, `/product/2`).
- **Xử lý dữ liệu (Data Fetching):** Khi người dùng chuyển sang trang Detail, hệ thống tự động bắt tham số `id` trực tiếp từ URL thông qua const `const params = useParams(),const id = params.id;`. 
- **Render giao diện chi tiết:** Sử dụng `id` vừa lấy được để thực hiện một API call độc lập (`https://fakestoreapi.com/products/${id}`), nhằm lấy dữ liệu chi tiết của đúng sản phẩm đó. Sau đó bóc tách các trường dữ liệu (hình ảnh, tên, giá, mô tả, category) và render lên giao diện.

##  Hướng dẫn Cài đặt & Chạy dự án (Local)

1. **Clone repository về máy:**
   ```bash
   git clone https://github.com/trankhoan06/N23DCCN099_TranQuangKhoan_Web_Prac1
2. chạy local với lần lượt 3 lệnh
    npm install
    npm run build
    npm run dev