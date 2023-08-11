import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../components/Card';
import ListItem from "../components/ListItem";
import DB from "../components/DB";
import { Button } from 'react-native-web';
import LastCard from '../components/LastCard';
const Counter = ({}) => {const { container, image, button, lastCard } = styles
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
const renderDaysItem = ({ item, index }) => {
    // Check if it's the last item
    const isLastItem = index === data.length;
  
    if (isLastItem) {
      return (
        <View>
        <LastCard
        />

        </View>
      );
    }
  
    const snowy = item.Snowy?.S;
    const days = item.Days?.N;
  
    return (
      <Card
        title={`${snowy}`}
        content={`Days: ${days}`} 
      />
    );
  };

return (
    <SafeAreaView edges={["top"]} style={container}>
        <View>
            <FlatList
                data={[...data, {}]}
                renderItem={renderDaysItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
        <TouchableOpacity style={button}><Text>ADD MOUNTAIN</Text></TouchableOpacity>
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
    flex:1,
    alignItems: 'flex-start',
    color: 'black'
},
});
export default Counter;
