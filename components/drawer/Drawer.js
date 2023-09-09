import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, StyleSheet, Text, TouchableOpacity, } from "react-native";
import { useContext } from "react";
import {
  MaterialIcons,
  Ionicons,
  SimpleLineIcons,
  Feather,
} from "@expo/vector-icons";
import { HStack, Avatar } from "@react-native-material/core";

import WalletScreen from "../../screens/Wallet";
import TrackOrderScreen from "../../screens/TrackOrder";
import PostsScreen from "../../screens/Posts";
import SettingsScreen from "../../screens/Settings";
import LiveSupportScreen from "../../screens/Support";
import SuggestFeaturesScreen from "../../screens/SuggestFeatures";
import Colors from "../../contants/Colors";
import { AuthContext } from "../../store/auth-context";
import HomeScreen from "../../screens/Home";
import IconButton from "../ui/IconButton";
import Strings from "../../contants/Strings";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const authCtx = useContext(AuthContext);

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        sceneContainerStyle: {
          backgroundColor: "#ffffff",
        },
        drawerActiveTintColor: Colors.secondary900,
        drawerActiveBackgroundColor: Colors.secondary100,
        drawerContentStyle: {
          backgroundColor: Colors.secondary100,
          padding: 0,
        },
        drawerInactiveTintColor: Colors.secondary900,
      }}
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1 }}>
            <DrawerContentScrollView
              {...props}
              contentContainerStyle={{
                paddingTop: 0,
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  padding: 20,
                  backgroundColor: Colors.primary500,
                  borderBottomWidth: 1,
                  marginBottom: 20,
                  borderColor: Colors.primary500,
                }}
              >
                <View style={{ alignItems: "flex-end" }}>
                  <IconButton
                    icon="md-close-sharp"
                    size={24}
                    onPress={() => props.navigation.toggleDrawer()}
                    color="white"
                  />
                </View>
                <HStack spacing={5} style={styles.profileContainer}>
                  <Avatar
                    image={require("../../assets/images/png/image_placeholder.png")}
                    size={56}
                  />
                  <View style={{ marginLeft: 4, justifyContent: "center" }}>
                    <Text style={styles.title}>{Strings.HHomeScreenTitle}</Text>
                    <Text style={styles.subTitle}>
                      {Strings.HHomeScreenSubtitle}
                    </Text>
                  </View>
                </HStack>
              </View>
              <DrawerItemList {...props} />
              <TouchableOpacity
                onPress={() => {
                  authCtx.logout();
                }}
                style={({ pressed }) =>
                  pressed && { backgroundColor: Colors.secondary200 }
                }
              >
                <View style={{ flexDirection: "row", marginVertical: 16 }}>
                  <SimpleLineIcons
                    name={"logout"}
                    size={24}
                    color={Colors.secondary900}
                    style={{ marginLeft: 16, marginRight: 32 }}
                  />
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 16,
                      color: Colors.secondary900,
                    }}
                  >
                    Log-out
                  </Text>
                </View>
              </TouchableOpacity>
            </DrawerContentScrollView>
          </View>
        );
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerLabel: "Home",
          drawerIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          drawerLabel: "Wallet",
          drawerIcon: ({ color }) => (
            <Ionicons name="wallet" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="TrackOrder"
        component={TrackOrderScreen}
        options={{
          drawerLabel: "Track Order",
          drawerIcon: ({ color }) => (
            <MaterialIcons name="place" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          drawerLabel: "My posts",
          drawerIcon: ({ color }) => (
            <MaterialIcons name="post-add" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerLabel: "Settings",
          drawerIcon: ({ color }) => (
            <Feather name="settings" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="LiveSupport"
        component={LiveSupportScreen}
        options={{
          drawerLabel: "Live support",
          drawerIcon: ({ color }) => (
            <MaterialIcons name="support-agent" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="SuggestFeatures"
        component={SuggestFeaturesScreen}
        options={{
          drawerLabel: "Suggest features",
          drawerIcon: ({ color }) => (
            <Feather name="settings" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "axiforma-w600",
    fontSize: 18,
    color: "white",
    marginBottom: 2,
  },
  subTitle: {
    fontFamily: "gothamPro-w400",
    fontSize: 10,
    color: "#ffffffd5",
  },
  profileContainer: {
    width: 150,
  },
});
