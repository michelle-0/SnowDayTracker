import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Tabs from './src/components/Tabs'
import Counter from './src/demonstration/Counter'


const Tab = createBottomTabNavigator() // initializes tab object for us to use

const App = () => {
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)
  if (loading) {
    return (
    <View style={styles.container}>
    <ActivityIndicator size={'large'} color={'blue'}/>
    </View>
    )
  }

  useEffect{() => {
    (async() => {
      let { status } = await Location.requestForegroundPermissionsAsync
      if (status !== 'granted') {
        setError('permission to access location was denied')
        return 
      }
    })
  }}
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App