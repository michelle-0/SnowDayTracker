import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Button } from 'react-native';

const LastCard = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [mountainName, setMountainName] = useState('');
    const [mountainDays, setMountainDays] = useState('');
    const userEmail = "mo@gmail.com";
    // const [userEmail, setUserEmail] = useState('');

    const handleAddMountain = async () => {
        const requestData = {
            mountain: mountainName,
            days: mountainDays,
            userId: userEmail
          };
          
          fetch("https://b3y4z9h2hb.execute-api.us-west-2.amazonaws.com/snowdays", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              // Add any other headers you might need
            },
            body: JSON.stringify(requestData)
          })
            .then(response => response.json())
            .then(data => {
              console.log("Response from API:", data);
              // Do something with the response data
            })
            .catch(error => {
              console.error("Error:", error);
              // Handle the error
            });
        }
    
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
                    <TextInput
                        style={styles.input}
                        placeholder="Mountain Name"
                        value={mountainName}
                        onChangeText={text => setMountainName(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Days"
                        keyboardType="numeric"
                        value={mountainDays}
                        onChangeText={text => setMountainDays(text)}
                    />
                    {/* <TextInput
                        style={styles.input}
                        keyboardType='email-address'
                        placeholder="Email"
                        value={userEmail}
                        onChangeText={text => setUserEmail(text)}
                    /> */}
                    <Button title="Add Mountain" onPress={() => { handleAddMountain(); setModalVisible(false); }} />
                    <Button title="Cancel" onPress={() => setModalVisible(false)} />
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 4,
        margin: 8,
        overflow: 'hidden',
    },
    cardContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 100,
    },
    plus: {
        fontSize: 24,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        margin: 10,
        width: '80%',
        borderRadius: 4,
    },
});

export default LastCard;
