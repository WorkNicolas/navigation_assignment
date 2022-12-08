import React from 'react';
import { Text } from 'react-native';
import { styles } from '../styles/styles';

export default function LoginHeader(props){
    return(
        <Text style={styles.titleText}>{props.userText}</Text>
    )
}