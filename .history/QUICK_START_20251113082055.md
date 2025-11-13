# 🚀 Quick Start - Study Notes App

## ⚡ Chạy nhanh trong 3 phút

### 1. Cài đặt (1 phút)
```bash
cd study-notes
npm install
```

### 2. Chạy trên Browser (30 giây)
```bash
npm run dev
```
Mở: http://localhost:5173

### 3. Build & Sync (1 phút)
```bash
npm run build
npx cap sync
```

### 4. Chạy Android (30 giây)
```bash
npx cap open android
```
Trong Android Studio: nhấn ▶ Run

---

## 📋 Checklist nhanh

- [ ] Đã cài Node.js
- [ ] Đã chạy `npm install`
- [ ] Đã test trên browser
- [ ] Đã build thành công
- [ ] Đã sync Capacitor
- [ ] Đã cài Android Studio (nếu build Android)

---

## 🎯 Chức năng chính

1. **Home**: Chọn môn học (Toán, Lý, Hóa, Anh, CNTT)
2. **Notes**: Thêm/xóa ghi chú cho từng môn
3. **Storage**: Tự động lưu với Capacitor Preferences

---

## 📁 Files quan trọng

```
src/
├── App.tsx              ← Routing chính
├── pages/
│   ├── Home.tsx         ← Màn hình chính
│   └── Notes.tsx        ← Màn hình ghi chú
├── services/
│   └── notesStorage.ts  ← Service lưu trữ
└── data/
    └── subjects.ts      ← Danh sách môn học
```

---

## 🛠️ Commands hay dùng

```bash
# Development
npm run dev              # Dev server
ionic serve              # Ionic dev server

# Build
npm run build            # Build production
npx cap sync            # Sync native projects

# Android
npx cap open android     # Open Android Studio
npx cap run android      # Run on Android

# iOS (Mac only)
npx cap open ios         # Open Xcode
npx cap run ios          # Run on iOS

# Testing
npm run test.unit        # Unit tests
npm run test.e2e         # E2E tests
```

---

## 🎨 Demo Flow

```
Home → Click "Toán" → Notes Screen
  ↓
Nhập "Công thức đạo hàm" → Nhấn "Thêm"
  ↓
Ghi chú hiện lên với #1
  ↓
Vuốt sang trái → Nhấn Delete
  ↓
Ghi chú bị xóa
  ↓
Nhấn Back → Về Home
```

---

## 📚 Docs đầy đủ

- **README.md** - Hướng dẫn chính đầy đủ
- **BUILD_ANDROID.md** - Hướng dẫn build Android chi tiết
- **USER_GUIDE.md** - Hướng dẫn sử dụng app
- **PROJECT_STRUCTURE.md** - Cấu trúc project
- **CHANGELOG.md** - Lịch sử thay đổi

---

## 🐛 Lỗi thường gặp

### Cannot find module '@capacitor/preferences'
```bash
npm install @capacitor/preferences
npx cap sync
```

### Build failed
```bash
npm run build
npx cap sync android
cd android && .\gradlew clean && cd ..
```

### Port already in use
```bash
# Đổi port
npm run dev -- --port 3000
```

---

## ✅ Done!

App sẵn sàng để:
- ✅ Chạy trên browser
- ✅ Build Android APK
- ✅ Build iOS app
- ✅ Deploy production

---

**Made with ❤️ for Midterm Project**

🎓 PTUDDNT - Đề 4 - Study Notes
