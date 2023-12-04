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
import { ArrowRight } from "iconoir-react-native";
import FabButton from "../../../components/fab";
import PhoneNumberInput from "../../../components/textBoxPhone";
import ContactButton from "../../../components/contactButton";

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
        title="Let's get their digits"
        body="Muahahahahaha :)"
        color="spotify"
        onBack={() => router.back()}
        action={
          // Buttons go here
          <View style={{ width: "100%" }}>
            <View style={{ width: "100%", flexDirection: "row" }}>
              <ContactButton
                showIcon={false}
                text={"Jane Doe"}
                onPress={() => {
                  router.push("./gotten-digits");
                }}
              />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <FabButton
                onPress={() => {
                  router.push("../dashboard");
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
      />
    </View>
  );
}
