import { createContext, useState, useLayoutEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialAuthState = {
  login: false,
  registration: false
};

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  switchedToAuthStack: initialAuthState,
  authenticate: () => {},
  switchToLogin: () => {},
  switchToRegistration: () => {},
  goBackToOnboarding: () => {},
  logout: () => {},
});

export default function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [switchedToAuthStack, setSwitchedToAuthStack] = useState(initialAuthState);


  async function switchToLogin() {
    setSwitchedToAuthStack(currentValues => ({
      ...currentValues,
      login: true
    }));
  }

  async function switchToRegistration() {
    setSwitchedToAuthStack(currentValues => ({
      ...currentValues,
      registration: true
    }));
  }

  async function authenticate(token) {
    setAuthToken(token);
    setSwitchedToAuthStack(initialAuthState);
    await AsyncStorage.setItem("token", token);
  }

  function goBackToOnboarding(){
    setSwitchedToAuthStack(initialAuthState);
  }

  async function logout() {
    setAuthToken(null);
    await AsyncStorage.removeItem("token");
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    switchedToAuthStack: switchedToAuthStack,
    switchToLogin: switchToLogin,
    switchToRegistration: switchToRegistration,
    goBackToOnboarding: goBackToOnboarding,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
