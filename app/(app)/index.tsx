import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header";


export default function Home() {

    return (
        <View>
            <Header
                showLogo
                title="Welcome,"
                subtitle={'Get Ready to say "F*** it" to your addictions'}
                body={"However, to help you I need to know a bit about you.\n\nReady?"}
                action={
                    // Buttons go here
                    <View style={{ width: "100%" }}>
                        
                    </View>
                }
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 100,
        width: 100,
        backgroundColor: "red",
    },
});

