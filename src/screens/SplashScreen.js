import { useEffect, useState } from "react";
import { View } from "react-native";
import AnimatedSplash from "react-native-animated-splash-screen";
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';
import * as Animatable from "react-native-animatable";
import { createAnimatableComponent } from "react-native-animatable";
import { theme } from "../theme/apptheme";
import LoginScreen from "./LoginScreen";
import { Styles } from "../styles/styles";

const AnimatableView = createAnimatableComponent(View);

const SplashScreen = () => {
  const [isLoaded, setIsLoaded] = useState(false);
   
  let [fontsLoaded] = useFonts({
    Lobster_400Regular,
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
      <Animatable.Text animation={fadeIn} delay={delay} style={{ fontSize: 56, fontWeight: "400", color: theme.colors.onPrimary, fontFamily: "Lobster_400Regular" }}>
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
        <View style={[Styles.flexAlignCenter]}>
          <AnimatableView animation="bounceIn" delay={100} style={[Styles.width64, Styles.height64, { backgroundColor: "red" }]}></AnimatableView>
          <View style={[Styles.flexRow]}>
            {CreateAnimatedAlphabet("F", 200)}
            {CreateAnimatedAlphabet("I", 500)}
            {CreateAnimatedAlphabet("T", 800)}
            {CreateAnimatedAlphabet(" ", 800)}
            {CreateAnimatedAlphabet("M", 1100)}
            {CreateAnimatedAlphabet("E", 1400)}
          </View>
        </View>
      }
      backgroundColor={theme.colors.primary}
    >
      <LoginScreen />
    </AnimatedSplash>
  );
};

export default SplashScreen;
