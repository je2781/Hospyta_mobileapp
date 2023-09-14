import {
    View,
    FlatList,
    StyleSheet,
    Text,
    Image,
  } from "react-native";
  import Strings from "../../contants/Strings";
  import Header from "../Header";
  
  import { shopDevicesImageData} from "../../dummy-data";
import Colors from "../../contants/Colors";
  
  
  
  export default function ShopForDevices({ style }) {  
    function renderImage({ item }) {
      return <View style={{ marginRight: 24 }}>
            <Image source={item.imageSource} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>N{item.price}</Text>
        </View>;
    }
  
  
    return (
      <View style={style}>
        <Header
          title={Strings.HHomeScreenShopDevicesText}
          exploreButtonText={Strings.HHomeScreenExploreButtonText}
        />
        <FlatList
          data={shopDevicesImageData}
          horizontal
          renderItem={renderImage}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    title: {
        marginTop: 12,
        color: Colors.secondary900,
        fontSize: 10,
        fontFamily: 'gothamPro-w400'
    },
    price: {
        marginVertical: 8,
        fontSize: 12,
        color: Colors.secondary900,
        fontFamily: 'gothamPro-w700'
    }
  });
  