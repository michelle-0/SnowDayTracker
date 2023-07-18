import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList, View, StatusBar, ImageBackground } from 'react-native'
import { Feather } from '@expo/vector-icons'
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
const Item = (props) => {
    const { dt_txt, min, max, condition } = props
    return (
        <View style={styles.item}>
            <Feather name={'sun'} size={50} color={'white'} />
            <Text>{dt_txt}</Text>
            <Text style={styles.temp}>{min}</Text>
            <Text style={styles.temp}>{max}</Text>
        </View>
    ) 
}
const UpcomingWeather = () => {
    const renderItem = ({ item }) => (
        <Item 
        condition={item.weather[0].main} 
        dt_txt={item.dt_txt} 
        min={item.main.temp_min} 
        max={item.main.temp_max} 
        />
    )
    return (
        <SafeAreaView edges={["top"]}  style={styles.container}>
            <ImageBackground 
            source={require('../../assets/backgroundSnow.jpg')} 
            style={styles.image}
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
    item:{
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'pink'
    },
    temp: {
        color: 'white',
        fontSize: 20
    },
    date:{
        color: 'white',
        fontSize: 15
    },
    image: {
        flex: 1
    }
})
export default UpcomingWeather