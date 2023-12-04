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

export default function Home() {
  const [selected, setSelected] = React.useState<string[]>([]);

  return (
    <View
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
      <View style={{ marginHorizontal: 34, position: "absolute", bottom: 70 }}>
        <Dropdown
          options={[
            "Time spent per habit",
            "Breakthroughs",
            "Personal Reflections",
            "Streak",
          ]}
          onMultiselect={(_) => {
            setSelected(_);
          }}
          onPress={() => { }}
        />
        <Button
          title="All done!"
          onPress={() => {
            router.push("/generate-report/share-via");
          }}
          disabled={selected.length != 0}
          color="blue"
          textColor="white"
        />
      </View>
    </View>
  );
}
