import { useEffect, useRef, useState } from "react";
import { Button, Text, TextInput, withTheme } from "react-native-paper";
import { View, BackHandler, StatusBar, TouchableWithoutFeedback, Keyboard } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import PreLoginHeader from "../components/common/PreLoginHeader";
import { Styles } from "../styles/styles";
import CustomTextBox from "../components/uielements/TextBox";
import SocialIcons from "../components/uielements/SocialIcons";

const LoginScreen = ({ route, navigation, theme }) => {
  const { colors } = theme;
  const [userID, setUserID] = useState("");
  const [userIDError, setUserIDError] = useState(false);
  const userIDRef = useRef();

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const passwordRef = useRef();

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      BackHandler.exitApp();
    });
    return unsubscribe;
  }, [navigation]);

  const onUserIDChanged = (text) => {
    setUserID(text);
  };

  const onPasswordChanged = (text) => {
    setPassword(text);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={[Styles.flex1, { backgroundColor: colors.background }]}>
        <StatusBar backgroundColor={colors.background} barStyle={route.params.themeMode ? "dark-content" : "light-content"} />
        <PreLoginHeader theme={theme} text="Login to FitMe" />
        <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }}>
          <View style={[Styles.flex1, Styles.flexColumn, { justifyContent: "space-between" }]}>
            <View style={[Styles.flex1, Styles.padding16, Styles.width100per]}>
              <CustomTextBox props={{ tbRef: userIDRef, tbValue: userID, tbLabel: "Mobile No. / Email Id.", tbOnChange: onUserIDChanged, tbNextRef: passwordRef, tbError: userIDError, tbReturnKey: "next", tbKeyboardType: "name-phone-pad" }} />
              <CustomTextBox
                props={{
                  tbRef: passwordRef,
                  tbSecureText: secureTextEntry,
                  tbValue: password,
                  tbLabel: "Password",
                  tbOnChange: onPasswordChanged,
                  tbSecureText: true,
                  tbError: passwordError,
                  tbReturnKey: "done",
                  tbStyle: { marginTop: 32 },
                  tbRight: <TextInput.Icon name="eye" color={colors.onBackground} size={24} onPress={() => setSecureTextEntry(!secureTextEntry)} />,
                }}
              />
              <Button mode="contained" style={[Styles.marginTop32]} onPress={() => console.log("Pressed")}>
                LOG IN
              </Button>
              <Button mode="text" style={[Styles.marginTop32, Styles.flexAlignEnd]} textColor={colors.onBackground} onPress={() => console.log("Pressed")}>
                Forgot Password?
              </Button>
              <View style={[Styles.flex1, Styles.padding16, Styles.width100per, Styles.flexAlignCenter, Styles.marginTop32]}>
                <Text variant="labelLarge" style={{ color: colors.onBackground }}>
                  Connect with your social account
                </Text>
                <View style={[Styles.flexRow, Styles.marginTop16]}>
                  <SocialIcons icon="facebook" themeMode={route.params.themeMode} iconClick={() => {}} />
                  <SocialIcons icon="google" containerStyle={{ marginLeft: 16 }} themeMode={route.params.themeMode} iconClick={() => {}} />
                </View>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default withTheme(LoginScreen);
