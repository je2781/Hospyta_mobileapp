import {
  View,
  StyleSheet,
  Text,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  useWindowDimensions,
} from "react-native";
import { useState } from "react";
import IconButton from "../../components/ui/IconButton";
import Colors from "../../contants/Colors";
import Strings from "../../contants/Strings";
import AuthContent from "../../components/auth/AuthContent";
import { createUser } from "../../util/auth";

export default function RegistrationScreen({ registerCtx }) {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const { height } = useWindowDimensions();

  async function handleRegistration({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      registerCtx.authenticate(token);
    } catch (err) {
      Alert.alert(
        "Authentication failed!",
        "Could not log you in. Please check your credentials or try again later"
      );
      setIsAuthenticating(false);
    }
  }

  function onPress() {
    registerCtx.goBackToOnboarding();
  }

  return (
    <View style={styles.rootContainer}>
      <View
        style={[
          styles.IconButtonConatiner,
          { marginBottom: height < 380 ? -5 : 48 },
        ]}
      >
        <IconButton
          icon="arrow-back"
          color={Colors.secondary800}
          size={20}
          onPress={onPress}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{Strings.HRegisterTitle}</Text>
        <Text style={styles.subTitle}>{Strings.HAuthSubtitle}</Text>
        <View style={{ flex: 1 }}>
          <ScrollView>
            <KeyboardAvoidingView behavior="padding">
              <AuthContent
                onAuthenticate={handleRegistration}
                isAuthenticating={isAuthenticating}
              />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "space-between",
  },
  IconButtonConatiner: {
    borderColor: Colors.secondary300,
    borderWidth: 1,
    padding: 8,
    width: 50,
    height: 50,
    borderRadius: 8,
    marginVertical: 28,
  },
  title: {
    fontFamily: "axiforma-w600",
    color: Colors.secondary800,
    fontSize: 32,
    textAlign: "center",
    marginVertical: 8,
  },
  subTitle: {
    fontFamily: "gothamPro-w400",
    color: Colors.secondary400,
    fontSize: 16,
    paddingHorizontal: 6,
    marginBottom: 8,
    marginTop: 12,
    textAlign: "center",
    lineHeight: 24,
  },
});
