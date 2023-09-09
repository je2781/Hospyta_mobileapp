import {
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, useWindowDimensions, SafeAreaView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import OnboardingScreen from "./screens/Onboarding";
import Strings from "./contants/Strings";
import Colors from "./contants/Colors";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import DrawerNavigator from "./components/drawer/Drawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MySwiper = () => {
  const authCtx = useContext(AuthContext);
  const {height} = useWindowDimensions();

  if (
    authCtx.switchedToAuthStack.login ||
    authCtx.switchedToAuthStack.registration
  ) {
    return <AuthStack />;
  }

  return (
    <Swiper
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
      paginationStyle={styles.pagination}
      autoplay={true}
      or
    >
      <OnboardingScreen
        position={1}
        content={Strings.HOnboarding1}
        handleSignin={authCtx.switchToLogin}
        handleRegistration={authCtx.switchToRegistration}
      />
      <OnboardingScreen
        position={2}
        content={Strings.HOnboarding2}
        handleSignin={authCtx.switchToLogin}
        handleRegistration={authCtx.switchToRegistration}
      />
      <OnboardingScreen
        position={3}
        content={Strings.HOnboarding3}
        handleSignin={authCtx.switchToLogin}
        handleRegistration={authCtx.switchToRegistration}
      />
      <OnboardingScreen
        position={4}
        content={Strings.HOnboarding4}
        handleSignin={authCtx.switchToLogin}
        handleRegistration={authCtx.switchToRegistration}
      />
    </Swiper>
  );
};

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

function AuthStack() {
  const authCtx = useContext(AuthContext);

  return (
    <Stack.Navigator
      initialRouteName={
        authCtx.switchedToAuthStack.login ? "SignIn" : "Register"
      }
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: Colors.secondary50 },
      }}
    >
      <Stack.Screen name="Register">
        {(props) => <RegistrationScreen {...props} registerCtx={authCtx} />}
      </Stack.Screen>
      <Stack.Screen name="SignIn">
        {(props) => <LoginScreen {...props} loginCtx={authCtx} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <DrawerNavigator/>
  );
}

function Navigation({ context }) {
  return (
    <NavigationContainer>
      {context.isAuthenticated ? <AuthenticatedStack /> : <MySwiper />}
    </NavigationContainer>
  );
}

function Root() {
  const authCtx = useContext(AuthContext);
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        const storedToken = await AsyncStorage.getItem("token");
        if (storedToken) {
          authCtx.authenticate(storedToken);
        }
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
          "poppins-w400",
          require("./assets/font_3/Poppins-Regular.ttf")
        );
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
  dot: {
    backgroundColor: "gray",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: "blue",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  pagination: {
    position: "relative",
    bottom: 20, // Adjust the position as needed
  },
});
