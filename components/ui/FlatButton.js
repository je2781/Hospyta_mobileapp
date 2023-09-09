import { Pressable, StyleSheet, Text, View } from 'react-native';

function FlatButton({ children, onPress, color, fontSize, justifyContent}) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={[styles.buttonText, {color: color, fontSize: fontSize}]}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default FlatButton;

const styles = StyleSheet.create({
  button: {
    paddingLeft: 6,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'gothamPro-w400'
  },
});
