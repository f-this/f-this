import { useState } from "react";
import Colors from "../constants/Colors";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import shadow from "../constants/shadows";
import { Check } from "iconoir-react-native";


interface checkboxProps {
    onPress: (newState: boolean) => void;
    selectedColor?: keyof typeof Colors;
    initialState?: boolean;
}

export default function Checkbox(props: checkboxProps) {
    const [selected, setSelected] = useState(props.initialState ?? false);

    const checkboxStyle = StyleSheet.compose(styles.checkbox as any, selected && {

        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 0,
        backgroundColor: Colors[props.selectedColor ?? "blue"],
    });


    return (
        <TouchableOpacity onPress={() => {
            setSelected(!selected);
            props.onPress(!selected);
        }}>
            <View style={styles.checkbox as any}>
                {selected && <View style={checkboxStyle}>
                    <Check width={20} height={20} color={"#000"} strokeWidth={5} />
                </View>}
            </View>
        </TouchableOpacity>
    );
}

const styles = {
    checkbox: {
        width: 32,
        height: 32,
        margin: 5,
        alignItems: "center",
        justifyContent: "center",

        borderStyle: "solid",
        borderColor: "#000",
        borderWidth: 5,
    },
    checkboxSelected: {
        width: 22,
        height: 22,
        backgroundColor: Colors.blue,
        // Center the checkmark
        alignItems: "center",
        justifyContent: "center",
    },
};