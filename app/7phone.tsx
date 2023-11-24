import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg"
import Header from "../components/header";





export default function Home() {

    return (
        <View>
            <Header showLogo title="Can I have your number?" body={"I won’t text you, I promise! I just need a way to remember who you are :)"} color="black" />
        </View>
    );
}
