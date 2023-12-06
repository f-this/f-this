import { View, Text } from "react-native";
import Header from "../../../components/header";
import { router } from "expo-router";
import Button from "../../../components/button";
import TextBoxInput from "../../../components/textBox";
import textStyle from "../../../constants/textStyles";
import Colors from "../../../constants/Colors";
import Dropdown from "../../../components/dropdown";
import TextButton from "../../../components/textButton";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useReporter } from "../../../lib/reporting_ctx";

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
                let fequencyMap = {
                  "Daily": 1,
                  "Weekly": 7,
                  "Monthly": 30,
                  "Bi-yearly": 180,

                }
                reporter.buildReporter({
                  frequencyDays: fequencyMap[selected[0] as keyof typeof fequencyMap],
                })
              }}
            />
          </View>
        }
      />

    </ScrollView>
  );
}
