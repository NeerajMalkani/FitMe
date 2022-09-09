import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaView, Platform, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Styles } from "./src/styles/styles";
import { theme } from "./src/theme/apptheme";
import SplashScreen, { navigationRef } from "./src/screens/SplashScreen";
import LoginScreen from "./src/screens/LoginScreen";

const Stack = createStackNavigator();
export default function App() {
  return (
    <SafeAreaView style={[Styles.flex1, { backgroundColor: theme.colors.backgroundColor, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }]}>
      <PaperProvider theme={theme}>
        <StatusBar backgroundColor={theme.colors.primaryContainer} barStyle="dark-content" />
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaView>
  );
}
