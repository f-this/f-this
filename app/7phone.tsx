import { View, Text, StyleSheet } from "react-native";
import Header from "../components/header";
import { router } from "expo-router";
import React from "react";
import PhoneNumberInput from "../components/textBoxPhone";
import { ArrowRight } from "iconoir-react-native";
import FabButton from "../components/fab";

export default function Home() {
  return (
    <View>
      <Header
        showLogo
        title="Can I have your number?"
        body={
          "I won’t text you, I promise! I just need a way to remember who you are :)"
        }
        color="black"
        onBack={() => router.back()}
        action={
          // Buttons go here
          <View style={{ width: "100%" }}>
            <PhoneNumberInput
              onChange={(phone, isValid) => {

              }}
            />
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <FabButton onPress={() => {
                router.push("/8otp");
              }}>
                <ArrowRight color="black" width={30} height={30} strokeWidth={2} />
              </FabButton>
            </View>
          </View>
        }
        showProgress
        totalSteps={8}
        currentStep={7}
      />
    </View>
  );
}
