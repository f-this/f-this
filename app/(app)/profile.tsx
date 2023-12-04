import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header";
import Button from "../../components/button";
import TextButton from "../../components/textButton";
import { router } from "expo-router";
import { useAuth } from "../../lib/auth_ctx";
import Colors from "../../constants/Colors";
import textStyle from "../../constants/textStyles";
import { Bold } from "iconoir-react-native";

export default function Home() {
  return (
    <View>
      <Header
        color={"black"}
        action={
          <View style={{ width: "100%" }}>
            <Image
              style={styles.image}
              source={require("../../assets/images/Ellipse.png")}
            />
            <Text
              style={StyleSheet.compose(textStyle.body, {
                fontSize: 32,
                alignSelf: "center",
              })}
            >
              insert name
            </Text>
            <Text
              style={StyleSheet.compose(textStyle.body, {
                fontSize: 16,
                alignSelf: "center",
              })}
            >
              Are you actually making progress? Or is it all just talk?
            </Text>
          </View>
        }
      />
      <Text
        style={StyleSheet.compose(textStyle.body, {
          fontSize: 18,
          marginLeft: 40,
          color: Colors.black,
          fontWeight: "bold",
        })}
      >
        Your Preferences
      </Text>
      <Text style={StyleSheet.compose(textStyle.body, styles.prompt)}>
        You are currently working on quitting
      </Text>
      <Text style={StyleSheet.compose(textStyle.body, styles.answer)}>
        insert addiction
      </Text>
      <Text style={StyleSheet.compose(textStyle.body, styles.prompt)}>
        You have been working on this for
      </Text>
      <Text style={StyleSheet.compose(textStyle.body, styles.answer)}>
        insert time
      </Text>
      <View style={styles.row}>
        <Text style={StyleSheet.compose(textStyle.body, styles.prompt)}>
          Location Access:
        </Text>
        <Text style={StyleSheet.compose(textStyle.body, styles.answer)}>
          PREFERENCE
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={StyleSheet.compose(textStyle.body, styles.prompt)}>
          Spotify Integration:
        </Text>
        <Text style={StyleSheet.compose(textStyle.body, styles.answer)}>
          PREFERENCE
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={StyleSheet.compose(textStyle.body, styles.prompt)}>
          Last Report Sent Out:
        </Text>
        <Text style={StyleSheet.compose(textStyle.body, styles.answer)}>
          PREFERENCE
        </Text>
      </View>
      <Button title="Edit Preferences" onPress={() => console.log("hello")} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
  },
  prompt: {
    fontSize: 15,
    marginLeft: 40,
    color: Colors.black,
    fontWeight: "normal",
  },
  answer: {
    fontSize: 16,
    marginRight: 40,
    color: Colors.black,
    textAlign: "right",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
