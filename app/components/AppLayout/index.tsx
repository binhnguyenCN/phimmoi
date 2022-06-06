// libs
import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
// navigators
import AppNavigator from "@/navigation/AppNavigator";
import AuthNavigator from "@/navigation/AuthNavigator";
import NavigationTheme from "@/navigation/NavigationTheme";
import { navigationRef } from "@/navigation/rootNavigation";
import { useAuth } from "@/auth/context";

const AppLayout = () => {
  const { user, restoreUser } = useAuth();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function showPlashScreen() {
      await SplashScreen.preventAutoHideAsync();
      await restoreUser();
      setIsReady(true);
    }
    showPlashScreen();
  }, []);

  useEffect(() => {
    async function hidePlashScreen() {
      if (isReady) await SplashScreen.hideAsync();
    }
    hidePlashScreen();
  }, [isReady]);

  if (!isReady) {
    return null;
  }
  return (
    <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
export default AppLayout;
