import { Image, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { IconButton } from "react-native-paper";
import { Styles } from "../styles/styles";
import { theme } from "../theme/apptheme";

const TourScreen = () => {
  const slides = [
    {
      backgroundColor: theme.colors.background,
      image: <Image source={require("../../assets/images/slide1.png")} style={[Styles.width100per, { height: 420, resizeMode: "contain" }]} />,
      title: "Calories",
      subtitle: "Record your everyday calorie intake with over 1000+ dishes. Our experts will help you reach your weight target.",
    },
    {
      backgroundColor: theme.colors.background,
      image: <Image source={require("../../assets/images/slide5.png")} style={[Styles.width100per, { height: 420, resizeMode: "contain" }]} />,
      title: "Recipes",
      subtitle: "We bring you a vast variety of recipes which are healthy and delecious at the same time.",
    },
    {
      backgroundColor: theme.colors.background,
      image: <Image source={require("../../assets/images/slide4.png")} style={[Styles.width100per, { height: 420, resizeMode: "contain" }]} />,
      title: "Sync Your Data",
      subtitle: "Sync and maintain your daily activity data from top apps like Google Fit, Samsung Health and more.",
    },
    {
      backgroundColor: theme.colors.background,
      image: <Image source={require("../../assets/images/slide2.png")} style={[Styles.width100per, { height: 420, resizeMode: "contain" }]} />,
      title: "Let's Begin",
      subtitle: "Join us in our oath to make the world fit where you will enjoy the journey as well as the destination.",
    },
  ];

  const Dots = ({ selected }) => {
    return <View style={{ width: selected ? 16 : 6, height: 6, marginHorizontal: 4, backgroundColor: selected ? theme.colors.primary : theme.colors.secondaryContainer }} />;
  };

  const Done = () => <IconButton icon="check" iconColor={theme.colors.primary} size={28} onPress={() => console.log("Pressed")} />;

  return (
    <View style={[Styles.flex1]}>
      <Onboarding pages={slides} DotComponent={Dots} DoneButtonComponent={Done} containerStyles={{ paddingHorizontal: 12 }} titleStyles={{ fontSize: 40 }} bottomBarHighlight={false} subTitleStyles={{ fontSize: 16, color: theme.colors.onSurfaceDisabled }} />
    </View>
  );
};

export default TourScreen;
