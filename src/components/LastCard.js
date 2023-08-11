import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Button } from 'react-native';

const LastCard = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [mountainName, setMountainName] = useState('');
    const [mountainDays, setMountainDays] = useState('');

    const handleAddMountain = async () => {
        try {
            const response = await fetch("https://p92mbzda54.execute-api.us-west-2.amazonaws.com/beta/all", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    Snowy: mountainName,
                    Days: mountainDays,
                }),
            });

            if (response.ok) {
                alert("Mountain added successfully");
                setModalVisible(false);
            } else {
                console.error("Error response:", response);
                alert("Error adding mountain");
            }
        } catch (error) {
            console.error("An error occurred:", error);
            alert("Error adding mountain");
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
                    <Button title="Add Mountain" onPress={handleAddMountain} />
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
