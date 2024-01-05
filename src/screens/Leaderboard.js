import React, { useEffect, useState } from "react";
import {
  Button,
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Auth } from "aws-amplify";
import { useSelector } from "react-redux";

const Leaderboard = () => {
  const userSnowDays = useSelector((state) => state.userSnowDays.value);
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const apiUrl =
      "https://b3y4z9h2hb.execute-api.us-west-2.amazonaws.com/getAllSnowDays";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const processedData = Object.entries(data).map(
          ([email, tripsArray]) => {
            console.log("Email:", email);
            console.log("Trips Array:", tripsArray);

            const mountainData = {}; // Store mountain data for each user
            let totalDays = 0;

            tripsArray.forEach((trip) => {
              console.log("Trip:", trip);

              const mountainName = trip.Snowy || "Unknown Mountain";
              const days = parseInt(trip.Days) || 0;

              mountainData[mountainName] =
                (mountainData[mountainName] || 0) + days;
              totalDays += days;
            });

            return { email, mountainData, totalDays };
          }
        );

        processedData.sort((a, b) => b.totalDays - a.totalDays);

        console.log("Processed Data:", processedData);

        setLeaderboardData(processedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [userSnowDays]);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.email}>{item.email}</Text>
        <View style={styles.mountainContainer}>
          {Object.keys(item.mountainData).map((mountain, index) => (
            <View
              key={index}
              style={[styles.mountainData, styles.mountainDataSpacing]}
            >
              <Text style={styles.mountainName}>{mountain}</Text>
              <Text style={styles.mountainDays}>
                {item.mountainData[mountain]} {`days`}
              </Text>
            </View>
          ))}
        </View>
        <Text style={styles.totalDays}>{item.totalDays} days</Text>
      </View>
    );
  };

  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{`Email\t`}</Text>
          <Text style={styles.headerText}>Days per Mountain</Text>
          <Text style={styles.headerText}>Total Days</Text>
        </View>
        <FlatList
          data={leaderboardData}
          renderItem={renderItem}
          keyExtractor={(item) => item.email}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  mountainContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  mountainData: {
    alignItems: "center",
    justifyContent: "space-between",
  },

  mountainDataSpacing: {
    marginRight: 30,
  },

  mountainName: {
    fontSize: 16,
    color: "#888",
  },

  mountainDays: {
    fontSize: 14,
    color: "#444",
  },
  email: {
    fontSize: 16,
    minWidth: 205,
  },
  mountainColumn: {
    fontSize: 16,
    color: "#888",
  },
  totalDays: {
    fontSize: 16,
    fontWeight: "bold",
  },
  mountainHeadersContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTextSpacing: {
    marginRight: 20,
    marginLeft: 20,
  },
});

export default Leaderboard;
// TODO: Fix spacing between moutains. Probs shouldn't use in-between
