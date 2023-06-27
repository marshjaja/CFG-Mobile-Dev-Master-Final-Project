// AppStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body: {
        fontFamily: "Barlow",
        backgroundColor: '#000',
        color: '#333',
    },
    button: {
        padding: 10,
        fontSize: 16,
        textAlign: 'center',
        borderRadius: 4,
        backgroundColor: '#000',
        color: '#fff',
    },
    input: {
        width: '100%',
        padding: 10,
        fontSize: 16,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
    },
    card: {
        flexDirection: 'column',
        width: '100%',
        padding: 20,
        borderRadius: 8,
        backgroundColor: '#ff69b4',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    cardHeader: {
        fontSize: 100,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardBody: {
        flexGrow: 1,
        color: '#000',
    },
    // ... and so on for the rest of your styles
});

export default styles;
