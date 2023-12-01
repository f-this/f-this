import { View, Text } from "react-native";
import Header from "../components/header";
import { router } from "expo-router";
import React from "react";
import TextBoxInput from "../components/textBox";
import Checkbox from "../components/checkbox";
import Dropdown from "../components/dropdown";
import FabButton from "../components/fab";
import { ArrowRight } from "iconoir-react-native";
import textStyle from "../constants/textStyles";

export default function Home() {
  return (
    <View>
      <Header
        showLogo
        title="Step 3"
        subtitle={"What are you interested in?"}
        body="Small talk, I know... I hate it too"
        color="pink"
        onBack={() => router.back()}
        action={
          // Buttons go here
          <View style={{ width: "100%" }}>
            <TextBoxInput placeholder="Type to Search" keyboardType="default" />
            <Dropdown
              options={[
                "Soccer",
                "Listening to Music",
                "Animals",
                "Running",
                "Football",
                "Tennis",
                "Biking",
              ]}
              onMultiselect={(_) => {}}
              onPress={() => {}}
            />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={textStyle.caption}>Select at least 2 interests</Text>
              <FabButton
                marginTop={10}
                onPress={() => {
                  router.push("/4spotify");
                }}
              >
                <ArrowRight
                  color="black"
                  width={30}
                  height={30}
                  strokeWidth={2}
                />
              </FabButton>
            </View>
          </View>
        }
        showProgress
        totalSteps={8}
        currentStep={3}
      />
    </View>
  );
}
