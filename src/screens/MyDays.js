import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../components/Card";
import LastCard from "../components/LastCard";
const MyDays = ({}) => {
  const { container, image, button, lastCard } = styles;
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl =
      "https://b3y4z9h2hb.execute-api.us-west-2.amazonaws.com/snowdays/mo@gmail.com";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const renderDaysItem = ({ item, index }) => {
    const isLastItem = index === data.length;
    const { Snowy, Days } = item;

    if (isLastItem) {
      return (
        <View>
          <LastCard />
        </View>
      );
    }

    // return <Card title={Snowy} content={`Days: ${Days}`} />;
  };

  return (
    <SafeAreaView style={container}>
      <View>
        <FlatList
          data={[...data, {}]}
          renderItem={renderDaysItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
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
  button: {
    flex: 1,
    alignItems: "flex-start",
    color: "black",
  },
});
export default MyDays;
