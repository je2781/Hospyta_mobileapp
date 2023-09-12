import {
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import TitleBar from "../components/home/TitleBar";
import ScheduleCarousel from "../components/home/ScheduleCarousel";
import Availability from "../components/home/Availability";
import Strings from "../contants/Strings";
import ScheduleAppointment from "../components/home/ScheduleAppoitment";
import CommunityFeed from "../components/home/CommunityFeed";

export default function HomeScreen() {
  const { height } = useWindowDimensions();
  return (
    <View style={styles.rootContainer}>
      <TitleBar
        title={Strings.HHomeScreenTitle}
        subTitle={Strings.HHomeScreenSubtitle}
      />
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ height: height < 380 ? height * 0.57 : height * 0.26}}>
            <ScheduleCarousel style={styles.carousel} />
          </View>
          <Availability />
          <ScheduleAppointment style={styles.scheduleAppointment}/>
          <CommunityFeed style={styles.feed}/>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 18,
  },
  carousel: {
    marginTop: 8,
  },
  scheduleAppointment: {
    marginTop: 16,
    marginHorizontal: 12
  },
  feed: {
    marginTop: 28
  }
});
