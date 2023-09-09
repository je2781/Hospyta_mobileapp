import { View, StyleSheet, Text } from "react-native";
import { HStack, Avatar } from "@react-native-material/core";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../contants/Colors";

export default function TitleBar({ title, subTitle }) {
  const navigation = useNavigation();
  return (
    <View style={styles.rootContainer}>
      <HStack spacing={5} style={styles.profileContainer}>
        <Avatar
          image={require("../../assets/images/png/image_placeholder.png")}
          size={56}
        />
        <View style={{marginLeft: 4, justifyContent: 'center'}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </HStack>
      <HStack spacing={10}>
        <Avatar
          icon={(props) => (
            <Ionicons
              name="notifications-outline"
              size={18}
              color={Colors.secondary950}
              {...props}
            />
          )}
          color="white"
          style={{ borderColor: Colors.secondary300, borderWidth: 1 }}
          size={48}
        />
        <Avatar
          icon={(props) => (
            <AntDesign
              name="menufold"
              {...props}
              size={18}
              color={Colors.secondary950}
              onPress={() => navigation.toggleDrawer()}
            />
          )}
          color="white"
          style={{ borderColor: Colors.secondary300, borderWidth: 1 }}
          size={48}

        />
      </HStack>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 32,
  },
  title: {
    fontFamily: 'axiforma-w600',
    fontSize: 18,
    color: Colors.secondary800,
    marginBottom: 2
  },
  subTitle: {
    fontFamily: 'gothamPro-w400',
    fontSize: 10,
    color: Colors.secondary500
  },
  profileContainer: {
    width: 120
  }
});
