import * as Font from "expo-font";

export default useFonts = async () =>
  await Font.loadAsync({
    "Reemi": require("../../assets/fonts/Reem_Kufi.ttf"),
  });
