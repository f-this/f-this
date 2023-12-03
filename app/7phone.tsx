import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import Header from "../components/header";
import { router } from "expo-router";
import React from "react";
import PhoneNumberInput from "../components/textBoxPhone";
import { ArrowRight } from "iconoir-react-native";
import FabButton from "../components/fab";
import { useAuth } from "../lib/auth_ctx";

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { signIn } = useAuth();

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
                setPhoneNumber(phone);
              }}
            />
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <FabButton
                onPress={async () => {
                  const { data } = await signIn(phoneNumber);
                  router.push("/8otp");
                }}
              >
                <ArrowRight
                  color="black"
                  width={30}
                  height={30}
                  strokeWidth={2}
                />
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
