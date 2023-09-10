import OnboardingScreen from "../../screens/Onboarding";
import Strings from "../../contants/Strings";
import Swiper from "react-native-swiper";
import { StyleSheet } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";
import AuthStack from "../auth/AuthStack";

const MySwiper = () => {
    const authCtx = useContext(AuthContext);
  
    if (
      authCtx.switchedToAuthStack.login ||
      authCtx.switchedToAuthStack.registration
    ) {
      return <AuthStack />;
    }
  
    return (
      <Swiper
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        paginationStyle={styles.pagination}
        
      >
        <OnboardingScreen
          position={1}
          content={Strings.HOnboarding1}
          handleSignin={authCtx.switchToLogin}
          handleRegistration={authCtx.switchToRegistration}
        />
        <OnboardingScreen
          position={2}
          content={Strings.HOnboarding2}
          handleSignin={authCtx.switchToLogin}
          handleRegistration={authCtx.switchToRegistration}
        />
        <OnboardingScreen
          position={3}
          content={Strings.HOnboarding3}
          handleSignin={authCtx.switchToLogin}
          handleRegistration={authCtx.switchToRegistration}
        />
        <OnboardingScreen
          position={4}
          content={Strings.HOnboarding4}
          handleSignin={authCtx.switchToLogin}
          handleRegistration={authCtx.switchToRegistration}
        />
      </Swiper>
    );
  }

  export default MySwiper;

  const styles = StyleSheet.create({
    dot: {
        backgroundColor: "gray",
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3,
      },
      activeDot: {
        backgroundColor: "blue",
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3,
      },
      pagination: {
        position: "relative",
        bottom: 20, // Adjust the position as needed
      },
  });