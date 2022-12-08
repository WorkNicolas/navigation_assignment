import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { styles } from './styles/styles';
import LoginHeader from './login/LoginHeader';
import LoginInput from './login/LoginInput';
import ButtonInput from './login/ButtonInput';
import TextGray from './commons/TextGray';

export default function Login({navigation}){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [validInput, setValidInput] = useState(false);
    const inputHandler = (value) => {
        setEmail(value);
        setPass(value);
        if (email != '' && pass != ''){
            setValidInput(true);
        }
    }
    const pressHandler = () => {
        if (validInput == false){
            Alert.alert('Invalid Input', 'Please enter a valid input.', [
                {text: 'Understood', onPress: () => console.log('Login alert closed (1)')}
            ]);
        } else if (validInput == true) {
            Alert.alert('Successful login', 'You may now use the app.', [
                {text: 'Understood', onPress: () => console.log('Login alert closed (2)')}
            ]);
            navigation.navigate('Home')
        }
    }
    const textHandler = () => {
        navigation.navigate('SignUp')
    }

    return (
        <View style={styles.rootContainer}>
            <View style={styles.genericContainer}>
                <LoginHeader userText="Log In" />
            </View>
            <View style={styles.genericContainer}>
                <LoginInput trueInput={false} inputHandler={inputHandler}/>
            </View>
            <View style={styles.genericContainer}>
                <ButtonInput buttonText='Login' pressHandler={pressHandler} />
                <TextGray grayText="Don't have an account? Sign up" textHandler={textHandler} />
            </View>
        </View>
    )
}