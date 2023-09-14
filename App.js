import { useState, useEffect, useCallback, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import MySwiper from "./components/swiper/Swiper";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import AuthenticatedStack from "./components/auth/AuthenticatedStack";
import OnboardingScreen from "./screens/auth/Onboarding";
import Colors from "./contants/Colors";

import Strings from "./contants/Strings";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

function Navigation({ context }) {
  const data = [
    Strings.HOnboarding1,
    Strings.HOnboarding2,
    Strings.HOnboarding3,
    Strings.HOnboarding4,
  ];
  
  return (
    <NavigationContainer>
      {context.isAuthenticated ? (
        <AuthenticatedStack />
      ) : (
        <MySwiper isAuth activeDotColor={Colors.primary500} bottom={10}>
          {data.map((datum, index) => (
            <OnboardingScreen
              key={index}
              content={datum}
              position={index + 1}
              handleSignin={context.switchToLogin}
              handleRegistration={context.switchToRegistration}
            />
          ))}
        </MySwiper>
      )}
    </NavigationContainer>
  );
}

function Root() {
  const authCtx = useContext(AuthContext);
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
      
        // Pre-load fonts
        await Font.loadAsync(
          "axiforma",
          require("./assets/font/Axiforma-Regular.ttf")
        );
        await Font.loadAsync(
          "axiforma-w600",
          require("./assets/font/Axiforma-Bold.ttf")
        );
        await Font.loadAsync(
          "gothamPro-w400",
          require("./assets/font_2/GothamPro-Medium.ttf")
        );
        await Font.loadAsync(
          "poppins-w500",
          require("./assets/font_3/Poppins-SemiBold.ttf")
        );
        await Font.loadAsync(
          "poppins-w600",
          require("./assets/font_3/Poppins-Bold.ttf")
        );
        await Font.loadAsync(
          "poppins-w400",
          require("./assets/font_3/Poppins-Regular.ttf")
        );
        await Font.loadAsync(
          "gothamPro-w700",
          require("./assets/font_2/GothamPro-Black.ttf")
        );

        //retrieving token, and using it for automatic login
        const storedToken = await AsyncStorage.getItem("token");
        if (storedToken) {
          authCtx.authenticate(storedToken);
        }
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView style={styles.rootContainer} onLayout={onLayoutRootView}>
      <Navigation context={authCtx} />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
