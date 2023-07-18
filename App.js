import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import UpcomingWeather from './src/components/UpcomingWeather';
const App = () => {
  return (
    <View style = {styles.container}>
      <UpcomingWeather />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App