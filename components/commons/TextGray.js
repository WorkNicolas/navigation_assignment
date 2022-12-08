import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function TextGray(props){
    return(
        <Text style={styles.textGray} onPress={props.textHandler} >{props.grayText}</Text>
    )
}

const styles = StyleSheet.create({
    textGray: {
        color: 'gray',
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 50,
        marginVertical: 20,
    },
})