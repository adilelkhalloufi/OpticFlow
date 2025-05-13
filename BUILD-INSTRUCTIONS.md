# How to Generate Android APK for OpticFlow

This guide provides instructions on how to build an Android APK for your OpticFlow app. You have two main options:

## Option 1: Build with EAS (Expo Application Services) - Recommended

EAS Build is the recommended way to build your Android app as it handles all dependencies and build configurations in the cloud.

### Prerequisites
- An Expo account (sign up at https://expo.dev/signup)
- EAS CLI installed (`npm install -g eas-cli`)
- Logged in to your Expo account in the terminal (`eas login`)

### Steps

1. Configure EAS Build by running:
   ```
   eas build:configure
   ```

2. Build an APK for testing (internal distribution):
   ```
   eas build -p android --profile preview
   ```

3. The build process will run in the cloud, and you'll receive a link to download the APK when it's ready.

## Option 2: Local Build with Expo Prebuild

If you prefer to build locally or don't want to create an Expo account, you can use this approach.

### Prerequisites
- Android SDK installed
- Java Development Kit (JDK) installed
- ANDROID_HOME and JAVA_HOME environment variables set

### Steps

1. Install necessary development tools:
   ```
   npm install -g expo-cli
   ```

2. Generate native Android project files:
   ```
   npm run prebuild
   ```

3. Navigate to the Android directory and build the APK:
   ```
   cd android
   ./gradlew assembleRelease
   ```

4. The APK will be available at:
   ```
   android/app/build/outputs/apk/release/app-release.apk
   ```

## Testing Your APK

1. Transfer the APK to your Android device.
2. Install it by opening the file on your device.
3. Make sure "Install from unknown sources" is enabled in your device settings.

## Troubleshooting

- If you encounter build errors, verify that all dependencies are installed and your environment variables are set correctly.
- For EAS Build issues, check the build logs provided in the Expo dashboard.
- For local builds, ensure you have sufficient permissions to execute Gradle commands.
