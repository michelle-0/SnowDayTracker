import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useGetWeather } from "./src/hooks/useGetWeather";
import AuthStack from "./src/navigation/AuthStack";
import { Provider } from "react-redux";
import store from "./src/app/store";
import { Amplify } from "aws-amplify";
import Main from "./src/screens/Main";
import {
  useAuthenticator,
  withAuthenticator,
  useTheme,
  ThemeProvider,
  Authenticator,
} from "@aws-amplify/ui-react-native";
import awsExports from "./src/aws-exports";
import LoginScreen from "./src/screens/Login";
Amplify.configure(awsExports);

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const Tab = createBottomTabNavigator(); // initializes tab object for us to use

const App = () => {
  const [loading, error, weather] = useGetWeather();
  // console.log(loading, error, weather)
  let content = (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={"blue"} />
    </View>
  );

  if (weather && weather.list) {
    content = (
      <NavigationContainer independent={true}>
        <AuthStack />
      </NavigationContainer>
    );
  }

  return <Provider store={store}>{content}</Provider>;
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
});
export default withAuthenticator(App);
