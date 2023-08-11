import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const DB = () => {
    const { container, image } = styles
    const [data, setData] = useState([]);

    useEffect(() => {
        // Define the API URL
        const apiUrl = 'https://p92mbzda54.execute-api.us-west-2.amazonaws.com/beta/all';

        // Make the API call using fetch()
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Handle the successful response
                setData(data.Items);
            })
            .catch(error => {
                // Handle any errors that occurred during the API call
                console.error('Error fetching data:', error);
            });
    }, []);

    // Render each item in the FlatList
    const renderDaysItem = ({ item }) => {
        const days = item.Days?.N;
        const snowy = item.Snowy?.S;
        return (
            <View style={{ padding: 10 }}>
                <Text>{`Mountain: ${snowy}`}</Text>
                <Text>{`Days: ${days}`}</Text>
            </View>
        );
    };

    return (
        <SafeAreaView edges={["top"]} style={container}>
            <View>
                <FlatList
                    data={data}
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
});
export default DB;
