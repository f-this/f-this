import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg"
import Header from "../components/header";





export default function Home() {

    return (
        <View>
            <Header showLogo title="Let’s stay in touch!" body={"It was great meeting you! How ‘bout we stay in touch?\n\nTurning on notifications will ensure you can get nudged when necessary before falling into you bad habits."} color="purple" />
        </View>
    );
}
