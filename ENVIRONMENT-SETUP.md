# Setting Up Your Environment for Android App Building

Follow these instructions carefully to set up your development environment for building Android APKs.

## 1. Install Java Development Kit (JDK)

The Android build tools require JDK 11 or newer.

1. Download and install JDK from [Adoptium](https://adoptium.net/)
2. During installation, allow the installer to set the JAVA_HOME environment variable
3. Verify your installation by opening a new Command Prompt and typing:
   ```
   java -version
   ```

## 2. Install Android Studio and Android SDK

1. Download and install [Android Studio](https://developer.android.com/studio)
2. During installation, make sure to select:
   - Android SDK
   - Android SDK Platform
   - Android Virtual Device
3. After installation, open Android Studio
4. Go to Tools > SDK Manager
5. In the SDK Platforms tab, select:
   - Android 13 (Tiramisu)
   - Android 12 (S)
6. In the SDK Tools tab, select:
   - Android SDK Build-Tools
   - NDK
   - Android SDK Command-line Tools
   - Android Emulator

## 3. Set Up Environment Variables

1. Open Windows search and type "environment variables"
2. Select "Edit the system environment variables"
3. Click "Environment Variables"
4. Under System Variables, click "New" and add:
   - Variable name: ANDROID_HOME
   - Variable value: C:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk
     (Replace YOUR_USERNAME with your actual Windows username)
5. Click "OK" to save
6. Under System Variables, find "Path" and click "Edit"
7. Click "New" and add these paths (adjust as needed for your installation):
   - %ANDROID_HOME%\platform-tools
   - %ANDROID_HOME%\tools
   - %ANDROID_HOME%\tools\bin
8. Click "OK" to save all changes

## 4. Test Your Setup

Open a new Command Prompt window and run:

```
adb --version
```

If properly installed, this should display the version of the Android Debug Bridge.

## 5. Building Your APK

After completing the setup:

1. Double-click the `build-android.bat` file in your OpticFlow project directory
2. Follow the on-screen instructions
3. If successful, your APK will be located at:
   ```
   android\app\build\outputs\apk\release\app-release.apk
   ```

## Troubleshooting

- **Error: JAVA_HOME is not set**: Make sure you've set the JAVA_HOME environment variable correctly
- **Gradle build fails**: Make sure you have enough disk space and that your firewall isn't blocking Gradle from downloading dependencies
- **Android SDK not found**: Verify that ANDROID_HOME is set correctly and points to your SDK installation

If you encounter any other issues, please refer to the [React Native documentation](https://reactnative.dev/docs/environment-setup) for detailed environment setup instructions.
