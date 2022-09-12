import { useEffect, useRef, useState } from "react";
import { Card, TextInput, withTheme } from "react-native-paper";
import { View, BackHandler, StatusBar } from "react-native";
import PreLoginHeader from "../components/common/PreLoginHeader";
import { Styles } from "../styles/styles";

const LoginScreen = ({ route, navigation, theme }) => {
  const { colors } = theme;
  const [userID, setUserID] = useState("");
  const [userIDError, setUserIDError] = useState(false);
  const userIDRef = useRef();

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const passwordRef = useRef();

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      BackHandler.exitApp();
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <View style={[Styles.flex1, { backgroundColor: colors.background }]}>
      <StatusBar backgroundColor={colors.background} barStyle={route.params.themeMode ? "dark-content" : "light-content"} />
      <PreLoginHeader theme={theme} text="Login to FitMe" />
      <View style={[Styles.container, Styles.flexAlignCenter, Styles.flexJustifyCenter]}>
        <View style={[Styles.padding16, Styles.width100per]}>
          <TextInput ref={userIDRef} mode="flat" label="Mobile No. / Email Id." value={userID} onChangeText={(text) => setUserID(text)} error={userIDError} />
          <TextInput ref={passwordRef} mode="flat" label="Password" secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)} error={passwordError} />
        </View>
      </View>
    </View>
  );
};

export default withTheme(LoginScreen);
