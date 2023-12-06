import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import Header from "../../../components/header";
import { router } from "expo-router";
import { useState } from "react";
import Button from "../../../components/button";
import TextBoxInput from "../../../components/textBox";
import textStyle from "../../../constants/textStyles";
import Colors from "../../../constants/Colors";
import { useProf } from "../../../lib/profile_ctx";
export default function Home() {
  const { storeLocalAddictionData } = useProf();
  const [custom, setCustom] = useState("");
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior={"padding"}>
        <Header
          showLogo
          title="I want to replace smoking with..."
          body={"Do you have an idea?"}
          color="orange"
          onBack={() => router.back()}
        />
        <View style={{ width: "100%", paddingHorizontal: 34, paddingTop: 10 }}>
          <TextBoxInput
            placeholder="Enter your alternative habit"
            keyboardType="default"
            onChange={(text) => {
              setCustom(text);
            }}
            onConfirm={(text) => {
              setCustom(text);
            }}
            disabled={true}
          />
          <Text
            style={[
              textStyle.caption,
              { color: Colors.disabled, textAlign: "left" },
            ]}
          >
            Type your custom alternative to smoking.
          </Text>
          {/* Pushed to the end of the screen */}
          <View style={{ marginTop: 130 }}>
            <Button
              title="F*** Yeah!"
              color="orange"
              textColor="white"
              onPress={() => {
                storeLocalAddictionData({ alternative: custom });
                router.push("/profile?push=true");
              }}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
