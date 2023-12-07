import { View } from "react-native";
import Header from "../components/header";
import { router } from "expo-router";
import TextButton from "../components/textButton";
import React from "react";
import Button from "../components/button";
import { useProf } from "../lib/profile_ctx";

export default function Home() {
  const { storeLocal } = useProf();
  const handleConfirm = () => {
    storeLocal({ locationEnabled: true });
    router.push("/6notifications");
  };

  return (
    <View>
      <Header
        showLogo
        title="Can I chill at your place?"
        body={
          "I know it’s a weird question for an app to ask buuuut knowing where you live and where your are can help me detect and stop bad habits. This info will not leave your device.\n\nAlso consider: 🥺 👉👈"
        }
        color="orange"
        onBack={() => router.back()}
        action={
          // Buttons go here

          <View style={{ width: "100%" }}>
            <Button title="Grant Location Access" onPress={handleConfirm} />
            <TextButton
              title="Ummmm... No."
              onPress={() => {
                storeLocal({ locationEnabled: false });
                router.push("/6notifications");
              }}
            />
          </View>
        }
        showProgress
        totalSteps={8}
        currentStep={5}
      />
    </View>
  );
}
