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
                title="Can I chill at your place?"
                body={"I know it’s a weird question for an app to ask buuuut knowing where you live and where your are can help me detect and stop bad habits. This info will not leave your device.\n\nAlso consider: 🥺 👉👈"}
                color="orange"
                onBack={() => router.back()}
                action={
                    // Buttons go here
                    <View style={{}}>
                        <Text style={{ color: "white", fontWeight: "bold" }}>Next</Text>
                    </View>
                }
                showProgress
                totalSteps={8}
                currentStep={5}
            />
        </View>
    );
}
