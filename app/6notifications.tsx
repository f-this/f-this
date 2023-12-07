import { View } from "react-native";
import Button from "../components/button";
import Header from "../components/header";
import { router } from "expo-router";
import React from "react";
import TextButton from "../components/textButton";
import { useProf } from "../lib/profile_ctx";

export default function Home() {
  const { storeLocal } = useProf();
  const handleConfirm = () => {
    storeLocal({ notificationsEnabled: true });
    router.push("/7phone");
  };
  return (
    <View>
      <Header
        showLogo
        title="Let’s stay in touch!"
        body={
          "It was great meeting you! How ‘bout we stay in touch?\n\nTurning on notifications will ensure you can get nudged when necessary before falling into you bad habits."
        }
        color="purple"
        onBack={() => router.back()}
        action={
          // Buttons go here
          <View style={{ width: "100%" }}>
            <Button title="Allow Notifications" onPress={handleConfirm} />
            <TextButton
              title="Ummmm... No."
              onPress={() => {
                storeLocal({ notificationsEnabled: false });
                router.push("/7phone");
              }}
            />
          </View>
        }
        showProgress
        totalSteps={8}
        currentStep={6}
      />
    </View>
  );
}
