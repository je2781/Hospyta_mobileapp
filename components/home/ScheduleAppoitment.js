import Button from "../ui/Button";
import Strings from "../../contants/Strings";
import Colors from "../../contants/Colors";
import { View } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

export default function ScheduleAppointment({ style }) {
  return (
    <View style={style}>
      <Button
        hasLeftExternalIcon
        hasRightExternalIcon
        marginLeft={12}
        marginRight={12}
        borderRadius={13}
        paddingHorizontal={14}
        paddingVertical={16}
        fontSize={12}
        buttonBackgroundColor="#97979717"
        rightExternalIcon={
          <MaterialIcons name="arrow-forward" size={24} color="black" />
        }
        leftExternalIcon={
          <Ionicons name="calendar-sharp" size={24} color="black" />
        }
      >
        {Strings.HHomeScreenAppointmentText}
      </Button>
    </View>
  );
}
