import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import Header from "../../../components/header";
import { router } from "expo-router";
import Button from "../../../components/button";
import TextBoxInput from "../../../components/textBox";
import textStyle from "../../../constants/textStyles";
import Colors from "../../../constants/Colors";
export default function Home() {
  return (
    <ScrollView >
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
            onConfirm={() => {
              router.push("/3interests");
            }}
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
                router.push("/1age");
              }}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView >
  );
}
