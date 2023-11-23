import { StyleSheet } from 'react-native';
import Colors from './Colors';


const textStyle = StyleSheet.create({
    heading: {
        fontFamily: "InterItalic",
        fontSize: 50,
        fontStyle: "normal",
        fontWeight: "bold",
        letterSpacing: -2.5,
        color: Colors.white,
    },
    subtitle: {
        fontFamily: "InterItalic",
        fontSize: 36,
        fontWeight: "700",
        color: Colors.white,
        marginTop: 20,
    },
    body: {
        fontFamily: "Inter",
        fontSize: 18,
        fontWeight: "500",
        color: Colors.white,
        marginTop: 20,
        letterSpacing: -0.9,
    }
});

export default textStyle;
