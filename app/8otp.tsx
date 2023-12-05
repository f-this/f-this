import { View, Text } from "react-native";
import Header from "../components/header";
import { router } from "expo-router";
import React from "react";
import VerificationCodeInput from "../components/textBoxVerificationCode";
import TextButton from "../components/textButton";
import { useState } from "react";
import { useAuth } from "../lib/auth_ctx";

export default function Home() {
  const [OTP, setOTP] = useState("");
  const { phone, verifyOTP } = useAuth();

  const onLogin = async (code: string) => {
    if (phone) {
      const result = await verifyOTP({
        phone: phone,
        token: code,
        type: "sms",
      });
      if (!result.error) {
        router.push("/");
      }
    }
  };

  return (
    <View>
      <Header
        showLogo
        title="Okay, that was a small lie"
        body={
          "I do need you to give me the verification code to make sure that phone number is actually yours. Also, can I have your mother’s maiden name and your SSN? Thanks!"
        }
        color="pink"
        onBack={() => router.back()}
        action={
          // Buttons go here
          <View style={{ width: "100%" }}>
            <VerificationCodeInput
              onChange={(code, isValid) => {
                if (isValid) {
                  setOTP(code);
                  onLogin(code);
                }
              }}
            />
            <TextButton
              title="Resend Verification Code"
              onPress={() => {
                router.push("/7phone");
              }}
            />
          </View>
        }
        showProgress
        totalSteps={8}
        currentStep={8}
      />
    </View>
  );
}
