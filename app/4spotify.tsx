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
                title="No wayyyy, I love Animals too!"
                body="That’s crazyyy, we have so much in common!!\n\nI bet we even have the same music taste too, we should totally make a blend!"
                color="black"
                onBack={() => router.back()}
                action={
                    // Buttons go here
                    <View style={{ width: "100%" }}>
                        <Button title="Connect to Spotify" color={"spotify"} onPress={() => {
                            //router.push("/1age");
                        }} />
                        <TextButton title="Ummmm... No." onPress={() => {
                            router.push("/5location");
                        }} />
                    </View>
                }
                showProgress
                totalSteps={8}
                currentStep={4}
            />
        </View>
    );
}
