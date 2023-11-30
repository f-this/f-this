import { View, Text } from "react-native";
import Header from "../components/header";
import { router } from "expo-router";
import React from "react";
import VerificationCodeInput from "../components/textBoxVerificationCode";
import TextButton from "../components/textButton";

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
                    <View style={{ width: "100%" }}>
                        <VerificationCodeInput
                            onChange={(code, isValid) => { }}
                        />
                        <TextButton title="Resend Verification Code" onPress={() => {
                            //router.push("/8otp");
                        }} />
                    </View>
                }
                showProgress
                totalSteps={8}
                currentStep={8}
            />
        </View>
    );
}
