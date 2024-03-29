import React from 'react'
import { SafeAreaView, Text, ImageBackground, StyleSheet, StatusBar, View } from 'react-native'
import {Feather} from '@expo/vector-icons'
import IconText from '../components/IconText'
import moment from 'moment'
const City = ({weatherData}) => {
    const { 
        container, 
        cityName, 
        cityText, 
        countryName, 
        imageLayout, 
        rowLayout, 
        populationWrapper, 
        populationText, 
        riseSetWrapper, 
        riseSetText 
     } = styles

    const { name, country, population, sunrise, sunset } = weatherData
    return (
        <SafeAreaView style={container}>
            <ImageBackground
            source={require('../../assets/mountain.jpg')} 
            style={imageLayout}>
                <Text style={[cityName, cityText]}>{name}</Text>
                <Text style={[countryName, cityText]}>{country}</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText 
                    iconName={'user'} 
                    iconColor={'red'} 
                    bodyText= {`Population: ${population}`} 
                    bodyTextStyles= {populationText}/>
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText 
                    iconName={'sunrise'} 
                    iconColor={'white'} 
                    bodyText={moment(sunrise).format('h:mm:ss a')}
                    bodyTextStyles={riseSetText}
                    />

                    <IconText
                    iconName={'sunset'}
                    iconColor={'white'}
                    bodyText={moment(sunset).format('h:mm:ss a')}
                    bodyTextStyles={riseSetText}
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
    imageLayout: {
        flex: 1
    },
    cityName: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },
    countryName: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red'
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: 'white'
    },
    rowLayout:{
        flexDirection: 'row',
        alignItems: 'center'
    }
})
export default City