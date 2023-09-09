import { View, StyleSheet } from "react-native";
import TitleBar from "../components/home/TitleBar";
import Strings from "../contants/Strings";

export default function HomeScreen() {
  return (
    <View style={styles.rootContainer}>
      <TitleBar
        title={Strings.HHomeScreenTitle}
        subTitle={Strings.HHomeScreenSubtitle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
  },
});
