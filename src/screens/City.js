import React from 'react'
import { SafeAreaView, Text, ImageBackground, StyleSheet, StatusBar, View } from 'react-native'
import {Feather} from '@expo/vector-icons'
const City = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
            source={require('../../assets/mountain.jpg')} 
            style={styles.imageLayout}>
                <Text style={[styles.cityName, styles.cityText]}>London</Text>
                <Text style={[styles.countryName, styles.cityText]}>UK</Text>
                <View style={styles.populationWrapper}>
                    <Feather name={'user'} size={50} color={'red'}/>
                    <Text style={styles.populationText}>8000</Text>
                </View>
                <View style={styles.riseSetWrapper}>
                    <Feather name={'sunrise'} size= {50} color={'white'}/>
                    <Text style={styles.riseSetText}>10:46:58am</Text>
                    <Feather name={'sunset'} size= {50} color={'white'}/>
                    <Text style={styles.riseSetText}>17:28:15pm</Text>
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
        fontWeight: 'bold'
    },
    riseSetWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
})
export default City