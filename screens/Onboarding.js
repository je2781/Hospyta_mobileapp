import {
  View,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
} from "react-native";
import Colors from "../contants/Colors";
import Button from "../components/ui/Button";
import BackgroundWithGradient from "../components/onboarding/BackgroundWithGradient";

export default function OnboardingScreen({
  content,
  position,
  handleSignin,
  handleRegistration,
}) {
  const { width, height } = useWindowDimensions();

  return (
    <BackgroundWithGradient position={position}>
      <View style={height < 380 ? styles.secondaryContainer : null}>
        <View
          style={{ marginBottom: height > 380 ? 48 : 18 }}
        >
          <Text style={styles.mainContent}>{content}</Text>
          <Text style={styles.secondaryContent}>With Hospyta</Text>
        </View>
        <View style={height < 380 ? styles.buttonsContainerInLandscape : null}>
          <View style={{ flex: height < 380 ? 1 : null }}>
            <Button
              buttonBackgroundColor={Colors.primary500}
              onPress={handleSignin}
              color="white"
              fontSize={14}
            >
              Sign In
            </Button>
          </View>
          <View style={{ flex: height < 380 ? 1 : null }}>
            <Button
              isTransparent={true}
              buttonBackgroundColor="transparent"
              onPress={handleRegistration}
              color="white"
              fontSize={14}
            >
              Sign Up
            </Button>
          </View>
        </View>
      </View>
    </BackgroundWithGradient>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    fontFamily: "poppins-w500",
    fontSize: 28,
    color: "white",
  },
  secondaryContent: {
    fontFamily: "gothamPro-w400",
    fontSize: 16,
    color: Colors.red500,
  },
  buttonsContainerInLandscape: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  secondaryContainer: {
    marginTop: -68,
  },
});
