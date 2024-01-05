import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  ImageBackground
} from "react-native";
import SignOutButton from "../components/SignOutButton";
import Card from "../components/Card";
import LastCard from "../components/LastCard";
import { useSelector } from "react-redux";
import { Auth } from 'aws-amplify'

const MyDays = ({}) => {
  const [userEmail, setUserEmail] = useState("");
  
  Auth.currentAuthenticatedUser()
    .then((user) => {
      console.log("User's email is:", user.attributes.email);
      setUserEmail(user.attributes.email)
    })
    .catch((error) => {
      console.error("Error getting user's email:", error);
    });

  const userSnowDays = useSelector((state) => state.userSnowDays.value);
  const { container } = styles;
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (userEmail) {
      const apiUrl = `https://b3y4z9h2hb.execute-api.us-west-2.amazonaws.com/snowdays/${userEmail}`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setIsLoading(false);
          console.log("data:" + data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setIsLoading(false);
        });
    }
  }, [userEmail, userSnowDays]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  const renderDaysItem = ({ item, index }) => {
    const { Snowy, Days } = item;

    if (index === data.length - 1) {
      return (
        <>
          <Card title={Snowy} content={`${Days} days`} />
          <View>
            <LastCard />
          </View>
        </>
      );
    }
    return <Card title={Snowy} content={`${Days} days`} />;
  };

  return (
    <SafeAreaView edges={["top"]} style={container}>
      <ImageBackground
        source={require("../../assets/backgroundSnow.jpg")}
        style={styles.image}
      >
        <ScrollView>
          {data === null ? (
            <View>
              <LastCard />
            </View>
          ) : (
            <View>
              <FlatList
                data={[...data]}
                renderItem={renderDaysItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          )}
        </ScrollView>
        <SignOutButton/>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  image: {
    flex: 1,
  }
});
export default MyDays;

// TODO: Fix logic for displaying user's snow days for the first time. 
// If no snow days entered yet, the last card should still be displayed.
// Also there seems to be issues displaying the first mountain after it has been added.  