import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import { styles } from './styles/styles';
import Card from './commons/Card';

export default function ReviewDetails({ navigation }){
    const [reviews, setReviews] = useState([
        { title: 'Half-Life: Alyx review: A great game burdened by astronomical expectations', 
            rating: 4.5, 
            body: 'Half-Life: Alyx isn’t quite as revolutionary as you might hope, particularly if you’re already well-versed in virtual reality, but it’s undoubtedly one of the best games on the platform and hopefully the start of a resurgence for both the series and the hardware.', 
            key: '1' },
        { title: 'Asrock X670E Taichi review: This motherboard hits a sweet spot',
            rating: 4,
            body: 'The Asrock X670E Taichi has a lot going for it and includes one of the richest feature sets among X670E motherboards. It’s also cheaper than most other competitors, with similar capabilities. Odd quirks such as inconveniently placed stickers and a buggy BIOS aside, there’s a ton of value in this board.',
            key: '2' },
        { title: 'Bitwarden review: This ultra-affordable password manager has few restrictions',
            rating: 4,
            body: 'Bitwarden’s generous free plan and extremely affordable paid plan make it a good option for users on a budget. However, if you prefer a polished experience and even more features, you’ll need to look at other paid password managers.',
            key: '3' }
    ]);
    const pressHandler = () => {
        navigation.navigate('home')
    }
    return(
        <View style={styles.rootContainer} >
            <FlatList 
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={reviewStyles.reviewer}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const reviewStyles=StyleSheet.create({
    reviewer: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 20,
    }
})