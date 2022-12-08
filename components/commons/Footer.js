import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { styles } from '../styles/styles';

export default function Footer(props){
    return(
        <View style={footerStyle.grayContainer}>
            <Text style={footerStyle.grayText} >{props.foot}</Text>
        </View>
    )
}

const footerStyle=StyleSheet.create({
    grayContainer: {
        flex: 1,
        backgroundColor: 'gray',
        width: '100%'
    },
    grayText: {
        color: 'lightgray',
        margin: 20
    }
})