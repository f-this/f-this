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
                title="Step 2"
                subtitle={"What is your name?"}
                body="You have to start somewhere, right?"
                color="yellow"
                onBack={() => router.back()}
                action={
                    // Buttons go here
                    <View style={{ width: "100%" }}>
                        <TextBoxInput placeholder="Enter your name" keyboardType="default" onConfirm={() => {
                            router.push("/3interests");
                        }} />
                    </View>
                }
                showProgress
                totalSteps={8}
                currentStep={2}
            />
        </View>
    );
}



