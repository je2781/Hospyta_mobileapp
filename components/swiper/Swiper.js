import Swiper from "react-native-swiper";
import { StyleSheet, View} from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";
import AuthStack from "../auth/AuthStack";

const MySwiper = ({ children, isAuth, activeDotColor, bottom, top}) => {

  if (isAuth) {
    const authCtx = useContext(AuthContext);

    if (
      authCtx.switchedToAuthStack.login ||
      authCtx.switchedToAuthStack.registration
    ) {
      return <AuthStack />;
    }
  }

  return (

    <Swiper
      dotStyle={styles.dot}
      activeDotStyle={[styles.activeDot, {backgroundColor: activeDotColor}]}
      paginationStyle={[styles.pagination, {bottom: bottom, top: top}]}
    >
      {children}
    </Swiper>
  );
}

export default MySwiper;

const styles = StyleSheet.create({
  dot: {
    backgroundColor: '#cccccc',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  pagination: {
    position: "absolute",
  },
});
