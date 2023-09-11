import { useState } from "react";
import { Alert, StyleSheet, View} from "react-native";
import AuthForm from "./AuthForm";

function AuthContent({ isLogin, onAuthenticate, isAuthenticating }) {
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    firstName: false,
    lastName: false,
  });


  function submitHandler(credentials) {
    let { email, firstName, password, lastName } = credentials;

    email = email.trim();
    password = password.trim();
    firstName = firstName.trim();
    lastName = lastName.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const firstNameIsValid = firstName.length > 0;
    const lastNameIsValid = lastName.length > 0;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!firstNameIsValid || !lastNameIsValid))
    ) {
      Alert.alert("Invalid input", "Please check your entered credentials.");
      setCredentialsInvalid({
        email: !emailIsValid,
        firstName: !firstNameIsValid,
        password: !passwordIsValid,
        lastName: !lastNameIsValid,
      });
      return;
    }
    onAuthenticate({ email, password });
  }

  return (
    <View style={styles.authContent}>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        isAuthenticating={isAuthenticating}
        credentialsInvalid={credentialsInvalid}
        setCredentialsInvalid={setCredentialsInvalid}
      />
      
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    marginTop: 2,
  }
});
