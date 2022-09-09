import { useEffect } from "react";
import { View, BackHandler } from "react-native";
import { Styles } from "../styles/styles";

const LoginScreen = ({ navigation }) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      BackHandler.exitApp();
    });

    return unsubscribe;
  }, [navigation]);
  return <View style={[Styles.container]}></View>;
};

export default LoginScreen;
