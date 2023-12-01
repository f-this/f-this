import { View, Text } from "react-native";
import Header from "../components/header";
import { router } from "expo-router";
import Svg, { Path } from "react-native-svg";
import TextButton from "../components/textButton";
import Button from "../components/button";
import TextBoxInput from "../components/textBox";
export default function Home() {
  return (
    <View>
      <Header
        title="You think you got a better idea?"
        body={"Let's see what you have..."}
        color="orange"
        onBack={() => router.back()}
        action={
          // Buttons go here
          <View style={{ width: "100%", paddingTop: 10 }}>
            <TextBoxInput
              placeholder="Enter your alternative habit"
              keyboardType="default"
              onConfirm={() => {
                router.push("/3interests");
              }}
            />
          </View>
        }
      />
      <View style={{ width: "100%", paddingHorizontal: 34, paddingTop: 10 }}>
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
  );
}
