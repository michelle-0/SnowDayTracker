import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';


const DB = () => {
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
          <Text>{`Days: ${days}`}</Text>
          <Text>{`Mountain: ${snowy}`}</Text>
        </View>
      );
    };
  
    return (
      <View>
        <FlatList
          data={data}
          renderItem={renderDaysItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };
  
  export default DB;
  