import { Text, View, FlatList, StyleSheet, Image, useWindowDimensions } from "react-native";
import FlatButton from "../ui/FlatButton";
import Strings from "../../contants/Strings";
import Colors from "../../contants/Colors";
import { useState } from "react";


export default function CommunityFeed({ style }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {width} = useWindowDimensions();

  const slides = [
    {
      imageSource: require("../../assets/images/png/feed_placeholderImage.png"),
    },
    {
      imageSource: require("../../assets/images/png/feed_placeholderImage.png"),
    },
  ];

  function renderSlide({ item }) {
    return <Image source={item.imageSource} style={{ marginRight: 24 }} />;
  }

  const updateIndex = (e) => {
    const contentOffset = e.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffset / width);
    setCurrentIndex(newIndex);
  };

  return (
    <View style={style}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{Strings.HHomeScreenCommunityText}</Text>
        <FlatButton color={Colors.primary200} fontSize={14}>
          {Strings.HHomeScreenCommunityExploreButtonText}
        </FlatButton>
      </View>
        <FlatList
          data={slides}
          horizontal
          contentContainerStyle={{justifyContent: 'stretch' }}
          style={{width: "100%" }} 
          showsHorizontalScrollIndicator
          pagingEnabled
          onMomentumScrollEnd={updateIndex}
          renderItem={renderSlide}
          keyExtractor={(item, index) => index}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  title: {
    fontFamily: "axiforma-w600",
    fontSize: 16,
    lineHeight: 24,
  },
});
