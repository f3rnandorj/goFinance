import "intl";
import "intl/locale-data/jsonp/pt-BR";

import { StatusBar } from "react-native";

import { ThemeProvider } from "styled-components";

import theme from "./src/global/styles/theme";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { Routes } from "./src/routes";
import { AuthProvider } from "./src/hooks/AuthContext";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  useEffect(() => {
    async function show() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setTimeout(() => setAppIsReady(true), 500);
      }
    }

    show();
  }, []);

  useEffect(() => {
    async function hide() {
      if (appIsReady) {
        await SplashScreen.hideAsync();
      }
    }

    hide();
  }, [appIsReady]);

  if (!fontsLoaded || !appIsReady) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}
