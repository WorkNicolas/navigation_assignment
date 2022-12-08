import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { styles } from './styles/styles';
import ButtonInput from './login/ButtonInput';


export default function Home({ navigation }){
    const reviewHandler = () => {
        navigation.navigate('Review');
    }
    const aboutHandler = () => {
        navigation.navigate('About');
    }
    const contactHandler = () => {
        navigation.navigate('Contact');
    }
    const servicesHandler = () => {
        navigation.navigate('Services');
    }
    return(
        <View style={styles.rootContainer}>
            <Text style={styles.titleText}>Home</Text>
            <Text style={styles.genText}>
                Welcome to Carl's Reviews Application. This application was made with React-Native.
                Navigate by pressing the buttons.
            </Text>
            <View style={styles.genericContainer}>
                <View style={styles.genericContainer}>
                    <ButtonInput buttonText='Review' pressHandler={reviewHandler} />    
                </View>
                <View style={styles.genericContainer}>
                    <ButtonInput buttonText='About Us' pressHandler={aboutHandler} />    
                </View>
                <View style={styles.genericContainer}>
                    <ButtonInput buttonText='Contact' pressHandler={contactHandler} />    
                </View>
                <View style={styles.genericContainer}>
                    <ButtonInput buttonText='Services' pressHandler={servicesHandler} />    
                </View>            
            </View>
        </View>
    )
}