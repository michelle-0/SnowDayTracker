import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";

const LoginScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
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
            <MaterialIcons
              name="smart-toy"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          keyboardType="Handle"
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
        />

        <CustomButton label={"Submit"} onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 400,
    height: 250,
    marginBottom: 50,
  },
  title: {
    fontSize: 40,
    fontFamily: "ReemKufiFun-SemiBold",
  },
});
export default LoginScreen;
