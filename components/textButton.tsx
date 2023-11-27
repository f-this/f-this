import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import React from "react";

interface ButtonProps {
    title: string;
    onPress: () => void;
    color?: keyof typeof Colors;
    textColor?: keyof typeof Colors;
}

export default function TextButton(props: ButtonProps) {
    // Update textColor to be the textColor prop if it exists, otherwise use the default color
    let textStyle = StyleSheet.compose(styles.buttonText, { color: Colors[props.textColor ?? "white"] });

    return (
        <TouchableOpacity style={styles.button}>
            <Text style={textStyle}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        // Full width
        width: "100%",
    },
    buttonText: {
        color: Colors.black,
        fontSize: 16,
        fontWeight: "900",
        fontFamily: "Inter",
        textTransform: "capitalize",
        letterSpacing: -0.8,
        textDecorationLine: "underline",

    },
});
