import { View, Text } from "react-native";
import Header from "../components/header";
import { router } from "expo-router";
import React from "react";
import TextBoxInput from "../components/textBox";
import FabButton from "../components/fab";
import * as Iconoir from "iconoir-react-native";
import ContactButton from "../components/contactButton";

export default function Home() {
  return (
    <View>
      <Header
        showLogo
        title="Step 1"
        subtitle={"What is your age?"}
        body="I need to know your age so that I can find better recommendations."
        onBack={() => router.back()}
        action={
          // Buttons go here
          <View style={{ width: "100%" }}>
            <TextBoxInput
              placeholder="Enter an age"
              keyboardType="number-pad"
              onConfirm={() => {
                router.push("/2name");
              }}
            />
          </View>
        }
        showProgress
        totalSteps={8}
        currentStep={1}
      />
    </View>
  );
}
