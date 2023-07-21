import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';
const CurrentWeather = () => {
  const { 
    wrapper, 
    container, 
    temp, 
    feels, 
    highLowWrapper, 
    highLow, 
    bodyWrapper, 
    description, 
    message 
  } = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText 
        messageOne={'High: 8 '} 
        messageTwo={'Low: 6'} 
        containerStyles={highLowWrapper} 
        messageOneStyles={highLow} 
        messageTwoStyles={highLow} 
        />
        </View>
        <RowText
        messageOne={'It\'s sunny'} 
        messageTwo={weatherType['Thunderstorm'].message} 
        containerStyles={bodyWrapper} 
        messageOneStyles={description} 
        messageTwoStyles={message}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description:{
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})
export default CurrentWeather 