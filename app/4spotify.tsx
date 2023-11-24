import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg"
import Header from "../components/header";





export default function Home() {

    return (
        <View>
            <Header showLogo title="No wayyyy, I love Animals too!" body="That’s crazyyy, we have so much in common!!\n\nI bet we even have the same music taste too, we should totally make a blend!" color="black" />
        </View>
    );
}
