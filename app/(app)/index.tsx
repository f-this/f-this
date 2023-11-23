import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";


export default function Home() {

    return (
        <View>
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
        backgroundColor: "red",
    },
});

