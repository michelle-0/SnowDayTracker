import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tabs from "../components/Tabs";
import { useGetWeather } from "../hooks/useGetWeather";
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const Tab = createBottomTabNavigator(); // initializes tab object for us to use

const Main = () => {
  const [loading, error, weather] = useGetWeather();
  // console.log(loading, error, weather)

  if (weather && weather.list) {
    return (
      <NavigationContainer independent={true}>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={"blue"} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
});

export default Main;
