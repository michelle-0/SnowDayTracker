import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";
import ListItem from "../components/ListItem";
import DB from "../components/DB";

const Counter = ({}) => {
  
  const { container, image } = styles;
  return (
    <SafeAreaView edges={["top"]} style={container}>
      <ImageBackground
        source={require("../../assets/snowfall.jpg")}
        style={image}
      >
        <DB />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "pink",
  },
  image: {
    flex: 1,
  },
});
export default Counter;
