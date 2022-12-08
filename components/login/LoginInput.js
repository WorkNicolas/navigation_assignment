import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default function LoginInput(props){
    return(
        <View>
            {props.trueInput ? <TextInput style={styles.inputContainer} placeholder={props.loginText} onChangeText={props.inputHandler} /> : null}
            <TextInput style={styles.inputContainer} placeholder='Email' onChangeText={props.inputHandler} />
            <TextInput style={styles.inputContainer} placeholder='Password' secureTextEntry={true} onChange={props.inputHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 300,
        borderRadius: 25
    }
})