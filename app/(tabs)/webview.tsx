import React, { useState, useRef, useCallback } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { ThemedView } from '@/components/ThemedView';

// The URL you want to load in the WebView
const WEB_URL = 'https://optique.adev.ma/'; // Change this to your desired website

export default function WebViewScreen() {
  const colorScheme = useColorScheme();
  const [isLoading, setIsLoading] = useState(true);
  const webViewRef = useRef(null);

  const handleLoadEnd = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <ThemedView style={styles.container}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      
      <WebView
        ref={webViewRef}
        source={{ uri: WEB_URL }}
        style={styles.webView}
        onLoadEnd={handleLoadEnd}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        renderLoading={() => (
          <View style={styles.loadingContainer}>
            <ActivityIndicator 
              size="large" 
              color={Colors[colorScheme ?? 'light'].tint} 
            />
          </View>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
