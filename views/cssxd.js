import { StyleSheet } from 'react-native';

export default  StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        padding: 10,
        fontSize: 18,
        color: 'rgba(0, 255, 0, .7)'
    },
    bigText: {
        color: 'rgba(0, 255, 0, .5)',
        fontWeight: 'bold',
        fontSize: 30,
    },
    button: {
        paddingTop: 60,
    },
    center: { 
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center', 
    },
    item: {
        paddingTop: 25,
        paddingBottom: 25, 
        paddingLeft: 5,
        borderTopColor:'rgba(0, 255, 0, .9)',
        borderBottomColor: 'rgba(0, 255, 0, .9)',
        borderBottomWidth: 1,
        borderTopWidth: 1,
    }, 
    img: { 
        width: 300, 
        height: 300 
    } 
});