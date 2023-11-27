import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";
import Header from "../components/header";
import { useState } from "react";
import { router } from "expo-router";
import PhoneNumberInput from "../components/textBoxPhone";

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (newPhoneNumber: string) => {
    setPhoneNumber(newPhoneNumber);
  };
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
      <PhoneNumberInput
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
    </View>
  );
}
