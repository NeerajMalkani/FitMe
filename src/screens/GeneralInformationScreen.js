import { withTheme } from "react-native-paper";
import { StatusBar, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Styles } from "../styles/styles";
import PreLoginHeader from "../components/common/PreLoginHeader";

const GeneralInformationScreen = ({ route, navigation, theme }) => {
  const { colors } = theme;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={[Styles.flex1, { backgroundColor: colors.background }]}>
        <StatusBar backgroundColor={colors.background} barStyle={route.params.themeMode ? "dark-content" : "light-content"} />
        <PreLoginHeader theme={theme} text="Enter Your Weight" />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default withTheme(GeneralInformationScreen);
