import { View } from "react-native";
import Header from "../../../components/header";
import { router } from "expo-router";
import Dropdown from "../../../components/dropdown";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { frequencyMap, useReporter } from "../../../lib/reporting_ctx";

export default function Home() {
  const reporter = useReporter();

  return (
    <ScrollView
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      <Header
        showLogo
        title="I wanna meet your friends too!"
        body="How often should I share a report?"
        color="orange"
        onBack={() => router.back()}
        action={
          <View style={{ width: "100%", marginTop: 20, marginBottom: 10 }}>
            <Dropdown
              options={["Daily", "Weekly", "Monthly", "Bi-yearly"]}
              maxCount={1}
              onPress={(selected) => {
                reporter.buildReporter({
                  frequencyDays: frequencyMap[selected],
                })
                router.push("/generate-report/type");
              }}
            />
          </View>
        }
      />

    </ScrollView>
  );
}
