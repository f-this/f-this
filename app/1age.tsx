import { View, Text } from "react-native";
import { useState, useContext } from "react";
import Header from "../components/header";
import { router } from "expo-router";
import React from "react";
import TextBoxInput from "../components/textBox";
import FabButton from "../components/fab";
import * as Iconoir from "iconoir-react-native";
import { useProf } from "../lib/profile_ctx"; // Update the path

export default function Home() {
  const { storeLocal } = useProf();
  const [age, setAge] = useState("");
  const handleAgeChange = (text: string) => {
    // Add any age validation logic here
    setAge(text);
  };

  const handleConfirm = () => {
    // Add age validation logic if needed
    storeLocal({ age: age });
    router.push("/2name");
  };
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
              onChange={handleAgeChange}
              onConfirm={handleConfirm}
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
