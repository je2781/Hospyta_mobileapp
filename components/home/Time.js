import { View, Text, StyleSheet } from "react-native";
import { get24Time, getWeekday, getDay } from "../../util/date";
import Colors from '../../contants/Colors';

export default function Time({date, backgroundColor}) {
  const firstEle = getDay(date);
  const secondEle = getWeekday(date);
  const thirdEle = get24Time(date);
  return (
    <View style={[styles.rootContainer, {backgroundColor: backgroundColor}]}>
      <Text style={styles.firstEle}>{firstEle}</Text>
      <Text style={styles.secondEle}>{secondEle}</Text>
      <Text style={styles.thirdEle}>{thirdEle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    paddingHorizontal: 6,
    borderRadius: 15,
    justifyContent: 'center',
    height: '95%'
  },
  firstEle: {
    fontFamily: "gothamPro-w400",
    fontSize: 17.24,
    lineHeight: 17.24,
    color: "white",
    textAlign: "center",
    paddingBottom: 4,
  },
  secondEle: {
    fontFamily: "gothamPro-w400",
    fontSize: 12.93,
    lineHeight: 12.93,
    textAlign: "center",
    color: "white",
    borderBottomColor: "#ffffff70",
    borderBottomWidth: 1,
    paddingTop: 4,
    paddingBottom: 6,
  },
  thirdEle: {
    fontSize: 8,
    fontFamily: "gothamPro-w400",
    textAlign: "center",
    lineHeight: 12.93,
    color: "white",
    paddingHorizontal: 6,
    paddingTop: 6
  },
});
