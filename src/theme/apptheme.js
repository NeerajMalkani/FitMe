import { MD3DarkTheme as DarkTheme } from "react-native-paper";
import { MD3LightTheme as LightTheme } from "react-native-paper";

export const darkTheme = {
  version: 3,
  ...DarkTheme,
  roundness: 2,
  colors: {
    ...DarkTheme.colors,
    primary: "#673ab7",
    primaryDark: "#311b92",
  },
  multicolors: {
    red: "#C41E3A",
    green: "#1FA100",
    yellow: "#db8b2f",
    blue: "#4cb5ff",
    white: "#ffffff",
    black: "#000000",
  },
};

export const lightTheme = {
  version: 3,
  ...LightTheme,
  roundness: 2,
  colors: {
    ...LightTheme.colors,
    primary: "#673ab7",
    primaryDark: "#311b92",
  },
  multicolors: {
    red: "#C41E3A",
    green: "#1FA100",
    yellow: "#db8b2f",
    blue: "#4cb5ff",
    white: "#ffffff",
    black: "#000000",
  },
};
