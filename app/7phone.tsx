import { View, KeyboardAvoidingView, ScrollView } from "react-native";
import { useState } from "react";
import Header from "../components/header";
import { router } from "expo-router";
import React from "react";
import PhoneNumberInput from "../components/textBoxPhone";
import { ArrowRight } from "iconoir-react-native";
import FabButton from "../components/fab";
import { useAuth } from "../lib/auth_ctx";
import { useProf } from "../lib/profile_ctx";
import LoadingPage from "../components/loading";

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();
  const { storeLocal } = useProf();

  if (isLoading) {
    return (
      <LoadingPage />
    );
  }

  return (
    <ScrollView >
      <KeyboardAvoidingView behavior={"padding"}>
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
                  setIsPhoneValid(isValid);
                }}
              />
              <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                {isPhoneValid &&
                  <FabButton
                    onPress={async () => {
                      setIsLoading(true);
                      try {
                        await signIn(phoneNumber);
                        storeLocal({ phone: phoneNumber });
                        router.push("/8otp");
                      } catch (e) {
                        console.log(e);
                        setIsLoading(false);
                      }
                    }}
                  >
                    <ArrowRight
                      color="black"
                      width={30}
                      height={30}
                      strokeWidth={2}
                    />
                  </FabButton>}
              </View>
            </View>
          }
          showProgress
          totalSteps={8}
          currentStep={7}
        />
      </KeyboardAvoidingView>
    </ScrollView >
  );
}
