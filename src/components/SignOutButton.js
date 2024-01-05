import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { Auth } from "aws-amplify";

export default function SignOutButton() {
  const signOut = () => {
    Auth.signOut();
  };
  return (
    <TouchableOpacity
      onPress={() => {
        signOut();
      }}
      style={{
        backgroundColor: "#AD40AF",
        padding: 20,
        borderRadius: 10,
        marginBottom: 3,
        width: 110,
        height: 55,
        right: 0,
        bottom: 0,
        position: "absolute",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: 13,
          color: "#fff",
        }}
      >
        Log out
      </Text>
    </TouchableOpacity>
  );
}
