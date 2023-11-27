import { View, Text, Button } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg"
import Header from "../components/header";
import { router } from "expo-router";
import TextButton from "../components/textButton";





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
                    <View style={{ width: "100%" }}>
                        // Buttons go here
                        <View style={{ width: "100%" }}>
                            <Button title="Grant Location Access" onPress={() => {
                                //router.push("/1age");
                            }} />
                            <TextButton title="Ummmm... No." onPress={() => {
                                router.push("/6notifications");
                            }} />
                        </View>
                    </View>
                }
                showProgress
                totalSteps={8}
                currentStep={5}
            />
        </View>
    );
}
