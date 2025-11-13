# 📖 Hướng dẫn Sử dụng - Study Notes App

## 🎯 Mục đích

Ứng dụng Study Notes giúp học sinh/sinh viên ghi chú theo từng môn học một cách dễ dàng và có tổ chức.

## 🚀 Cách sử dụng

### 1️⃣ Màn hình chính (Home Screen)

#### Khi mở app lần đầu
- Bạn sẽ thấy màn hình chào mừng với tiêu đề "Study Notes - Ghi chú học tập"
- Phần header có gradient màu xanh đẹp mắt
- Dưới đó là danh sách 5 môn học:
  - 📘 Toán
  - 🔬 Lý
  - ⚗️ Hóa
  - 🇬🇧 Anh
  - 💻 CNTT

#### Chọn môn học
1. Nhấn vào môn học bạn muốn ghi chú
2. Ví dụ: Nhấn vào "Toán"
3. App sẽ chuyển sang màn hình ghi chú của môn Toán

### 2️⃣ Màn hình Ghi chú (Notes Screen)

#### Lần đầu tiên (chưa có ghi chú)
- Màn hình hiển thị:
  - Header với tên môn học (VD: "Ghi chú - Toán")
  - Nút Back (←) để quay về màn hình chính
  - Form "Thêm ghi chú mới"
  - Thông báo "Chưa có ghi chú nào. Hãy thêm ghi chú đầu tiên!"

#### Thêm ghi chú mới

**Cách 1: Dùng nút**
1. Nhấn vào ô input "Nhập nội dung ghi chú..."
2. Gõ nội dung ghi chú (VD: "Công thức đạo hàm cơ bản")
3. Nhấn nút "Thêm ghi chú" màu xanh
4. Ghi chú sẽ xuất hiện trong danh sách bên dưới
5. Thông báo xanh "Đã thêm ghi chú thành công!" hiện lên

**Cách 2: Dùng phím Enter**
1. Nhấn vào ô input
2. Gõ nội dung ghi chú
3. Nhấn phím **Enter** trên bàn phím
4. Ghi chú được thêm ngay lập tức

#### Xem danh sách ghi chú
- Mỗi ghi chú hiển thị với:
  - Số thứ tự (#1, #2, #3...)
  - Nội dung ghi chú
  - Background trắng với shadow nhẹ
- Tổng số ghi chú hiển thị ở tiêu đề (VD: "Danh sách ghi chú (5)")

#### Xóa ghi chú

**Trên mobile (swipe):**
1. Vuốt ghi chú từ phải sang trái
2. Nút xóa màu đỏ xuất hiện
3. Nhấn vào nút xóa (icon thùng rác)
4. Ghi chú bị xóa ngay lập tức
5. Thông báo "Đã xóa ghi chú!" hiện lên

**Trên desktop:**
1. Click giữ và kéo item sang trái
2. Hoặc dùng chuột vuốt sang trái
3. Nhấn nút xóa khi hiện ra

#### Quay về màn hình chính
- Nhấn nút Back (←) ở góc trên bên trái
- Hoặc dùng nút back của điện thoại (Android)
- Dữ liệu đã được lưu tự động

### 3️⃣ Chuyển đổi giữa các môn học

#### Từ Home screen
1. Nhấn vào môn học khác (VD: Lý)
2. Màn hình Notes mở ra với ghi chú của môn Lý
3. Các ghi chú của môn Toán vẫn được giữ nguyên

#### Từ Notes screen
1. Nhấn nút Back để về Home
2. Chọn môn học khác
3. Mỗi môn có dữ liệu riêng biệt

## 💡 Tips & Tricks

### ✅ Ghi chú hiệu quả
- **Ngắn gọn**: Mỗi note nên ngắn, tập trung vào 1 ý chính
- **Rõ ràng**: Viết dễ hiểu, dễ đọc lại
- **Có tổ chức**: Sắp xếp theo thứ tự logic (VD: chương 1, 2, 3...)

### ✅ Ví dụ ghi chú tốt

**Môn Toán:**
```
✓ Công thức đạo hàm: (x^n)' = n*x^(n-1)
✓ Tích phân: ∫x^n dx = x^(n+1)/(n+1) + C
✓ Giới hạn: lim(x→0) sinx/x = 1
```

**Môn Lý:**
```
✓ F = ma (Định luật Newton 2)
✓ v = v0 + at (Chuyển động thẳng biến đổi đều)
✓ E = mc² (Einstein)
```

**Môn Hóa:**
```
✓ H2O = Nước (2 H + 1 O)
✓ NaCl = Muối ăn (Natri Clorua)
✓ pH < 7: Axit, pH > 7: Bazơ
```

**Môn Anh:**
```
✓ Present Simple: S + V(s/es)
✓ Present Continuous: S + am/is/are + V-ing
✓ Past Simple: S + V-ed/V2
```

**Môn CNTT:**
```
✓ OOP: Object-Oriented Programming
✓ Array: Mảng - cấu trúc dữ liệu tuyến tính
✓ HTML: HyperText Markup Language
```

### ✅ Tổ chức ghi chú

**Theo chủ đề:**
```
Toán - Chương 1: Hàm số
Toán - Chương 2: Đạo hàm
Toán - Chương 3: Tích phân
```

**Theo mức độ:**
```
[Quan trọng] Công thức thi
[Bài tập] Ví dụ minh họa
[Ghi nhớ] Lưu ý đặc biệt
```

## ⚠️ Lưu ý quan trọng

### 🔴 Validation
- **Không được để trống**: Bạn phải nhập nội dung trước khi thêm
- **Thông báo**: Nếu để trống, sẽ có thông báo vàng "Vui lòng nhập nội dung ghi chú!"

### 🟢 Tự động lưu
- ✅ Dữ liệu được lưu **ngay lập tức** khi thêm/xóa
- ✅ Không cần nhấn nút "Save"
- ✅ Tắt app và mở lại, dữ liệu vẫn còn

### 🔵 Dữ liệu riêng biệt
- ✅ Mỗi môn học có dữ liệu riêng
- ✅ Xóa ghi chú môn Toán không ảnh hưởng môn Lý
- ✅ Có thể có 0 ghi chú hoặc vô số ghi chú cho mỗi môn

### 🟡 Offline hoàn toàn
- ✅ App hoạt động 100% offline
- ✅ Không cần internet
- ✅ Dữ liệu lưu trên thiết bị

### 🟠 Không đồng bộ
- ⚠️ Dữ liệu KHÔNG đồng bộ giữa các thiết bị
- ⚠️ Xóa app = mất dữ liệu
- ⚠️ Nên backup quan trọng

## 🎨 Giao diện

### Màu sắc
- **Primary (Xanh dương)**: #3880ff - Nút chính, header
- **Secondary (Xanh lá)**: #3dc2ff - Gradient
- **Success (Xanh lá)**: Toast thành công
- **Danger (Đỏ)**: Nút xóa
- **Warning (Vàng)**: Toast cảnh báo

### Icons
- 📖 `bookOutline`: Môn học, welcome icon
- ➕ `addOutline`: Thêm ghi chú
- 🗑️ `trashOutline`: Xóa ghi chú
- 📄 `documentTextOutline`: Danh sách ghi chú
- ➡️ `chevronForwardOutline`: Mũi tên sang phải

## 🔍 Troubleshooting

### ❓ Không thêm được ghi chú?
- ✅ Kiểm tra đã nhập nội dung chưa
- ✅ Thử nhấn nút thay vì Enter
- ✅ Kiểm tra kết nối mạng (không cần, nhưng check app có chạy)

### ❓ Dữ liệu bị mất?
- ⚠️ Có thể bạn đã xóa app hoặc clear data
- ⚠️ Dữ liệu lưu local, không có backup cloud

### ❓ Không vuốt được để xóa?
- ✅ Thử vuốt từ phải sang trái (không phải trái sang phải)
- ✅ Vuốt mạnh hơn một chút
- ✅ Trên desktop, thử dùng chuột kéo

### ❓ Toast không hiển thị?
- ✅ Toast tự động tắt sau 1.5-2 giây
- ✅ Nếu không thấy, thao tác vẫn thành công

## 📊 Giới hạn

### Số lượng
- ✅ **Không giới hạn** số lượng ghi chú mỗi môn
- ⚠️ Nên giữ dưới 100 notes/môn để hiệu suất tốt

### Độ dài
- ✅ **Không giới hạn** độ dài mỗi ghi chú
- ⚠️ Nên giữ dưới 500 ký tự/note để dễ đọc

### Storage
- ✅ Preferences API có thể lưu nhiều MB
- ⚠️ Nhưng nên tối ưu để không làm chậm app

## 🎓 Use Cases

### Học sinh THPT
```
- Ghi công thức Toán, Lý, Hóa
- Lưu từ vựng Tiếng Anh
- Note các khái niệm CNTT
```

### Sinh viên Đại học
```
- Ghi chú bài giảng
- Lưu code snippets (CNTT)
- Note deadline, bài tập
```

### Tự học
```
- Ghi điểm quan trọng
- Lưu tài liệu tham khảo
- Track tiến độ học tập
```

## 📱 Demo Flow

```
1. Mở app
   ↓
2. Màn hình Home hiển thị
   ↓
3. Chọn "Toán"
   ↓
4. Màn hình Notes - Toán (empty)
   ↓
5. Nhập: "Công thức đạo hàm"
   ↓
6. Nhấn "Thêm ghi chú"
   ↓
7. Note hiển thị với #1
   ↓
8. Thêm tiếp: "Tích phân cơ bản"
   ↓
9. Note hiển thị với #2
   ↓
10. Vuốt note #1 sang trái
    ↓
11. Nhấn nút xóa
    ↓
12. Note #1 biến mất, Note #2 thành #1
    ↓
13. Nhấn Back
    ↓
14. Về Home screen
    ↓
15. Chọn "Lý"
    ↓
16. Notes của Lý (rỗng, riêng biệt với Toán)
```

## 🌟 Best Practices

### ✅ Nên làm
- Ghi chú ngay khi học
- Sắp xếp theo chương/bài
- Review ghi chú thường xuyên
- Xóa note không còn cần thiết
- Viết ngắn gọn, dễ hiểu

### ❌ Không nên
- Copy-paste dài dòng
- Ghi chú không có cấu trúc
- Để lẫn lộn giữa các môn
- Quên backup dữ liệu quan trọng
- Viết tắt không hiểu được

---

**Chúc bạn học tập hiệu quả với Study Notes! 📚✨**
