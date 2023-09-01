import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';

const Card = ({ title, content}) => {
  return (
        <View style={styles.card}>
            <Image source={require('../../assets/mountain.jpg')} style={styles.image} resizeMode="cover" />
            <View style={styles.cardContent}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.content}>{content}</Text>
                <TouchableOpacity style={styles.button}><Text>Edit</Text></TouchableOpacity>
            </View>
        </View>
    );
    };

    const styles = StyleSheet.create({
        card: {
            backgroundColor: 'white',
            borderRadius: 8,
            elevation: 4,
            margin: 8,
            overflow: 'hidden',
        },
        image: {
            height: 100, 
            width: '100%', 
        },
        cardContent: {
            padding: 16,
        },
        title: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 8,
        },
        button: {
            fontSize: 20,
            alignItems: 'flex-end',
            fontWeight: 'bold',
        },
        content: {
            fontSize: 15
        }
    });

    export default Card;
