import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaView, Platform, StatusBar } from "react-native";
import { Styles } from "./src/styles/styles";
import { theme } from "./src/theme/apptheme";
import SplashScreen from "./src/screens/SplashScreen";

export default function App() {
  return (
    <SafeAreaView style={[Styles.flex1, { backgroundColor: theme.colors.backgroundColor, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }]}>
      <PaperProvider theme={theme}>
        <StatusBar backgroundColor={theme.colors.primaryContainer} barStyle="dark-content" />
        <SplashScreen />
      </PaperProvider>
    </SafeAreaView>
  );
}
