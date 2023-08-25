import React from 'react'
import { View, ActivityIndicator, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Tabs from './src/components/Tabs'
import { useGetWeather } from './src/hooks/useGetWeather'
import LoginScreen from './src/screens/Login'

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const Tab = createBottomTabNavigator() // initializes tab object for us to use

const App = () => {
  const [loading, error, weather] = useGetWeather()
  // console.log(loading, error, weather)

  if (weather && weather.list){
    return (
      <NavigationContainer>
        <LoginScreen />
        {/* <Tabs weather={weather} /> */}
      </NavigationContainer> 
    )
  }
 
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'blue'}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App