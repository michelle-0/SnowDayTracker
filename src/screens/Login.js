import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Feather } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";

const LoginScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleSignUp = async () => {
    const userData = {
      username: userName,
      email: userEmail,
      password: userPassword,
    };

    fetch("https://b3y4z9h2hb.execute-api.us-west-2.amazonaws.com/UpdateUsers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from API:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <ScrollView>
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <KeyboardAvoidingView behavior={"position"} style={styles.container}>
          <View style={{ paddingHorizontal: 25 }}>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.title}>SnowDayTracker</Text>
              <Image
                style={styles.logo}
                source={require("../../assets/Logo.png")}
              />
            </View>

            <Text
              style={{
                fontSize: 28,
                fontWeight: "500",
                color: "#333",
                marginBottom: 30,
              }}
            >
              Sign Up
            </Text>

            <InputField
              label={"Username"}
              icon={
                <Feather
                  name="user"
                  size={20}
                  color="#666"
                  style={{ marginRight: 5 }}
                />
              }
              keyboardType="ascii-capable"
              onChangeText={setUserName}
            />

            <InputField
              label={"Email"}
              icon={
                <MaterialIcons
                  name="alternate-email"
                  size={20}
                  color="#666"
                  style={{ marginRight: 5 }}
                />
              }
              keyboardType="email-address"
              onChangeText={setUserEmail}
            />

            <InputField
              label={"Password"}
              icon={
                <Ionicons
                  name="ios-lock-closed-outline"
                  size={20}
                  color="#666"
                  style={{ marginRight: 5 }}
                />
              }
              inputType="password"
              onChangeText={setUserPassword}
            />

            <CustomButton
              label={"Submit"}
              onPress={() => {
                handleSignUp();
                navigation.navigate('Main');
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    width: 400,
    height: 250,
    marginBottom: 50,
  },
  title: {
    fontSize: 40,
  },
});
export default LoginScreen;
