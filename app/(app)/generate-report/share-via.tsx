import { View, Text } from "react-native";
import Header from "../../../components/header";
import Button from "../../../components/button";
import { router } from "expo-router";
import React from "react";
import textStyle from "../../../constants/textStyles";
import Colors from "../../../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { InfoCircle, Refresh } from "iconoir-react-native";
import { ReportMethod, useReporter } from "../../../lib/reporting_ctx";

export default function Home() {
  const [selected, setSelected] = React.useState<string[]>([]);
  const { buildReporter } = useReporter();

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      <Header
        title="Share via..."
        body="Pick your poison."
        onBack={() => router.back()}
        color="black"
      />
      <View style={{ width: "100%" }}>
        <View style={{ marginHorizontal: 34 }}>
          <View
            style={{
              flexDirection: "column",
              width: "100%",
              marginBottom: 20,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            ></View>

            <Button
              title="Send them a SMS Message"
              onPress={() => {
                router.push("/generate-report/get-digits");
              }}
              color="spotify"
              textColor="black"
            />

            <View style={{ height: 10 }} />
            <Button
              title="Slide into their DMs (Instagram)"
              onPress={() => {
                router.push("/reporting");
              }}
              color="pink"
              textColor="white"
            />

            <View style={{ height: 10 }} />

            <Button
              title="Slide into their inbox (email)"
              onPress={() => {
                router.push("/reporting");
              }}
              color="purple"
              textColor="white"
            />

            <View style={{ height: 10 }} />

            <Button
              title="I will share it myself"
              onPress={() => {
                router.push("/reporting");
              }}
              color="blue"
              textColor="white"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
