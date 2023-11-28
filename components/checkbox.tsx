import { useState } from "react";
import Colors from "../constants/Colors";
import { TouchableOpacity, View } from "react-native";


interface checkboxProps {
    onPress: (newState: boolean) => void;
    selectedColor?: keyof typeof Colors;
    initialState?: boolean;
}

export default function Checkbox(props: checkboxProps) {
    const [selected, setSelected] = useState(props.initialState ?? false);

    return (
        <TouchableOpacity onPress={() => {
            setSelected(!selected);
            props.onPress(!selected);
        }}>
            <View style={styles.checkbox as any}>
                {selected && <View style={styles.checkboxSelected}></View>}
            </View>
        </TouchableOpacity>
    );
}

const styles = {
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.black,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
    },
    checkboxSelected: {
        width: 10,
        height: 10,
        borderRadius: 2,
        backgroundColor: Colors.green,
    },
};