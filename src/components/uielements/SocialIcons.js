import { TouchableNativeFeedback } from "react-native";
import { View } from "react-native";
import { SocialIcon } from "react-native-elements";

const SocialIcons = (props) => {
  const { icon, themeMode, iconClick, containerStyle } = props;
  return (
    <View style={[{ ...containerStyle, width: 52, height: 52, overflow: "hidden", borderRadius: 30, elevation: 4 }]}>
      <TouchableNativeFeedback onPress={iconClick ? iconClick : () => {}}>
        <SocialIcon type={icon ? icon : "google"} raised light={themeMode} style={[{ margin: 0 }]} />
      </TouchableNativeFeedback>
    </View>
  );
};

export default SocialIcons;
