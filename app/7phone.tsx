import { View, Text, StyleSheet } from "react-native";
import Header from "../components/header";
import { router } from "expo-router";
import React from "react";

export default function Home() {
  return (
    <View>
      <Header
        showLogo
        title="Can I have your number?"
        body={
          "I won’t text you, I promise! I just need a way to remember who you are :)"
        }
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
