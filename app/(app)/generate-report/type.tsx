import { View, Text, ScrollView } from "react-native";
import Header from "../../../components/header";
import { router } from "expo-router";
import Button from "../../../components/button";
import TextBoxInput from "../../../components/textBox";
import textStyle from "../../../constants/textStyles";
import Colors from "../../../constants/Colors";
import Dropdown from "../../../components/dropdown";
import TextButton from "../../../components/textButton";
import React from "react";
import { ReportType, useReporter } from "../../../lib/reporting_ctx";

export default function Home() {
  const [selected, setSelected] = React.useState<string[]>([]);
  const { buildReporter } = useReporter();

  return (
    <ScrollView
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      <Header
        showLogo
        title="What shouldn't I tell them?"
        body="What type of report?"
        color="pink"
        onBack={() => router.back()}
      />
      <View style={{ marginHorizontal: 34 }}>
        <Dropdown
          options={["Time Per Habit",
            "Breakthroughs",
            "Reflections",
            "Streak"]}
          onMultiselect={(_) => {
            setSelected(_);
          }}
          onPress={() => { }}
        />
        <Button
          title="All done!"
          onPress={() => {
            let typeMap = {
              "Time Per Habit": ReportType.TimePerHabit,
              "Breakthroughs": ReportType.Breakthroughs,
              "Reflections": ReportType.Reflections,
              "Streak": ReportType.Streak,
            }
            buildReporter({
              reportType: selected.map((_) => typeMap[_ as keyof typeof typeMap]),
            })
            router.push("/generate-report/share-via");
          }}
          disabled={selected.length == 0}
          color="blue"
          textColor="white"
        />
      </View>
    </ScrollView>
  );
}
