import { View, Text } from "react-native";
import Header from "../../components/header";
import { router } from "expo-router";
import Button from "../../components/button";
import TextBoxInput from "../../components/textBox";
import textStyle from "../../constants/textStyles";
import Colors from "../../constants/Colors";
import Dropdown from "../../components/dropdown";
import TextButton from "../../components/textButton";
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
        title="I wanna meet your friends too!"
        body="How often should I share a report?"
        color="orange"
        onBack={() => router.back()}
      />
      <View style={{ marginHorizontal: 34, position: "absolute", bottom: 40 }}>
        <Dropdown
          options={["Daily", "Weekly", "Monthly", "Bi-yearly"]}
          onMultiselect={(_) => {
            setSelected(_);
          }}
          onPress={() => {}}
        />
        <Button
          title="Let’s go!"
          onPress={() => {
            router.push("/generate-report/type");
          }}
          disabled={selected.length != 0}
          color="blue"
          textColor="white"
        />
      </View>
    </View>
  );
}
