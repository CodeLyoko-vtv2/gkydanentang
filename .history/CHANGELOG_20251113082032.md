# 📝 Changelog - Study Notes App

Tất cả các thay đổi quan trọng của project được ghi lại ở đây.

## [1.0.0] - 2024-11-13

### 🎉 Initial Release - Midterm Project

#### ✨ Features Added

**Core Functionality:**
- ✅ Hiển thị danh sách môn học (Toán, Lý, Hóa, Anh, CNTT)
- ✅ Tạo ghi chú mới cho từng môn học
- ✅ Xem danh sách ghi chú theo môn
- ✅ Xóa ghi chú (swipe to delete)
- ✅ Lưu trữ dữ liệu local với Capacitor Preferences API
- ✅ Toast notifications cho các thao tác

**UI/UX:**
- ✅ Giao diện đẹp với Ionic components
- ✅ Gradient header màu primary/secondary
- ✅ Icons từ Ionicons
- ✅ Empty state thân thiện
- ✅ Responsive design
- ✅ Smooth animations

**Technical:**
- ✅ Ionic 8.5.0 + Capacitor 7.4.4
- ✅ React 19.0.0 + TypeScript 5.1.6
- ✅ React Router 5.3.4
- ✅ Vite build tool
- ✅ ESLint configuration
- ✅ Unit test setup

#### 📁 Files Created

**Source Code:**
- `src/App.tsx` - Main app component với routing
- `src/pages/Home.tsx` - Màn hình danh sách môn học
- `src/pages/Home.css` - Styles cho Home
- `src/pages/Notes.tsx` - Màn hình ghi chú
- `src/pages/Notes.css` - Styles cho Notes
- `src/services/notesStorage.ts` - Service quản lý Preferences
- `src/data/subjects.ts` - Danh sách môn học

**Documentation:**
- `README.md` - Hướng dẫn chính
- `BUILD_ANDROID.md` - Hướng dẫn build Android
- `PROJECT_STRUCTURE.md` - Cấu trúc project
- `USER_GUIDE.md` - Hướng dẫn sử dụng
- `CHANGELOG.md` - File này
- `screenshots/README.md` - Hướng dẫn chụp screenshots

**Configuration:**
- `capacitor.config.ts` - Cấu hình Capacitor
- Updated `package.json` - Dependencies

#### 🛠️ Technical Details

**Storage Implementation:**
```typescript
// Key format: notes_<subject>
// Value format: JSON.stringify(string[])
await Preferences.set({
  key: `notes_${subject}`,
  value: JSON.stringify(notes)
});
```

**Routing:**
```typescript
/ → Redirect to /home
/home → Home screen (danh sách môn học)
/notes/:subject → Notes screen (ghi chú của môn)
```

**Dependencies:**
- @capacitor/preferences: ^7.0.2 (Storage)
- @capacitor/core: ^7.4.4 (Core)
- @ionic/react: ^8.5.0 (UI Framework)
- react: 19.0.0 (Library)
- react-router-dom: ^5.3.4 (Routing)

#### 📦 Build Configuration

**Supported Platforms:**
- ✅ Web (Browser)
- ✅ Android (API 22+)
- ✅ iOS (iOS 13+)

**Build Commands:**
```bash
npm run build        # Production build
npm run dev          # Development server
ionic serve          # Ionic dev server
npx cap sync         # Sync native projects
npx cap open android # Open Android Studio
npx cap open ios     # Open Xcode
```

#### 🎨 Design System

**Colors:**
- Primary: #3880ff (Blue)
- Secondary: #3dc2ff (Light Blue)
- Success: #2dd36f (Green)
- Warning: #ffc409 (Yellow)
- Danger: #eb445a (Red)

**Typography:**
- Font Family: System UI
- Sizes: 12px, 14px, 16px, 18px, 28px, 64px

**Spacing:**
- Base: 4px, 8px, 12px, 16px, 20px, 24px, 40px

#### 🧪 Testing

**Unit Tests:**
- Setup with Vitest + React Testing Library
- Test file: `src/App.test.tsx`

**E2E Tests:**
- Setup with Cypress
- Config: `cypress.config.ts`

#### 📱 Features Breakdown

**Home Screen:**
1. Header với gradient
2. Welcome section
3. Danh sách môn học (IonList)
4. Navigation to Notes

**Notes Screen:**
1. Back button
2. Subject title
3. Add note form (IonInput + IonButton)
4. Notes list (IonList)
5. Swipe to delete (IonItemSliding)
6. Empty state
7. Toast notifications

#### 🔒 Data Validation

- ✅ Note không được rỗng
- ✅ Trim whitespace
- ✅ Subject từ URL params
- ✅ JSON parse error handling

#### 🐛 Known Issues

Không có issues được phát hiện trong phiên bản này.

#### 📊 Project Stats

- **Total Files**: ~20
- **Source Code Lines**: ~700
- **Components**: 2 (Home, Notes)
- **Services**: 1 (NotesStorage)
- **Routes**: 3 (/, /home, /notes/:subject)
- **Subjects**: 5 (Toán, Lý, Hóa, Anh, CNTT)

#### 🎯 Deliverables

- ✅ Full source code
- ✅ Documentation (README, guides)
- ✅ Build instructions
- ✅ Project structure
- ✅ Screenshots folder
- ✅ Android build ready
- ✅ iOS build ready

#### 👥 Contributors

- Developer: [Nhập tên của bạn]
- Assignment: Midterm Project - Đề 4
- Subject: PTUDDNT (Phát triển ứng dụng di động đa nền tảng)

---

## Future Versions (Planned)

### [1.1.0] - Planned Features

**New Features:**
- ⏳ Edit existing notes
- ⏳ Search/filter notes
- ⏳ Sort notes (date, alphabet)
- ⏳ Export notes to file
- ⏳ Import notes from file

**Improvements:**
- ⏳ Dark mode support
- ⏳ More subjects
- ⏳ Custom subjects
- ⏳ Note categories/tags
- ⏳ Rich text editor

**Technical:**
- ⏳ Cloud sync (Firebase)
- ⏳ Offline-first with sync
- ⏳ Better error handling
- ⏳ Performance optimization

### [2.0.0] - Advanced Features

**New Features:**
- ⏳ Note sharing
- ⏳ Collaboration
- ⏳ Image attachments
- ⏳ Voice notes
- ⏳ Reminders
- ⏳ Statistics/Analytics

**UI/UX:**
- ⏳ Redesigned interface
- ⏳ Animations
- ⏳ Gestures
- ⏳ Themes

---

## Version Format

```
[MAJOR.MINOR.PATCH] - YYYY-MM-DD

MAJOR: Breaking changes
MINOR: New features (backward compatible)
PATCH: Bug fixes
```

---

**Last Updated**: November 13, 2024
