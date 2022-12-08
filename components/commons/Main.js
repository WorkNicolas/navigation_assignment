import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { styles } from '../styles/styles';

export default function Main(props){
    return(
        <View style={mainStyles.mainContent}>
            <Text style={styles.genText}>{props.main}</Text>
        </View>
    )
}

const mainStyles = StyleSheet.create({
    mainContent: {
        flex: 9,
        textAlign: 'flex-start',
        justifyContent: 'flex-start'
    }
})