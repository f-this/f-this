import { StyleSheet } from 'react-native';
import Colors from './Colors';


const textStyle = StyleSheet.create({
    heading: {
        fontStyle: "italic",
        fontSize: 50,
        fontWeight: "bold",
        letterSpacing: -2.5,
        color: Colors.white,
    },
    subtitle: {
        fontStyle: "italic",
        fontSize: 36,
        fontWeight: "700",
        color: Colors.white,
        marginTop: 20,
    },
    body: {
        fontSize: 18,
        fontWeight: "500",
        color: Colors.white,
        marginTop: 20,
        letterSpacing: -0.9,
    }
});

export default textStyle;
