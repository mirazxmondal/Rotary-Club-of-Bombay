import { Font } from "expo-font";

export const loadFonts = async () => {
  await Font.loadAsync({
    Montserrat: require("../../assets/fonts/Montserrat-Medium.ttf"),
  });
};
