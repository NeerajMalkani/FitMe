import { LinearGradient } from "expo-linear-gradient";
import { Styles } from "../../styles/styles";
import { Text } from "react-native-paper";

const PreLoginHeader = ({ theme, text }) => {
  const { colors } = theme;
  return (
    <LinearGradient colors={[colors.primary, colors.primaryDark]} style={[Styles.width100per, Styles.flexJustifyEnd, Styles.paddingBottom16, Styles.paddingStart16, { height: 180, borderBottomRightRadius: 48 }]}>
      <Text variant="headlineLarge" style={[{ color: colors.onPrimary, paddingEnd: 120 }]}>
        {text}
      </Text>
    </LinearGradient>
  );
};

export default PreLoginHeader;
