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
  const [isSecure, setIsSecure] = useState(true);
  return (
    <View style={styles.inputContainer}>
      <View
        style={[styles.prefixIconContainer, isInvalid && styles.inputInvalid]}
      >
        <MaterialIcons name={icon} size={19} color={Colors.secondary800} />
      </View>
      <TextInput
        style={[
          styles.input,
          isInvalid && styles.inputInvalid,
          !hasSuffixIcon && {
            borderTopRightRadius: 16,
            borderBottomRightRadius: 16,
          },
        ]}
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
        <View
          style={[styles.suffixIconContainer, isInvalid && styles.inputInvalid]}
        >
          <FontAwesome
            name={suffixIcon}
            size={19}
            color={Colors.secondary800}
            onPress={() => setIsSecure((currentValue) => !currentValue)}
          />
        </View>
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
    paddingVertical: 11,
    paddingRight: 8,
    paddingLeft: 0,
    backgroundColor: "white",
    fontSize: 16,
  },
  inputInvalid: {
    backgroundColor: Colors.error100,
  },
  prefixIconContainer: {
    padding: 15,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  suffixIconContainer: {
    padding: 15,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
});
