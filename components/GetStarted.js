import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles/styles';
import TextGray from './commons/TextGray';
import ButtonInput from './login/ButtonInput';

export default function GetStarted({navigation}){
    const pressHandler = () => {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.rootContainer}>
            <View style={styles.genericContainer}>
                <Text style={{fontSize: 32, fontWeight: 'bold'}}>Learning App</Text>
                <TextGray grayText="Unlimited access to thousands of online classes" />
            </View>
            <ButtonInput buttonText='Get Started' pressHandler={pressHandler} />
        </View>
    )
}
