import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import UpcomingWeather from './src/screens/UpcomingWeather'
import City from './src/screens/City'

const App = () => {
  return (
    <View style={styles.container}>
      <City/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App