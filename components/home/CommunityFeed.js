import {
  View,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import Strings from "../../contants/Strings";
import Colors from "../../contants/Colors";
import { useState } from "react";
import Header from "../Header";

import Button from "../ui/Button";
import { communityImageData, communityItemData } from "../../dummy-data";
import IconButton from "../ui/IconButton";

function CommunityItemTemplate({ icon, text }) {
  return (
    <Button
      paddingVertical={12}
      borderRadius={12}
      paddingHorizontal={12}
      buttonBackgroundColor="#4425f521"
      color={Colors.primary500}
      hasLeftExternalIcon
      leftExternalIcon={icon}
      fontSize={14}
      marginLeft={8}
    >
      {text}
    </Button>
  );
}

function RenderIcon({
  position,
  iconName,
  icon,
  setCurrentIndex,
  currentIndex
}) {
  if (
    (currentIndex === 0 && position === 0) ||
    (currentIndex === 1 && position === 1) ||
    (currentIndex === 2 && position === 2) ||
    (currentIndex === 3 && position === 3) ||
    (currentIndex === 4 && position === 4)
  ) {
    return <CommunityItemTemplate icon={icon} text={iconName} />;
  }
  return (
    <View style={{ justifyContent: "center" }}>
      <IconButton
        externalIcon={icon}
        hasExternalIcon
        size={24}
        onPress={() => setCurrentIndex(position)}
      />
    </View>
  );
}


export default function CommunityFeed({ style }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function renderImage({ item }) {
    return <Image source={item.imageSource} style={{ marginRight: 24 }} />;
  }


  return (
    <View style={style}>
      <Header
        title={Strings.HHomeScreenCommunityText}
        exploreButtonText={Strings.HHomeScreenExploreButtonText}
      />
      <FlatList
        data={communityImageData}
        horizontal
        renderItem={renderImage}
        keyExtractor={(item, index) => index}
      />
      <View style={styles.IconListContainer}>
        {communityItemData.map((item, index) => (
          <RenderIcon
            key={index}
            icon={item.icon}
            position={index}
            iconName={item.iconName}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  IconListContainer: { flexDirection: "row", justifyContent: "space-between", marginTop: 12},
});
