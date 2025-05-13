import React, { useEffect, useRef } from 'react';
import { StyleSheet, Animated, View, Dimensions, Text } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function SplashScreenPage() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    async function prepare() {
      try {
        // Hide the native splash screen
        await SplashScreen.hideAsync();
        
        // Wait 1.5 seconds, then start the animation
        const timeout = setTimeout(() => {
          Animated.parallel([
            Animated.timing(fadeAnim, {
              toValue: 0,
              duration: 800,
              useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
              toValue: 1.2,
              duration: 800,
              useNativeDriver: true,
            }),
          ]).start(() => {
            // Navigate to the WebView screen after animation completes
            router.navigate('/(tabs)/webview');
          });
        }, 1500);
        
        return () => clearTimeout(timeout);
      } catch (e) {
        console.warn('Error in splash screen:', e);
      }
    }
    
    prepare();
  }, [fadeAnim, scaleAnim, router]);

  return (
    <ThemedView style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <Image
          source={require('@/assets/images/splash-icon.png')}
          style={styles.logo}
          contentFit="contain"
        />
        <Text
          style={{
            color: colorScheme === 'dark' ? '#fff' : '#000',
            fontSize: 24,
            marginTop: 20,
          }}
        >
         OpticFlow
        </Text>
      </Animated.View>
    </ThemedView>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: width * 0.5,
    height: height * 0.3,
  },
});
