import { router } from "expo-router";
import { View } from "react-native";
import Header from "../components/header";
import React from "react";
import Button from "../components/button";

export default function Home() {
  return (
    <View>
      <Header
        showLogo
        title="Are you lost?"
        subtitle="You’re not supposed to be here..."
        body={"Just turn around and act like nothing happened..."}
        color="pink"
        onBack={() => router.back()}
        action={
          // Buttons go here
          <View style={{
            width: "100%",
          }}>
            <Button title="Go Back" onPress={() => router.back()} />
          </View>
        }
      />
    </View>
  );
}
