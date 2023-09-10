import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../../store/auth-context";
import { useContext } from "react";

import LoginScreen from '../../screens/LoginScreen';
import RegistrationScreen from '../../screens/RegistrationScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
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