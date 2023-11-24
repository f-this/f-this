import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg"
import Header from "../components/header";





export default function Home() {

    return (
        <View>
            <Header showLogo title="Step 3" subtitle={"What are you interested in?"} body="Small talk, I know... I hate it too" color="pink" />
        </View>
    );
}
