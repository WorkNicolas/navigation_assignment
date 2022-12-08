import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { styles } from './styles/styles';
import LoginInput from './login/LoginInput';
import LoginHeader from './login/LoginHeader';
import ButtonInput from './login/ButtonInput';
import TextGray from './commons/TextGray';
import BackButton from './commons/BackButton';

export default function SignUp({navigation}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [validInput, setValidInput] = useState(false);
    const inputHandler = (value) => {
        setName(value);
        setEmail(value);
        setPass(value);
        if (name != '' && email != '' && pass != ''){
            setValidInput(true);
        }
    }
    const pressHandler = () => {
        if (validInput == false){
            Alert.alert('Invalid Input', 'Please enter a valid input.', [
                {text: 'Understood', onPress: () => console.log('SignUp alert closed (1)')}
            ]);
        } else if (validInput == true) {
            Alert.alert('Successfully Registered', 'Please enter your login details.', [
                {text: 'Understood', onPress: () => console.log('SignUp alert closed (2)')}
            ]);
            navigation.navigate('Login')
        }
    }
    return(
        <View style={styles.rootContainer}>
            <View style={styles.genericContainer}>
                <LoginHeader userText="Sign Up" />
                <LoginInput trueInput={true} loginText="Your Name" inputHandler={inputHandler} />
            </View>
            <ButtonInput buttonText="Join Us" pressHandler={pressHandler} />
            <View style={{margin: 20}}  >
                <TextGray grayText="By pressing 'Join Us,' you agree to our terms & conditions" />
            </View>
        </View>
    )
}