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
                title="Okay, that was a small lie"
                body={"I do need you to give me the verification code to make sure that phone number is actually yours. Also, can I have your mother\’s maiden name and your SSN? Thanks!"}
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
                currentStep={1}
            />
        </View>
    );
}