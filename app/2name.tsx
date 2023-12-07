import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import Header from "../components/header";
import { router } from "expo-router";
import React from "react";
import TextBoxInput from "../components/textBox";
import { useProf } from "../lib/profile_ctx"; // Update the path

export default function Home() {
  const { storeLocal } = useProf();
  const [name, setName] = React.useState("");
  const handleNameChange = (text: string) => {
    setName(text);
  };

  const handleConfirm = () => {
    storeLocal({ name: name });
    router.push("/3interests");
  };
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior={"padding"}>
        <Header
          showLogo
          title="Step 2"
          subtitle={"What is your name?"}
          body="You have to start somewhere, right?"
          color="green"
          onBack={() => router.back()}
          action={
            // Buttons go here
            <View style={{ width: "100%" }}>
              <TextBoxInput
                placeholder="Enter your name"
                keyboardType="default"
                onConfirm={() => {
                  handleConfirm();
                }}
                onChange={handleNameChange}
              />
            </View>
          }
          showProgress
          totalSteps={8}
          currentStep={2}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
