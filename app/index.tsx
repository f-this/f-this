import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg"
import Header from "../components/header";
import Button from "../components/button";


export default function Home() {

    return (
        <View>
            <Header showLogo title="Welcome," subtitle={"Get Ready to say \"F*** it\" to your addictions"} body="However, to help you I need to know a bit about you. Ready?"
                action={
                    // Buttons go here
                    <View style={{ width: "100%" }}>
                        <Button title="Yes" onPress={() => { }} />
                    </View>
                } />
        </View>
    );
}



