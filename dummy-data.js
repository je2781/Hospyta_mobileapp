import { Image } from "react-native";

export const imageData = [
  {
    imageSource: require("./assets/images/png/feed_placeholderImage.png"),
  },
  {
    imageSource: require("./assets/images/png/feed_placeholderImage.png"),
  },
];

export const CommunityItemData = [
  {
    iconName: "Home",
    icon: <Image source={require("./assets/images/png/comm_icon1.png")} />,
    position: 0,
  },
  {
    iconName: "Calender",
    icon: <Image source={require("./assets/images/png/comm_icon2.png")} />,
    position: 1,
  },
  {
    iconName: "Community",
    icon: <Image source={require("./assets/images/png/comm_icon3.png")} />,
    position: 2,
  },
  {
    iconName: "Shop",
    icon: <Image source={require("./assets/images/png/comm_icon4.png")} />,
    position: 3,
  },
  {
    iconName: "Profile",
    icon: <Image source={require("./assets/images/png/comm_icon5.png")} />,
    position: 4,
  },
];
