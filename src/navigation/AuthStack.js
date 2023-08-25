import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/Login";
import MainScreen from "../screens/Main"

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{ title: "Login", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
