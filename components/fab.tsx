import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import shadow from "../constants/shadows";
import React from "react";

interface ButtonProps {
    children?: React.ReactNode;
    onPress: () => void;
    color?: keyof typeof Colors;
}

export default function FabButton(props: ButtonProps) {
    // Update backgroundColor to be the color prop if it exists, otherwise use the default color
    let buttonStyle = StyleSheet.compose(styles.button, { backgroundColor: Colors[props.color ?? "white"] });

    return (
        <TouchableOpacity style={buttonStyle} onPress={props.onPress}>
            {props.children}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.white,
        padding: 15,
        width: 54,
        height: 54,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
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