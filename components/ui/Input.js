import { View, Text, TextInput, StyleSheet } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import Colors from "../../contants/Colors";

function Input({
  keyboardType,
  returnType,
  secure,
  icon,
  suffixIcon,
  onUpdateValue,
  placeholder,
  hasSuffixIcon,
  placeholderColor,
  // submitData,
  value,
  isInvalid,
}) {
  const [isSecure, setIsSecure] = useState(false);
  return (
    <View style={styles.inputContainer}>
      <MaterialIcons
        name={icon}
        size={19}
        color={Colors.secondary800}
        style={styles.icon}
      />
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={keyboardType}
        secureTextEntry={isSecure ? secure : null}
        onChangeText={onUpdateValue}
        value={value}
        returnKeyType={returnType}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        // onSubmitEditing={submitData}
      />
      {hasSuffixIcon && (
        <FontAwesome
          name={suffixIcon}
          size={19}
          color={Colors.secondary800}
          style={styles.icon}
          onPress={() => setIsSecure(currentValue => !currentValue)}
        />
      )}
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 16,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingRight: 8,
    paddingLeft: 0,
    backgroundColor: "white",
    fontSize: 16,
    borderBottomRightRadius: 16,
    borderTopRightRadius: 16,
  },
  inputInvalid: {
    backgroundColor: Colors.indigo500,
  },
  icon: {
    padding: 15,
  },
});
