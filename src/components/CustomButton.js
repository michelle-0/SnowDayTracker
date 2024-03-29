import { Text, TouchableOpacity } from "react-native";
import React from "react";

export default function CustomButton({ label, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#AD40AF",
        padding: 20,
        borderRadius: 10,
        marginBottom: 3,
        width: 110,
        height: 55,
        right: 0,
        bottom: 0,
        position: "absolute"
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
        {label}
      </Text>
    </TouchableOpacity>
  );
}
