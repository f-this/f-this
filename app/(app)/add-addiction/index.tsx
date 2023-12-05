import { View } from "react-native";
import Header from "../../../components/header";
import Button from "../../../components/button";
import TextButton from "../../../components/textButton";
import { router } from "expo-router";
import React from "react";
import Dropdown from "../../../components/dropdown";
import { useProf } from "../../../lib/profile_ctx";

export default function Home() {
  const { storeLocal } = useProf();
  const [selected, setSelected] = React.useState<string[]>([]);
  const [route, setRoute] = React.useState("");

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      <Header
        showLogo
        title="Let’s get to the point"
        body={
          "We both have places to be and things to do, so let’s get started. Time to say “F*** it” to your addictions for good."
        }
        color="black"
        onBack={() => router.back()}
      />
      <View style={{ marginHorizontal: 34, position: "absolute", bottom: 40 }}>
        <Dropdown
          options={["Smoking", "Gambling", "Illicit Substances", "Sugar"]}
          onMultiselect={(_) => {
            setSelected(_);
            storeLocal({ addiction: selected[0] });
            if (selected[0] == "Illicit Substances") {
              setRoute("Illicit");
            } else {
              setRoute(selected[0]);
            }
          }}
          onPress={() => {}}
        />
        <View style={{ height: 10 }} />
        <TextButton
          title="I don’t see my addiction"
          onPress={() => {
            router.push("/add-addiction/replacement");
          }}
          textColor="black"
        />
        <View style={{ height: 20 }} />
        <Button
          title="Let’s go!"
          onPress={() => {
            router.push(`/add-addiction/${route}`);
          }}
          disabled={selected.length != 0}
          color="blue"
          textColor="white"
        />
      </View>
    </View>
  );
}
