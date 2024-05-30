import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';
import * as SecureStore from 'expo-secure-store';
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";


const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {

  const [fontsLoaded] = useFonts({
    'outfit-regular': require("./assets/fonts/Outfit-Regular.ttf"),
    'outfit-medium': require("./assets/fonts/Outfit-Medium.ttf"),
    'outfit-bold': require("./assets/fonts/Outfit-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey='pk_test_ZmFtb3VzLWVhcndpZy03MC5jbGVyay5hY2NvdW50cy5kZXYk'>
    <View style={styles.container}>
        {/* sign in component */}
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        {/* sign out component */}
        <SignedOut>
          <Login />
        </SignedOut>
      <StatusBar style="auto" />
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 28
  },
});
