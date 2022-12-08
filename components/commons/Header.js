import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { styles } from '../styles/styles';

export default function Header(props){
    return(
        <View style={headerStyle.blackContainer}>
            <Text style={styles.whiteTitle}>{props.title}</Text>
        </View>
    )
}

const headerStyle = StyleSheet.create({
    blackContainer: {
        color: 'white',
        backgroundColor: 'black',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})