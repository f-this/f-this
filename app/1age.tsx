import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg"
import Header from "../components/header";


export default function Home() {

    return (
        <View>
            <Header showLogo title="Step 1" subtitle={"What is your age?"} body="I need to know your age so that I can find better recommendations." />
        </View>
    );
}



