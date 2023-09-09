import { Pressable, StyleSheet, Text, View, Image } from "react-native";

function Button({
  children,
  onPress,
  color,
  fontSize,
  isTransparent,
  buttonBackgroundColor,
  hasExternalIcon,
  marginLeft,
}) {
  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: buttonBackgroundColor,
            borderColor: buttonBackgroundColor,
          },
          pressed && styles.pressed,
          isTransparent && styles.buttonTransparent,
        ]}
        onPress={onPress}
      >
        <View style={styles.iconContainer}>
          {hasExternalIcon && (
            <Image
              source={require("../../assets/images/png/google_icon.png")}
            />
          )}
          <Text style={[styles.buttonText, { marginLeft: marginLeft, color: color, fontSize: fontSize }]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    // elevation: 2,
    marginVertical: 8,
    borderWidth: 2,
    marginHorizontal: 4,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  buttonTransparent: {
    borderColor: "white",
    borderWidth: 2,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "gothamPro-w400",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: 'center'
  },
});
