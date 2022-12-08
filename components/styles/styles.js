import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    genericContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    absolContainer: {
        position: 'absolute',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 32,
        margin: 20,
    },
    genText: {
        fontSize: 24,
        marginHorizontal: 20
    },
    whiteTitle: {
        fontWeight: 'bold',
        fontSize: 32,
        margin: 10,
        color: 'white'
    },
})