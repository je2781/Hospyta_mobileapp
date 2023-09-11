import {
  StyleSheet,
  ImageBackground,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../contants/Colors";

export default function BackgroundWithGradient({ children, position }) {
  let icon;

  switch (position) {
    case 1:
      icon = require("../../assets/images/png/onboarding1.png");
      break;
    case 2:
      icon = require("../../assets/images/png/onboarding2.png");
      break;
    case 3:
      icon = require("../../assets/images/png/onboarding3.png");
      break;
    default:
      icon = require("../../assets/images/png/onboarding4.png");
      break;
  }

  const { height } = useWindowDimensions();

  let paddingTop = 6;
  let top = null;

  if (height < 400) {
    paddingTop = 0;
    top = -30;
  }

  return (
    <LinearGradient
      locations={[0, 0.5, 1]}
      style={styles.rootScreen}
      colors={[Colors.secondary50, "#000000", "#000000"]}
    >
      <ImageBackground
        source={icon}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImg}
      >
        <View style={[styles.secondaryContainer, { paddingTop: paddingTop }]}>
          <Image
            source={
              position === 4
                ? require("../../assets/images/png/logo_black.png")
                : require("../../assets/images/png/logo.png")
            }
            resizeMode="contain"
            style={[styles.foregroundImg, { top: top }]}
          />
          {children}
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  secondaryContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 28,
    justifyContent: "space-between",
  },
  foregroundImg: {
    width: 180,
    height: 180,
    position: "relative",
    left: -20,
  },
  backgroundImg: {
    opacity: 0.8,
  },
});
