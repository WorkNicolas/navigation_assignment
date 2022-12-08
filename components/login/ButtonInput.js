import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ButtonInput(props){
    return(
        <TouchableOpacity style={styles.buttonContainer} onPress={props.pressHandler} >
            <Text style={styles.buttonText} >{props.buttonText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 300,
        height: 47,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 25,
        backgroundColor: 'limegreen',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
})