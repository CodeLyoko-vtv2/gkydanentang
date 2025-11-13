# 📂 Cấu trúc Project - Study Notes App

```
study-notes/
│
├── 📁 android/                          # Android Native Project (sau khi chạy npx cap add android)
│   ├── app/
│   │   ├── src/
│   │   │   └── main/
│   │   │       ├── assets/
│   │   │       │   └── public/          # Web assets được copy từ dist/
│   │   │       ├── java/
│   │   │       │   └── io/ionic/starter/
│   │   │       │       └── MainActivity.java
│   │   │       ├── res/                 # Android resources (icons, strings, etc.)
│   │   │       └── AndroidManifest.xml
│   │   ├── build.gradle                 # App-level Gradle config
│   │   └── capacitor.build.gradle       # Capacitor Gradle config
│   ├── gradle/                          # Gradle wrapper
│   ├── build.gradle                     # Project-level Gradle config
│   ├── settings.gradle                  # Gradle settings
│   └── capacitor.settings.gradle        # Capacitor settings
│
├── 📁 ios/                              # iOS Native Project (sau khi chạy npx cap add ios)
│   ├── App/
│   │   ├── App/
│   │   │   ├── Assets.xcassets/        # iOS assets
│   │   │   ├── public/                  # Web assets
│   │   │   ├── AppDelegate.swift
│   │   │   └── Info.plist
│   │   ├── App.xcodeproj/               # Xcode project
│   │   └── App.xcworkspace/             # Xcode workspace
│   └── Podfile                          # CocoaPods dependencies
│
├── 📁 cypress/                          # E2E Testing với Cypress
│   ├── e2e/
│   │   └── test.cy.ts                   # Test cases
│   ├── fixtures/
│   │   └── example.json                 # Test data
│   └── support/
│       ├── commands.ts                  # Custom commands
│       └── e2e.ts                       # E2E config
│
├── 📁 public/                           # Static Assets (được copy nguyên vẹn vào dist/)
│   └── manifest.json                    # PWA manifest
│
├── 📁 src/                              # Source Code chính
│   │
│   ├── 📁 components/                   # React Components có thể tái sử dụng
│   │   ├── ExploreContainer.tsx         # Demo component (có thể xóa)
│   │   └── ExploreContainer.css
│   │
│   ├── 📁 data/                         # Data & Constants
│   │   └── 📄 subjects.ts               # ✨ Danh sách môn học (Toán, Lý, Hóa, Anh, CNTT)
│   │
│   ├── 📁 pages/                        # Các màn hình chính
│   │   ├── 📄 Home.tsx                  # ✨ Màn hình chính - danh sách môn học
│   │   ├── 📄 Home.css                  # ✨ Styles cho Home screen
│   │   ├── 📄 Notes.tsx                 # ✨ Màn hình ghi chú của từng môn
│   │   └── 📄 Notes.css                 # ✨ Styles cho Notes screen
│   │
│   ├── 📁 services/                     # Business Logic & Services
│   │   └── 📄 notesStorage.ts           # ✨ Service quản lý Capacitor Preferences
│   │
│   ├── 📁 theme/                        # Theme & Global Styles
│   │   └── variables.css                # CSS variables, colors, themes
│   │
│   ├── 📄 App.tsx                       # ✨ Main App Component - Routing setup
│   ├── 📄 App.test.tsx                  # Unit tests cho App
│   ├── 📄 main.tsx                      # Entry point - React render
│   ├── 📄 setupTests.ts                 # Test setup
│   └── 📄 vite-env.d.ts                 # Vite type definitions
│
├── 📁 screenshots/                      # Screenshots của app
│   ├── 01-home-screen.png
│   ├── 02-notes-empty.png
│   ├── 03-notes-add.png
│   ├── 04-notes-list.png
│   ├── 05-notes-swipe-delete.png
│   ├── 06-toast-notification.png
│   └── README.md                        # Hướng dẫn chụp screenshots
│
├── 📄 capacitor.config.ts               # ⚙️ Capacitor Configuration
├── 📄 cypress.config.ts                 # Cypress E2E config
├── 📄 eslint.config.js                  # ESLint configuration
├── 📄 index.html                        # HTML entry point
├── 📄 ionic.config.json                 # Ionic CLI configuration
├── 📄 package.json                      # ⚙️ Dependencies & Scripts
├── 📄 tsconfig.json                     # TypeScript configuration
├── 📄 tsconfig.node.json                # TypeScript config for Node
├── 📄 vite.config.ts                    # Vite build configuration
│
├── 📄 README.md                         # ✨ Hướng dẫn chính của project
├── 📄 BUILD_ANDROID.md                  # ✨ Hướng dẫn build Android chi tiết
└── 📄 PROJECT_STRUCTURE.md              # File này

```

## 📋 Giải thích các file quan trọng

### ⚙️ Configuration Files

#### `capacitor.config.ts`
```typescript
// Cấu hình Capacitor - Native bridge
{
  appId: 'io.ionic.studynotes',      // Bundle ID cho iOS/Android
  appName: 'Study Notes',             // Tên app hiển thị
  webDir: 'dist',                     // Thư mục chứa build output
  server: {
    androidScheme: 'https'            // Scheme cho Android
  }
}
```

#### `package.json`
```json
{
  "dependencies": {
    "@capacitor/preferences": "^7.0.2",  // ✨ Storage plugin chính
    "@ionic/react": "^8.5.0",            // Ionic React components
    "@capacitor/core": "^7.4.4",         // Capacitor core
    "react": "19.0.0",                   // React library
    "react-router-dom": "^5.3.4"         // Routing
  }
}
```

#### `vite.config.ts`
```typescript
// Vite bundler configuration
// - Build optimization
// - Plugin setup (@vitejs/plugin-react)
// - Dev server config
```

#### `tsconfig.json`
```json
// TypeScript compiler options
// - Target: ES modules
// - Strict type checking
// - React JSX support
```

### ✨ Source Code Files

#### `src/App.tsx`
- **Mục đích**: Main application component
- **Chức năng**: 
  - Setup IonReactRouter
  - Define routes (/, /home, /notes/:subject)
  - Import Ionic CSS
  - Initialize Ionic

#### `src/pages/Home.tsx`
- **Mục đích**: Màn hình chính
- **Chức năng**:
  - Hiển thị danh sách môn học từ `subjects.ts`
  - Navigation sang màn hình Notes
  - UI: IonList, IonItem, Icons

#### `src/pages/Notes.tsx`
- **Mục đích**: Màn hình ghi chú
- **Chức năng**:
  - Nhận param `subject` từ URL
  - Load notes từ Preferences
  - Thêm note mới
  - Xóa note (swipe to delete)
  - Toast notifications
  - Empty state

#### `src/services/notesStorage.ts`
- **Mục đích**: Storage service layer
- **API**:
  ```typescript
  NotesStorage.getNotes(subject)      // Lấy notes
  NotesStorage.saveNotes(subject, notes)  // Lưu notes
  NotesStorage.clearNotes(subject)    // Xóa notes
  ```
- **Storage key format**: `notes_<subject>`
- **Data format**: JSON string của string array

#### `src/data/subjects.ts`
- **Mục đích**: Constants - danh sách môn học
- **Data**:
  ```typescript
  ["Toán", "Lý", "Hóa", "Anh", "CNTT"]
  ```

### 🎨 Styling Files

#### `src/theme/variables.css`
- CSS custom properties
- Color scheme (primary, secondary, tertiary...)
- Dark mode variables

#### `src/pages/Home.css`
- Styles riêng cho Home screen
- Welcome section gradient
- List item styling

#### `src/pages/Notes.css`
- Styles riêng cho Notes screen
- Note cards
- Input field
- Empty state
- Swipe actions

## 🔄 Data Flow

```
User Action (UI)
    ↓
Component Handler (Notes.tsx)
    ↓
NotesStorage Service (notesStorage.ts)
    ↓
Capacitor Preferences API
    ↓
Native Storage (iOS/Android)
```

### Example: Thêm ghi chú mới

```
1. User nhập text và click "Thêm ghi chú"
   ↓
2. Notes.tsx: handleAddNote()
   ↓
3. Validate input (không rỗng)
   ↓
4. Update local state: setNotes([...notes, newNote])
   ↓
5. NotesStorage.saveNotes(subject, updatedNotes)
   ↓
6. Preferences.set({ key: `notes_Toán`, value: JSON.stringify(notes) })
   ↓
7. Toast notification: "Đã thêm ghi chú!"
   ↓
8. Clear input field
   ↓
9. UI tự động re-render với note mới
```

## 🗂️ Storage Structure

### Capacitor Preferences Keys

```
notes_Toán    →  ["Công thức đạo hàm", "Tích phân cơ bản"]
notes_Lý      →  ["Định luật Newton", "Điện từ trường"]
notes_Hóa     →  ["Bảng tuần hoàn", "Phản ứng hóa học"]
notes_Anh     →  ["Grammar rules", "Vocabulary list"]
notes_CNTT    →  ["OOP concepts", "Data structures"]
```

### Data Format

```typescript
// Stored value (string)
'["Note 1", "Note 2", "Note 3"]'

// Parsed value (array)
["Note 1", "Note 2", "Note 3"]
```

## 🚀 Build Process

### Development Flow
```
1. Edit source code (src/)
2. Vite dev server auto-reload
3. Test in browser (ionic serve)
```

### Production Build Flow
```
1. npm run build
   ↓
2. TypeScript compile (tsc)
   ↓
3. Vite bundle & optimize
   ↓
4. Output → dist/
   ↓
5. npx cap sync
   ↓
6. Copy dist/ → android/app/src/main/assets/public/
   ↓
7. Update native project
   ↓
8. npx cap open android
   ↓
9. Build APK in Android Studio
```

## 📦 Dependencies Tree

```
study-notes
├── @ionic/react (UI Framework)
│   └── @ionic/core
├── @capacitor/core (Native Bridge)
├── @capacitor/preferences (Storage)
├── react (Library)
│   └── react-dom
├── react-router-dom (Routing)
└── ionicons (Icons)
```

## 🎯 File Sizes (Approximate)

```
src/App.tsx              →  ~2 KB
src/pages/Home.tsx       →  ~3 KB
src/pages/Notes.tsx      →  ~7 KB
src/services/notesStorage.ts  →  ~1.5 KB
src/data/subjects.ts     →  ~0.2 KB

Total source code        →  ~14 KB (excluding node_modules)
Build output (dist/)     →  ~500 KB (optimized)
APK size (debug)         →  ~5-8 MB
APK size (release)       →  ~3-5 MB
```

## 📱 Screens & Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Redirect | → `/home` |
| `/home` | Home.tsx | Danh sách môn học |
| `/notes/:subject` | Notes.tsx | Ghi chú của môn học |

## 🎨 UI Components Used

### Home Screen
- `IonPage`, `IonHeader`, `IonToolbar`, `IonTitle`
- `IonContent`
- `IonList`, `IonItem`, `IonLabel`
- `IonIcon`

### Notes Screen
- `IonPage`, `IonHeader`, `IonToolbar`, `IonTitle`
- `IonButtons`, `IonBackButton`
- `IonContent`
- `IonCard`, `IonCardContent`
- `IonInput`, `IonButton`
- `IonList`, `IonItem`, `IonLabel`
- `IonItemSliding`, `IonItemOptions`, `IonItemOption`
- `IonIcon`, `IonText`
- `useIonToast` (hook)

## 🔍 Key Features Implementation

### 1. Routing với Parameters
```typescript
// App.tsx
<Route exact path="/notes/:subject">
  <Notes />
</Route>

// Notes.tsx
const { subject } = useParams<{ subject: string }>();
```

### 2. Local Storage
```typescript
// Save
await Preferences.set({
  key: `notes_${subject}`,
  value: JSON.stringify(notes)
});

// Get
const result = await Preferences.get({ key: `notes_${subject}` });
const notes = result.value ? JSON.parse(result.value) : [];
```

### 3. Toast Notifications
```typescript
const [present] = useIonToast();

present({
  message: 'Đã thêm ghi chú!',
  duration: 1500,
  color: 'success'
});
```

### 4. Swipe to Delete
```typescript
<IonItemSliding>
  <IonItem>{/* content */}</IonItem>
  <IonItemOptions side="end">
    <IonItemOption color="danger" onClick={handleDelete}>
      <IonIcon icon={trashOutline} />
    </IonItemOption>
  </IonItemOptions>
</IonItemSliding>
```

---

**Document này giúp hiểu rõ cấu trúc và luồng hoạt động của Study Notes App** 🎓
