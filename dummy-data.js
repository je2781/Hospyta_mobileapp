import { Image } from "react-native";

export const communityImageData = [
  {
    imageSource: require("./assets/images/png/feed_placeholderImage.png"),
  },
  {
    imageSource: require("./assets/images/png/feed_placeholderImage.png"),
  },
];

export const communityItemData = [
  {
    iconName: "Home",
    icon: <Image source={require("./assets/images/png/comm_icon1.png")} />,
  },
  {
    iconName: "Calender",
    icon: <Image source={require("./assets/images/png/comm_icon2.png")} />,
  },
  {
    iconName: "Community",
    icon: <Image source={require("./assets/images/png/comm_icon3.png")} />,
  },
  {
    iconName: "Shop",
    icon: <Image source={require("./assets/images/png/comm_icon4.png")} />,
  },
  {
    iconName: "Profile",
    icon: <Image source={require("./assets/images/png/comm_icon5.png")} />,
  },
];

export const shopDevicesImageData = [
  {
    imageSource: require("./assets/images/png/medical_device.png"),
    title: 'Temperature Checker',
    price: '5,000'
  },
  {
    imageSource: require("./assets/images/png/medical_device.png"),
    title: 'Statoscope',
    price: '15,000'
  },
  {
    imageSource: require("./assets/images/png/medical_device.png"),
    title: 'Odometer',
    price: '15,000'
  },
];
