import { Card, withTheme } from "react-native-paper";
import { StatusBar, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Styles } from "../styles/styles";
import PreLoginHeader from "../components/common/PreLoginHeader";

const GeneralInformationScreen = ({ route, navigation, theme }) => {
  const { colors } = theme;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={[Styles.flex1, { backgroundColor: colors.background }]}>
        <StatusBar backgroundColor={colors.background} barStyle={route.params.themeMode ? "dark-content" : "light-content"} />
        <PreLoginHeader theme={theme} text="Gender" />
        <View style={[Styles.flex1, Styles.flexRow]}>
          <Card>
            <Card.Cover source={require("../../assets/images/man.png")} />
          </Card>
          <Card>
            <Card.Cover source={require("../../assets/images/women.png")} />
          </Card>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default withTheme(GeneralInformationScreen);
