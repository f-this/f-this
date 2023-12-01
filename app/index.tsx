import { View, Text, StyleSheet } from "react-native";
import Header from "../components/header";
import Button from "../components/button";
import TextButton from "../components/textButton";
import { router } from "expo-router";
import React from "react";
import Dropdown from "../components/dropdown";
import ProgressBar from "../components/progressBar";

export default function Home() {
  return (
    <View>
      <Header
        showLogo
        title="Welcome,"
        subtitle={'Get Ready to say "F*** it" to your addictions'}
        body={"However, to help you I need to know a bit about you.\n\nReady?"}
        action={
          // Buttons go here
          <View style={{ width: "100%" }}>
            <Button
              title="F*** Yeah!"
              onPress={() => {
                router.push("/1age");
              }}
            />
            <TextButton
              title="I Already Have An Account"
              onPress={() => {
                router.push("/add-addiction");
              }}
            />
          </View>
        }
      />
    </View>
  );
}
