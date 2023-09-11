import { View, StyleSheet } from "react-native";
import TitleBar from "../components/home/TitleBar";
import ScheduleCarousel from "../components/home/ScheduleCarousel";
import Strings from "../contants/Strings";

export default function HomeScreen() {
  return (
    <View style={styles.rootContainer}>
      <TitleBar
        title={Strings.HHomeScreenTitle}
        subTitle={Strings.HHomeScreenSubtitle}
      />
      <ScheduleCarousel style={styles.carousel}/>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 16,
  },
  carousel:{
    marginTop: 8
  }
});
