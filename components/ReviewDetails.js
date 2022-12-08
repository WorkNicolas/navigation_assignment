import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import { styles } from './styles/styles';
import Card from './commons/Card';

export default function ReviewDetails({ navigation }){
    const pressHandler = () => {
        navigation.navigate('home')
    }
    return(
        <View style={detailStyles.rootContainer} >
            <Card>
            <Text style={detailStyles.titleText}>{navigation.getParam('title')}</Text>
            <Text style={detailStyles.genText}>{navigation.getParam('body')}</Text>
            <Text style={detailStyles.rating}>{navigation.getParam('rating')}/5</Text>
            </Card>
        </View>
    )
}

const detailStyles=StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: 'aliceblue',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 20,
        color: 'black'
    },
    genText: {
        fontSize: 20,
        marginHorizontal: 20,
        color: 'gray'
    },
    rating: {
        fontSize: 72,
        color: 'limegreen',
        marginVertical: 20,
        fontWeight: 'bold'
    },
})