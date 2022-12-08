import React from 'react';
import { View } from 'react-native';
import Header from './commons/Header';
import Main from './commons/Main';
import Footer from './commons/Footer';
import { styles } from './styles/styles';

export default function Services() {
    return(
        <View style={styles.rootContainer}>
            <Header title='Services' />
            <Main main={`
The application is about creating detailed reviews of films, literature, games, and other forms of media.

The reviewer can create, save, and review various forms of media. This will be saved to the account that was generated.

Enjoy the application and create fair reviews!`


} />
            <Footer foot='What do we do?' />
        </View>
    )
}