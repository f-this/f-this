import { View, Text } from "react-native";
import Header from "../components/header";
import { router } from "expo-router";
import React from "react";
import TextBoxInput from "../components/textBox";

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
                    <View style={{ width: "100%" }}>
                        <TextBoxInput placeholder="Type to Search" keyboardType="default" />
                    </View>
                }
                showProgress
                totalSteps={8}
                currentStep={3}
            />
        </View>
    );
}
