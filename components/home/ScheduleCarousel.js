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
    },
    {
      date: new Date(2023, 6, 16, 20, 34),
      patientName: Strings.HHomeScreenCalenderPatientName,
      diagnosis: Strings.HHomeScreenCalenderDiagnosis2,
    },
  ];
  return (
    <MySwiper activeDotColor={Colors.primary50} bottom={height < 380 ? 35 : 410}>
      {slides.map((slide, index) => (
        <View style={[styles.rootContainer, style]} key={index}>
          <View style={styles.primaryContainer}>
            <Time date={slide.date} />
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
              color={Colors.indigo500}
              paddingVertical={2}
              externalIcon={
                <View style={{ justifyContent: "center" }}>
                  <MaterialIcons
                    name="arrow-forward"
                    size={14}
                    color={Colors.indigo500}
                  />
                </View>
              }
            >
              View Patient
            </Button>
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
    backgroundColor: Colors.indigo500,
    borderRadius: 15,
    height: 140,
    marginRight: 15,
  },
  primaryContainer: {
    flexDirection: 'row'
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
