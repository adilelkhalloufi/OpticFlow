@echo off
echo ===================================
echo OpticFlow APK Build Script
echo ===================================
echo.

echo Step 1: Checking Java installation...
where java >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
  echo Java not found. Please install JDK from https://adoptium.net/
  echo After installation, set JAVA_HOME environment variable.
  pause
  exit /b 1
)

echo Step 2: Checking Android SDK...
if not defined ANDROID_HOME (
  echo ANDROID_HOME is not set. Please install Android Studio and set up environment variables.
  echo Visit: https://developer.android.com/studio
  pause
  exit /b 1
)

echo Step 3: Building Expo project...
cd /d %~dp0
call npx expo prebuild

echo Step 4: Navigating to Android directory...
cd android

echo Step 5: Building release APK...
call gradlew.bat assembleRelease

if %ERRORLEVEL% NEQ 0 (
  echo.
  echo Build failed! Please check the errors above.
  pause
  exit /b 1
)

echo.
echo ===================================
echo Build Successful!
echo.
echo Your APK is located at:
echo %~dp0android\app\build\outputs\apk\release\app-release.apk
echo.
echo To install on your device:
echo 1. Enable "Install from Unknown Sources" in your device settings
echo 2. Transfer the APK to your device and install it
echo ===================================
pause
