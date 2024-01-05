import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useGetWeather } from "./src/hooks/useGetWeather";
import AuthStack from "./src/navigation/AuthStack";
import { Provider } from "react-redux";
import store from "./src/app/store";
import { Amplify, Auth } from "aws-amplify";
import { withAuthenticator, AmplifyTheme } from "aws-amplify-react-native";
import awsExports from "./src/aws-exports";
Amplify.configure({
  Analytics: {
    disabled: true,
  },
});
Amplify.configure(awsExports);
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

const customTheme = {
  ...AmplifyTheme,
  button: {
    ...AmplifyTheme.button,
    backgroundColor: "blue",
    borderRadius: 10,
  },
  sectionFooterLink: {
    ...AmplifyTheme.sectionFooterLink,
    color: "blue",
  },
};
export default withAuthenticator(App, { theme: customTheme });
// TODO: Notify others when they are headed to a mountain, request carpool?
