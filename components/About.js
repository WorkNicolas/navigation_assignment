import React from 'react';
import { View } from 'react-native';
import Header from './commons/Header';
import Main from './commons/Main';
import Footer from './commons/Footer';
import { styles } from './styles/styles';

export default function About() {
    return(
        <View style={styles.rootContainer}>
            <Header title='About Us' />
            <Main main={`
I am Carl Nicolas V. Mendoza, I am the author of this application. I have knowledge in HTML, CSS, and JavaScript that allows me to create an application using ReactJS and React-Native.

This is an application developed with React-Native. it is only tested on an Android device.

I have knowledge in C/C++, Java, and Lua, irrelevant to this application, but has helped me develop this application due to JavaScript having similar syntax.`


} />
            <Footer foot='Who are we?' />
        </View>
    )
}