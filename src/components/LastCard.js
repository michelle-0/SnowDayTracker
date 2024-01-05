import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Button
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserSnowDays } from "../features/userSnowDaysSlice";
import { Auth } from "aws-amplify";

const resortsData = require("../../resorts.json");

const LastCard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [mountainName, setMountainName] = useState("");
  const [mountainDays, setMountainDays] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const dispatch = useDispatch();

  const userSnowDays = useSelector((state) => state.userSnowDays.value);

  const items = resortsData.map((resort) => ({
    label: resort.name,
    value: resort.name,
  }));

  useEffect(() => {
    console.log("User Snow Days state:", userSnowDays);
  }, [userSnowDays]);

  const handleMountainChange = (itemValue) => {
    setMountainName(itemValue);
  };

  const handleAddMountain = async () => {
    const requestData = {
      mountain: mountainName,
      days: mountainDays,
      userId: "", // Leave this empty for now
    };

    try {
      const user = await Auth.currentAuthenticatedUser();
      requestData.userId = user.attributes.email; // Set the user's email

      const response = await fetch(
        "https://b3y4z9h2hb.execute-api.us-west-2.amazonaws.com/snowdays",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      const data = await response.json();
      console.log("Response from API:", data);

      const newMountain = {
        mountain: mountainName,
        days: mountainDays,
        userId: requestData.userId,
      };

      dispatch(
        fetchUserSnowDays(requestData.userId, [...userSnowDays, newMountain])
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.plus}> + </Text>
          </View>
        </View>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            onChangeValue={handleMountainChange}
            containerStyle={{ width: "100%" }}
            dropDownContainerStyle={{ width: "80%", alignSelf: "center" }}
            style={{ width: "80%", alignSelf: "center" }}
          />
          <TextInput
            style={styles.input}
            placeholder="Days"
            keyboardType="numeric"
            value={mountainDays}
            onChangeText={(text) => setMountainDays(text)}
          />
          <Button
            title="Add Mountain"
            onPress={() => {
              handleAddMountain();
              setModalVisible(false);
            }}
          />
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  // card: {
  //   alignItems: "center",
  //   justifyContent: "center",
  //   paddingVertical: 24,
  //   paddingHorizontal: 23,
  //   borderRadius: 4,
  //   elevation: 3,
  //   backgroundColor: "white",
  // },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    margin: 8,
  },
  cardContent: {
    justifyContent: "center",
    alignItems: "center",
    minHeight: 100,
  },
  plus: {
    fontSize: 24,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    margin: 10,
    width: "80%",
    borderRadius: 4,
  },
});

export default LastCard;
