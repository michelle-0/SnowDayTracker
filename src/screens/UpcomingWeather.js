import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList, StatusBar, ImageBackground } from 'react-native'
import { Feather } from '@expo/vector-icons'
import ListItem from '../components/ListItem'
const DATA = [
    {
        dt_txt: "2023-07-18 13:10:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Clear'
            },
        ]
    },
    {
        dt_txt: "2023-07-18 16:00:00",
        main: {
            temp_max: 7.55,
            temp_min: 5.55
        },
        weather: [
            {
                main: 'Clouds'
            }
        ]
    },
    {
        dt_txt: "2023-07-18 18:00:00",
        main: {
            temp_max: 9.55,
            temp_min: 5.55
        },
        weather: [
            {
                main: 'Rain'
            }
        ]
    }
]

const UpcomingWeather = () => {
    const renderItem = ({ item }) => (
        <ListItem 
        condition={item.weather[0].main} 
        dt_txt={item.dt_txt} 
        min={item.main.temp_min} 
        max={item.main.temp_max} 
        />
    )
    const { container, image } = styles
    return (
        <SafeAreaView edges={["top"]}  style={container}>
            <ImageBackground 
            source={require('../../assets/backgroundSnow.jpg')} 
            style={image}
            >
            <Text>Upcoming Weather</Text>
            <FlatList
                data={DATA}
                renderItem={ renderItem }
                keyExtractor={(item) => item.dt_txt}
            />
            </ImageBackground>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'pink'
    },
    image: {
        flex: 1
    }
})
export default UpcomingWeather