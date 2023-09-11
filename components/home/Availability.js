import { View, Switch, StyleSheet, Text } from "react-native";
import { useState } from "react";

import Colors from "../../contants/Colors";
import Strings from "../../contants/Strings";

export default function Availability() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>{Strings.HHomeScreenAvailabilityText}</Text>
      <Switch
        trackColor={{ false: Colors.secondary300, true: Colors.green400 }}
        thumbColor={isEnabled ? Colors.secondary100 : Colors.secondary100}
        ios_backgroundColor={Colors.secondary300}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginHorizontal: 18,
    backgroundColor: "#f3ffefff",
    borderRadius: 18,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    
  },
  text: {
    fontFamily: "gothamPro-w400",
    fontSize: 14,
    lineHeight: 12.93,
    color: Colors.green500
  },
});
