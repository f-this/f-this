import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import shadow from "../constants/shadows";
import React from "react";

interface ButtonProps {
    title: string;
    onPress: () => void;
    color?: keyof typeof Colors;
    textColor?: keyof typeof Colors;
}

export default function Button(props: ButtonProps) {
    // Update backgroundColor to be the color prop if it exists, otherwise use the default color
    let buttonStyle = StyleSheet.compose(styles.button, { backgroundColor: Colors[props.color ?? "white"] });
    // Update textColor to be the textColor prop if it exists, otherwise use the default color
    let textStyle = StyleSheet.compose(styles.buttonText, { color: Colors[props.textColor ?? "black"] });

    return (
        <TouchableOpacity style={buttonStyle} onPress={props.onPress}>
            <Text style={textStyle}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.white,
        paddingVertical: 20,
        paddingHorizontal: 12,
        marginVertical: 10,
        // Full width
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        // Shadow
        ...shadow
    },
    buttonText: {
        color: Colors.black,
        fontSize: 16,
        fontWeight: "900",
        fontFamily: "InterItalic",
    },
});
