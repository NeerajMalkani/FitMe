import { LinearGradient } from "expo-linear-gradient";
import { Styles } from "../../styles/styles";
import { Text } from "react-native-paper";

const PreLoginHeader = ({ theme, text }) => {
  const { colors, multicolors } = theme;
  return (
    <LinearGradient colors={[colors.primary, colors.primaryDark]} style={[Styles.width100per, Styles.flexJustifyEnd, Styles.paddingBottom32, Styles.paddingStart24, { height: 140, borderBottomRightRadius: 48 }]}>
      <Text variant="headlineLarge" style={[{ color: multicolors.white, paddingEnd: 120 }]}>
        {text}
      </Text>
    </LinearGradient>
  );
};

export default PreLoginHeader;
