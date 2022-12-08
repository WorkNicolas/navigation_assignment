import React from 'react';
import { View } from 'react-native';
import Header from './commons/Header';
import Main from './commons/Main';
import Footer from './commons/Footer';
import { styles } from './styles/styles';

export default function Contact() {
    return(
        <View style={styles.rootContainer}>
            <Header title='Contact' />
            <Main main={`
Author: Carl Nicolas V. Mendoza

Phone Number: 09186069463

Email: qcnvmendoza@tip.edu.ph

Address: #2 Masbate Street, Luzviminda Village, Batasan Hills, Quezon City`


} />
            <Footer foot='The credentials of the author of this application.' />
        </View>
    )
}