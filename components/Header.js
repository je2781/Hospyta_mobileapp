import { View, Text, StyleSheet } from "react-native";
import FlatButton from "./ui/FlatButton";

import Colors from "../contants/Colors";

export default function Header({ title, exploreButtonText }) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
      <FlatButton color={Colors.primary200} fontSize={14}>
        {exploreButtonText}
      </FlatButton>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  title: {
    fontFamily: "axiforma-w600",
    fontSize: 16,
    lineHeight: 24,
  },
});
