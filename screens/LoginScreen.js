import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Alert,
  useWindowDimensions,
} from "react-native";
import { useState } from "react";
import { verifyUser } from "../util/auth";
import IconButton from "../components/ui/IconButton";
import Colors from "../contants/Colors";
import Strings from "../contants/Strings";
import AuthContent from "../components/auth/AuthContent";

export default function LoginScreen({ loginCtx }) {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  
  const { height } = useWindowDimensions();

  async function handleLogin({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await verifyUser(email, password);
      loginCtx.authenticate(token);
    } catch (err) {
      Alert.alert(
        "Authentication failed!",
        "Could not log you in. Please check your credentials or try again later"
      );
      setIsAuthenticating(false);
    }
  }

  function onPress() {
    loginCtx.goBackToOnboarding();
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
      <View style={{flex: 1}}>
        <Text style={styles.title}>{Strings.HLoginTitle}</Text>
        <Text style={styles.subTitle}>{Strings.HAuthSubtitle}</Text>
        <View style={{flex: 1}}>
          <ScrollView>
            <AuthContent
              isLogin={true}
              onAuthenticate={handleLogin}
              isAuthenticating={isAuthenticating}
            />
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
    marginTop: 28,
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
    marginBottom: 8,
    paddingHorizontal: 6,
    marginTop: 12,
    textAlign: "center",
    lineHeight: 24,
  },
});
