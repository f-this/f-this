import { View, Text } from "react-native";
import Header from "../../../components/header";
import { router } from "expo-router";
import Button from "../../../components/button";
import TextBoxInput from "../../../components/textBox";
import textStyle from "../../../constants/textStyles";
import Colors from "../../../constants/Colors";
export default function Home() {
  return (
    <View>
      <Header
        showLogo
        title="Reporting Duty"
        color="black"
        onBack={() => router.back()}
      />

      <View style={{ width: "100%", paddingHorizontal: 34, paddingTop: 10 }}>
        <Text
          style={[
            textStyle.caption,
            { color: Colors.disabled, textAlign: "left" },
          ]}
        >
          Isn't anybody gonna hold me accountable?
        </Text>
        <Text
          style={[
            textStyle.caption,
            { color: Colors.disabled, textAlign: "left" },
          ]}
        >
          Uh- I'm Problematic - Bo Burnham or smthn
        </Text>

        <Text
          style={[textStyle.body, { color: Colors.black, textAlign: "left" }]}
        >
          Research shows tht sharing your progress wth others increases your
          chances of quitting for good. So do it!
        </Text>
        {/* Pushed to the end of the screen */}
        <View style={{ marginTop: 10 }}>
          <Button
            title="Add a friend"
            color="blue"
            textColor="white"
            onPress={() => {
              router.push("/generate-report/frequency");
            }}
          />
        </View>
      </View>
    </View>
  );
}
