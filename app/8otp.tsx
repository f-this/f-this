import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg"
import Header from "../components/header";





export default function Home() {

    return (
        <View>
            <Header showLogo title="Okay, that was a small lie" body={"I do need you to give me the verification code to make sure that phone number is actually yours. Also, can I have your mother\’s maiden name and your SSN? Thanks!"} color="black" />
        </View>
    );
}
