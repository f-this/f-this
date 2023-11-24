import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg"
import Header from "../components/header";
import { router } from "expo-router";





export default function Home() {

    return (
        <View>
            <Header
                showLogo
                title="Step 3"
                subtitle={"What are you interested in?"}
                body="Small talk, I know... I hate it too"
                color="pink"
                onBack={() => router.back()}
                action={
                    // Buttons go here
                    <View style={{}}>
                        <Text style={{ color: "white", fontWeight: "bold" }}>Next</Text>
                    </View>
                }
                showProgress
                totalSteps={8}
                currentStep={3}
            />
        </View>
    );
}
