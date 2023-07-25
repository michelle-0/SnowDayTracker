import React from 'react'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'
import CurrentWeather from '../screens/CurrentWeather'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator() // initializes tab object for us to use

const Tabs = ({weather}) => {
    return (
<Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
            backgroundColor: 'lightblue'
        },
        headerStyle: {
            backgroundColor: 'lightblue'
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
            color: 'navy'
        }
      }}>
        <Tab.Screen name={'Current'} 
        options={{tabBarIcon: ({ focused }) => (
        <Feather 
          name={'droplet'} 
          size = {25} 
          color={focused ? 'navy' : 'black'}
          />
          )
        }}
        >
          {() => <CurrentWeather weatherData={weather.list[0]}/>}
        </Tab.Screen>
        <Tab.Screen name={'Upcoming'}
        options={{tabBarIcon: ({focused}) => (
          <Feather 
          name={'clock'}
          size={25}
          color={focused? 'navy' : 'black'}
          />
        )
        }}
        >
          {() => <UpcomingWeather weatherData={weather.list}/>}
      </Tab.Screen>
        <Tab.Screen name={'City'} options={{
          tabBarIcon: ({ focused }) => (
            <Feather 
            name={'home'} 
            size={25} 
              color={focused ? 'navy' : 'black'}
            />
          )
        }}>
          {()=><City weatherData={weather.city}/>}
          </Tab.Screen>
      </Tab.Navigator>
    )
}

export default Tabs