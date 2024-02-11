import { useState, useRef } from "react";
import { StyleSheet, View, Text, ActivityIndicator, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Input from "../ui/Input";
import Colors from "../../contants/Colors";
import IconButton from "../ui/IconButton";
import Button from "../ui/Button";
import FlatButton from "../ui/FlatButton";
import Strings from "../../contants/Strings";

function AuthForm({
  isLogin,
  onSubmit,
  credentialsInvalid,
  isAuthenticating,
  setCredentialsInvalid,
}) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredfirstName, setEnteredfirstName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredlastName, setEnteredlastName] = useState("");
  const [isRead, setIsRead] = useState(false);
  const navigation = useNavigation();
  const lNameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);

  function switchAuthModeHandler() {
    // Todo
    if (isLogin) {
      navigation.replace("Register");
    } else {
      navigation.replace("SignIn");
    }
  }

  function readTermsNConditions() {
    setIsRead(true);
  }

  function updateInputValueHandler(inputType, enteredValue) {
    setCredentialsInvalid({
      email: false,
      firstName: false,
      password: false,
      lastName: false,
    });
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "firstName":
        setEnteredfirstName(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
      case "lastName":
        setEnteredlastName(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      firstName: enteredfirstName,
      password: enteredPassword,
      lastName: enteredlastName,
    });
  }

  return (
    <View>
      {!isLogin && (
        <Input
          onUpdateValue={updateInputValueHandler.bind(this, "firstName")}
          value={enteredfirstName}
          isInvalid={credentialsInvalid.firstName}
          onSubmitEditing={() => lNameRef.current?.focus()}
          blurOnSubmit={false}
          icon="person-outline"
          returnKeyType={"next"}
          placeholder="First name"
          placeholderColor={Colors.secondary800}
        />
      )}
      {!isLogin && (
        <Input
          onUpdateValue={updateInputValueHandler.bind(this, "lastName")}
          value={enteredlastName}
          isInvalid={credentialsInvalid.lastName}
          blurOnSubmit={false}
          onSubmitEditing={() => emailRef.current?.focus()}
          icon="person-outline"
          ref={lNameRef}
          returnKeyType={"next"}
          placeholder="Last name"
          placeholderColor={Colors.secondary800}
        />
      )}
      <Input
        onUpdateValue={updateInputValueHandler.bind(this, "email")}
        value={enteredEmail}
        keyboardType="email-address"
        ref={emailRef}
        blurOnSubmit={false}
        icon="mail-outline"
        isInvalid={credentialsInvalid.email}
        onSubmitEditing={() => passRef.current?.focus()}
        placeholder="example@gmail.com"
        returnKeyType={"next"}
        placeholderColor={Colors.secondary800}
      />

      <Input
        onUpdateValue={updateInputValueHandler.bind(this, "password")}
        secure
        icon="lock-outline"
        hasSuffixIcon
        ref={passRef}
        suffixIcon="eye-slash"
        value={enteredPassword}
        isInvalid={credentialsInvalid.password}
        onSubmitEditing={submitHandler}
        placeholder="*********"
        returnKeyType={"done"}
        placeholderColor={Colors.secondary800}
      />
      {!isLogin && (
        <View
          style={{
            alignItems: "flex-start",
            marginVertical: 4,
            flexDirection: "row",
          }}
        >
          {isRead ? (
            <IconButton
              icon="checkbox"
              size={14}
              color={Colors.indigo500}
              marginTop={0}
            />
          ) : (
            <IconButton icon="checkbox-outline" size={14} marginTop={0} />
          )}
          <Text>
            <View style={styles.buttonPrefixTextContainer}>
              <Text
                style={[
                  styles.buttonPrefixText,
                  { fontSize: 12, color: Colors.secondary400 },
                ]}
              >
                I accept all the
              </Text>
            </View>
            <FlatButton
              color={Colors.secondary800}
              fontSize={12}
              onPress={readTermsNConditions}
            >
              Terms & Conditions
            </FlatButton>
          </Text>
        </View>
      )}
      {isLogin && (
        <View style={{ alignItems: "flex-end", marginBottom: 8, marginTop: 4 }}>
          <FlatButton color={Colors.secondary500} fontSize={14}>
            {Strings.HForgotPassFlatButton}
          </FlatButton>
        </View>
      )}
      <View style={styles.buttons}>
        {isLogin ? (
          <>
            {isAuthenticating ? (
              <ActivityIndicator size="large" color={Colors.primary500} />
            ) : (
              <Button
                buttonBackgroundColor={Colors.primary500}
                onPress={submitHandler}
                color="white"
                fontSize={14}
                paddingHorizontal={12}
                borderRadius={8}
                paddingVertical={10}
                fontWeight='bold'
              >
                Sign In
              </Button>
            )}
            <View style={styles.alternateContainer}>
              <View style={styles.alternateTextTrailing}>
                <View style={styles.alternateTextTrailingLine}></View>
              </View>
              <Text style={styles.alternateText}>Or Sign in with</Text>
              <View style={styles.alternateTextTrailing}>
                <View style={styles.alternateTextTrailingLine}></View>
              </View>
            </View>
            <Button
              marginLeft={16}
              buttonBackgroundColor="white"
              onPress={submitHandler}
              paddingHorizontal={12}
              paddingVertical={10}
              borderRadius={8}
              hasLeftExternalIcon
              leftExternalIcon={
                <Image
                  source={require("../../assets/images/png/google_icon.png")}
                />
              }
              fontSize={16}
              color={Colors.secondary500}
            >
              {Strings.HLoginGoogle}
            </Button>
            <View style={{ marginTop: 62, alignItems: "center" }}>
              <Text>
                <View style={styles.buttonPrefixTextContainer}>
                  <Text style={styles.buttonPrefixText}>
                    Don't have an account?
                  </Text>
                </View>
                <FlatButton
                  onPress={switchAuthModeHandler}
                  color={Colors.primary500}
                  fontSize={16}
                >
                  Register
                </FlatButton>
              </Text>
            </View>
          </>
        ) : (
          <>
            {isAuthenticating ? (
              <ActivityIndicator size="large" color={Colors.primary500} />
            ) : (
              <Button
                buttonBackgroundColor={Colors.primary500}
                onPress={submitHandler}
                color="white"
                fontSize={14}
                paddingHorizontal={12}
                paddingVertical={10}
                borderRadius={8}
                fontWeight='bold'
              >
                Register
              </Button>
            )}
            <View style={styles.alternateContainer}>
              <View style={styles.alternateTextTrailing}>
                <View style={styles.alternateTextTrailingLine}></View>
              </View>
              <Text style={styles.alternateText}>Or Sign up with</Text>
              <View style={styles.alternateTextTrailing}>
                <View style={styles.alternateTextTrailingLine}></View>
              </View>
            </View>
            <Button
              marginLeft={16}
              buttonBackgroundColor="white"
              onPress={submitHandler}
              hasLeftExternalIcon
              leftExternalIcon={
                <Image
                  source={require("../../assets/images/png/google_icon.png")}
                />
              }
              fontSize={16}
              color={Colors.secondary500}
              paddingHorizontal={12}
              paddingVertical={10}
              borderRadius={8}
            >
              {Strings.HRegisterGoogle}
            </Button>
            <View style={{ marginTop: 16, alignItems: "center" }}>
              <Text>
                <View style={styles.buttonPrefixTextContainer}>
                  <Text style={styles.buttonPrefixText}>
                    Already have an account?
                  </Text>
                </View>
                <FlatButton
                  onPress={switchAuthModeHandler}
                  color={Colors.primary500}
                  fontSize={16}
                >
                  Sign In
                </FlatButton>
              </Text>
            </View>
          </>
        )}
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 8,
  },
  buttonPrefixTextContainer: {
    marginTop: -4,
  },
  buttonPrefixText: {
    color: Colors.secondary500,
    fontFamily: "gothamPro-w400",
    fontSize: 16,
    textAlign: "center",
  },
  alternateContainer: {
    flexDirection: "row",
    marginVertical: 18,
    marginHorizontal: 4,
  },
  alternateText: {
    color: Colors.secondary500,
    fontSize: 15,
    fontFamily: "gothamPro-w400",
    marginHorizontal: 7,
  },
  alternateTextTrailing: {
    justifyContent: "center",
    flex: 1,
  },
  alternateTextTrailingLine: {
    borderColor: Colors.secondary200,
    borderWidth: 1,
  },
});
