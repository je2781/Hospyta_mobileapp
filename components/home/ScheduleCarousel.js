import { StyleSheet, View, Text, useWindowDimensions } from "react-native";
import Time from "./Time";
import Strings from "../../contants/Strings";
import Colors from "../../contants/Colors";
import MySwiper from "../swiper/Swiper";
import Button from "../ui/Button";

import { MaterialIcons } from "@expo/vector-icons";

export default function ScheduleCarousel({ style }) {
  const { height } = useWindowDimensions();
  const slides = [
    {
      date: new Date(2023, 7, 16, 18, 34),
      patientName: Strings.HHomeScreenCalenderPatientName,
      diagnosis: Strings.HHomeScreenCalenderDiagnosis1,
      backgroundColor: Colors.indigo500,
      timeComponentBackgroundColor: Colors.indigo200,
      shadowBackgroundColor: Colors.indigo50,
    },
    {
      date: new Date(2023, 6, 16, 20, 34),
      patientName: Strings.HHomeScreenCalenderPatientName,
      diagnosis: Strings.HHomeScreenCalenderDiagnosis2,
      backgroundColor: Colors.amber500,
      timeComponentBackgroundColor: Colors.amber200,
      shadowBackgroundColor: Colors.amber50,
    },
  ];
  return (
    <MySwiper
      activeDotColor={Colors.primary50}
      top={175}
    >
      {slides.map((slide, index) => (
        <View key={index} style={style}>
          <View
            style={[
              styles.shadowContainer,
              { backgroundColor: slide.shadowBackgroundColor },
              height < 380 && styles.shadowContainerOnLandscape,
            ]}
          ></View>
          <View
            style={[
              styles.rootContainer,
              { backgroundColor: slide.backgroundColor },
            ]}
          >
            <View style={styles.primaryContainer}>
              <Time
                date={slide.date}
                backgroundColor={slide.timeComponentBackgroundColor}
              />
              <View style={styles.contentContainer}>
                <Text style={styles.title}>
                  {Strings.HHomeScreenCalenderTitle}
                </Text>
                <Text style={styles.patient}>{slide.patientName}</Text>
                <Text style={styles.diagnosis}>{slide.diagnosis}</Text>
              </View>
            </View>
            <View style={styles.scheduledTimeContainer}>
              <View style={{ flexDirection: "row", marginRight: 10 }}>
                <MaterialIcons name="timer" size={16} color="white" />
                <View style={{ justifyContent: "center" }}>
                  <Text style={styles.scheduledTime}>0:01:20</Text>
                </View>
              </View>
              <Button
                hasRightExternalIcon
                buttonBackgroundColor="white"
                borderRadius={12}
                marginRight={12}
                paddingHorizontal={8}
                color={slide.backgroundColor}
                paddingVertical={2}
                rightExternalIcon={
                  <View style={{ justifyContent: "center" }}>
                    <MaterialIcons
                      name="arrow-forward"
                      size={14}
                      color={slide.backgroundColor}
                    />
                  </View>
                }
              >
                View Patient
              </Button>
            </View>
          </View>
        </View>
      ))}
    </MySwiper>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    paddingVertical: 16,
    paddingRight: 10,
    paddingLeft: 16,
    borderRadius: 15,
    height: 140,
    width: "95%",
    position: "absolute",
    marginRight: 15,
  },
  shadowContainer: {
    height: 140,
    borderRadius: 15,
    top: 10,
    left: 24,
    width: "80%",
  },
  shadowContainerOnLandscape: {
    left: 32,
    width: "85%",
  },
  primaryContainer: {
    flexDirection: "row",
  },
  contentContainer: {
    marginLeft: 16,
    justifyContent: "center",
  },
  title: {
    fontFamily: "poppins-w400",
    fontSize: 12.93,
    color: "white",
    lineHeight: 12.93,
    marginBottom: 8,
  },
  patient: {
    fontFamily: "poppins-w600",
    fontSize: 17.24,
    color: "white",
    lineHeight: 17.24,
    marginBottom: 8,
  },
  diagnosis: {
    fontFamily: "poppins-w400",
    fontSize: 12.93,
    color: "#ffffffb2",
    lineHeight: 12.93,
    marginBottom: 8,
  },
  scheduledTimeContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: -15,
  },
  scheduledTime: {
    color: "white",
    fontFamily: "gothamPro-w400",
    fontSize: 11,
    lineHeight: 12.93,
    marginLeft: 4,
  },
});
