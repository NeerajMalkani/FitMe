import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import AnimatedSplash from "react-native-animated-splash-screen";
import { useFonts, SpecialElite_400Regular } from "@expo-google-fonts/special-elite";
import * as Animatable from "react-native-animatable";
import { createAnimatableComponent } from "react-native-animatable";
import { theme } from "../theme/apptheme";
import { Styles } from "../styles/styles";
import TourScreen from "./TourScreen";

const AnimatableView = createAnimatableComponent(View);

const SplashScreen = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  let [fontsLoaded] = useFonts({
    SpecialElite_400Regular,
  });
  const fadeIn = {
    from: { opacity: 0 },
    to: { opacity: 1 },
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2400);
  }, [isLoaded]);

  const CreateAnimatedAlphabet = (letter, delay) => {
    return (
      <Animatable.Text animation={fadeIn} delay={delay} style={{ color: theme.colors.primary, fontSize: 56, fontWeight: "400", fontFamily: "SpecialElite_400Regular" }}>
        {letter}
      </Animatable.Text>
    );
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={isLoaded}
      customComponent={
        <View style={[Styles.flexRow, Styles.flexJustifyCenter, Styles.flexAlignCenter, Styles.width100per]}>
          <View style={[Styles.flexRow, Styles.height96, Styles.flexAlignCenter]}>
            {CreateAnimatedAlphabet("F", 200)}
            {CreateAnimatedAlphabet("I", 400)}
            {CreateAnimatedAlphabet("T", 600)}
            {CreateAnimatedAlphabet(" ", 600)}
            {CreateAnimatedAlphabet("M", 800)}
            {CreateAnimatedAlphabet("E", 1000)}
          </View>
          <AnimatableView animation="bounceInLeft" duration={2400} delay={500} style={[Styles.width96, Styles.height96]}>
            <Image source={require("../../assets/logo.png")} style={[Styles.width96, Styles.height96]} />
          </AnimatableView>
        </View>
      }
      backgroundColor={theme.colors.background}
    >
      <TourScreen />
    </AnimatedSplash>
  );
};

export default SplashScreen;
