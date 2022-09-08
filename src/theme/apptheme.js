import { DefaultTheme } from "react-native-paper";
export const theme = {
  version: 3,
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#45916b",  
  },
  multicolors: {
    red: "#C41E3A",
    green: "#1FA100",
    yellow: "#db8b2f",
    blue: "#4cb5ff",
    white: "#ffffff",
    black: "#000000"
  },
};
