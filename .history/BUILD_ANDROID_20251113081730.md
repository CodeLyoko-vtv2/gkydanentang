# 🤖 Hướng dẫn Build Android - Study Notes App

## 📋 Yêu cầu hệ thống

### 1. Phần mềm cần cài đặt

- ✅ **Node.js** (v16 trở lên) - [Download](https://nodejs.org/)
- ✅ **Android Studio** (Hedgehog 2023 trở lên) - [Download](https://developer.android.com/studio)
- ✅ **JDK 17** (đi kèm Android Studio hoặc cài riêng)
- ✅ **Git** (optional) - [Download](https://git-scm.com/)

### 2. Android SDK Requirements

Trong Android Studio SDK Manager, cài đặt:
- ✅ Android SDK Platform 34 (hoặc cao hơn)
- ✅ Android SDK Build-Tools 34.0.0
- ✅ Android SDK Command-line Tools
- ✅ Android Emulator (nếu muốn test trên emulator)

## 🚀 Các bước Build Android

### Bước 1: Cài đặt Dependencies

Mở PowerShell tại thư mục project và chạy:

```powershell
npm install
```

Kiểm tra xem `@capacitor/preferences` đã được cài:

```powershell
npm list @capacitor/preferences
```

Nếu chưa có, cài thủ công:

```powershell
npm install @capacitor/preferences
```

### Bước 2: Build Web Assets

```powershell
npm run build
```

Lệnh này sẽ:
- Compile TypeScript sang JavaScript
- Bundle tất cả file với Vite
- Tạo thư mục `dist/` chứa production files

### Bước 3: Sync với Capacitor

```powershell
npx cap sync android
```

Hoặc nếu chưa có thư mục `android/`:

```powershell
npx cap add android
npx cap sync android
```

Lệnh này sẽ:
- Copy web assets vào `android/app/src/main/assets/public/`
- Cập nhật Android project với plugins mới
- Sync dependencies

### Bước 4: Mở Android Studio

```powershell
npx cap open android
```

Android Studio sẽ tự động mở với project ở thư mục `android/`.

### Bước 5: Build APK trong Android Studio

#### 5.1. Đợi Gradle Sync hoàn tất
- Android Studio sẽ tự động sync Gradle
- Xem progress ở thanh dưới cùng
- Đợi cho đến khi thấy "Gradle sync finished"

#### 5.2. Chọn Build Variant (Optional)
- Click **Build > Select Build Variant**
- Chọn `debug` hoặc `release`

#### 5.3. Build APK
1. Click menu **Build**
2. Chọn **Build Bundle(s) / APK(s)**
3. Chọn **Build APK(s)**

#### 5.4. Đợi build hoàn tất
- Theo dõi progress trong tab "Build"
- Khi xong sẽ có thông báo "Build completed successfully"
- Click **locate** để mở folder chứa APK

### Bước 6: Tìm APK file

APK được tạo tại:

```
android/app/build/outputs/apk/debug/app-debug.apk
```

Hoặc với release build:

```
android/app/build/outputs/apk/release/app-release-unsigned.apk
```

## 📱 Chạy trên Emulator

### Cách 1: Từ Android Studio

1. Click nút **Device Manager** (icon điện thoại)
2. Tạo Virtual Device mới hoặc chọn có sẵn
3. Click **Run** (icon tam giác xanh)
4. Chọn emulator muốn chạy
5. Đợi app khởi động

### Cách 2: Từ Command Line

```powershell
# List available devices
npx cap run android --list

# Run on specific device
npx cap run android --target=<device-id>
```

## 📲 Chạy trên thiết bị thật

### Bước 1: Bật Developer Mode trên điện thoại

**Android:**
1. Vào **Settings > About phone**
2. Tap vào **Build number** 7 lần
3. Quay lại Settings, vào **Developer options**
4. Bật **USB debugging**

### Bước 2: Kết nối điện thoại

1. Cắm cáp USB vào máy tính
2. Trên điện thoại, chọn **Allow USB debugging**
3. Kiểm tra kết nối:

```powershell
adb devices
```

### Bước 3: Run app

Trong Android Studio:
1. Chọn thiết bị trong dropdown
2. Click **Run** (icon tam giác xanh)

Hoặc dùng command line:

```powershell
npx cap run android
```

## 🔐 Build Release APK (Ký và tối ưu)

### Bước 1: Tạo Keystore

```powershell
keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

Trả lời các câu hỏi và nhớ password!

### Bước 2: Cấu hình Gradle

Tạo file `android/key.properties`:

```properties
storePassword=<your-store-password>
keyPassword=<your-key-password>
keyAlias=my-key-alias
storeFile=../my-release-key.keystore
```

Chỉnh sửa `android/app/build.gradle`:

```gradle
// Thêm sau android {
def keystorePropertiesFile = rootProject.file("key.properties")
def keystoreProperties = new Properties()
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}

android {
    // ... existing code ...
    
    signingConfigs {
        release {
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storeFile file(keystoreProperties['storeFile'])
            storePassword keystoreProperties['storePassword']
        }
    }
    
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}
```

### Bước 3: Build Release APK

```powershell
cd android
.\gradlew assembleRelease
cd ..
```

APK được tạo tại:
```
android/app/build/outputs/apk/release/app-release.apk
```

## 🎯 Build Android App Bundle (AAB) cho Google Play

```powershell
cd android
.\gradlew bundleRelease
cd ..
```

AAB file tại:
```
android/app/build/outputs/bundle/release/app-release.aab
```

## 🐛 Troubleshooting

### Lỗi: JAVA_HOME not set

**Giải pháp:**
1. Tìm đường dẫn JDK trong Android Studio:
   - **File > Project Structure > SDK Location > JDK location**
2. Set biến môi trường:

```powershell
# PowerShell
$env:JAVA_HOME = "C:\Program Files\Android\Android Studio\jbr"
```

### Lỗi: SDK location not found

**Giải pháp:**
Tạo file `android/local.properties`:

```properties
sdk.dir=C\:\\Users\\<YourUsername>\\AppData\\Local\\Android\\Sdk
```

### Lỗi: Gradle sync failed

**Giải pháp:**

```powershell
cd android
.\gradlew clean
cd ..
npx cap sync android
```

### Lỗi: Could not find @capacitor/preferences

**Giải pháp:**

```powershell
npm install @capacitor/preferences
npx cap sync android
```

### Lỗi: Build failed - minSdkVersion too low

**Giải pháp:**
Chỉnh sửa `android/app/build.gradle`:

```gradle
android {
    defaultConfig {
        minSdkVersion 22  // Tăng từ 21 lên 22
        targetSdkVersion 34
    }
}
```

### App chạy nhưng màn hình trắng

**Giải pháp:**

```powershell
npm run build
npx cap sync android
npx cap open android
# Sau đó Build > Clean Project > Rebuild Project
```

## 📊 Kiểm tra APK

### Xem thông tin APK

```powershell
aapt dump badging android/app/build/outputs/apk/debug/app-debug.apk
```

### Kiểm tra kích thước

```powershell
dir android/app/build/outputs/apk/debug/app-debug.apk
```

### Cài APK thủ công

```powershell
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

## 🎨 Tùy chỉnh App (Optional)

### Đổi App Name

Chỉnh sửa `android/app/src/main/res/values/strings.xml`:

```xml
<resources>
    <string name="app_name">Study Notes</string>
    <string name="title_activity_main">Study Notes</string>
</resources>
```

### Đổi App Icon

Thay thế file trong:
```
android/app/src/main/res/mipmap-*/ic_launcher.png
```

### Đổi Package Name

Chỉnh sửa `capacitor.config.ts`:

```typescript
const config: CapacitorConfig = {
  appId: 'com.yourdomain.studynotes',  // Đổi này
  appName: 'study-notes',
  webDir: 'dist'
};
```

Sau đó:

```powershell
npx cap sync android
```

## ✅ Checklist Build Android

- [ ] Đã cài Node.js
- [ ] Đã cài Android Studio
- [ ] Đã cài Android SDK
- [ ] Chạy `npm install` thành công
- [ ] Chạy `npm run build` thành công
- [ ] Chạy `npx cap sync android` thành công
- [ ] Mở được Android Studio
- [ ] Gradle sync thành công
- [ ] Build APK thành công
- [ ] Test trên emulator hoặc thiết bị thật
- [ ] App chạy và lưu dữ liệu được

## 📚 Tài liệu tham khảo

- [Capacitor Android Documentation](https://capacitorjs.com/docs/android)
- [Android Studio Guide](https://developer.android.com/studio/intro)
- [Building Your App - Android](https://developer.android.com/studio/build)

---

**Chúc bạn build thành công! 🎉**
