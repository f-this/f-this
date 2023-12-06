import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/profile/header";
import Button from "../../../components/button";
import TextButton from "../../../components/textButton";
import { router } from "expo-router";
import { useAuth } from "../../../lib/auth_ctx";
import Colors from "../../../constants/Colors";
import textStyle from "../../../constants/textStyles";
import { Bold, Safe } from "iconoir-react-native";
import AppBar from "../../../components/appBar";
import { useProf } from "../../../lib/profile_ctx";

export default function Home() {
  const {
    addiction,
    alternative,
    locationEnabled,
    spotifyEnabled,
    updateUserProfile,
  } = useProf();
  updateUserProfile({ addiction: addiction, alternative: alternative });

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior={"padding"}>
        <Header />
        <View style={{ marginLeft: 40, marginRight: 40, marginBottom: 100 }}>
          <Text
            style={StyleSheet.compose(textStyle.body, {
              fontSize: 18,
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
            {addiction ? addiction : "Select an addiction"}
          </Text>
          <Text style={StyleSheet.compose(textStyle.body, styles.prompt)}>
            You last chose the alternative of
          </Text>
          <Text style={StyleSheet.compose(textStyle.body, styles.answer)}>
            {alternative ? alternative : "Choose your first alternative"}{" "}
          </Text>
          <View style={styles.row}>
            <Text style={StyleSheet.compose(textStyle.body, styles.prompt)}>
              You have been working on this for
            </Text>
            <Text style={StyleSheet.compose(textStyle.body, styles.answer)}>
              14 days
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={StyleSheet.compose(textStyle.body, styles.prompt)}>
              Location Access:
            </Text>
            <Text style={StyleSheet.compose(textStyle.body, styles.answer)}>
              {locationEnabled ? "Enabled" : "Disabled"}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={StyleSheet.compose(textStyle.body, styles.prompt)}>
              Spotify Integration:
            </Text>
            <Text style={StyleSheet.compose(textStyle.body, styles.answer)}>
              {spotifyEnabled ? "Enabled" : "Disabled"}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={StyleSheet.compose(textStyle.body, styles.prompt)}>
              Last Report Sent Out:
            </Text>
            <Text style={StyleSheet.compose(textStyle.body, styles.answer)}>
              a week ago
            </Text>
          </View>
          <Button
            title="Edit My Preferences"
            color="blue"
            onPress={() => console.log("hello")}
            textColor="white"
            marginTop={30}
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
  },
  prompt: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: "normal",
  },
  answer: {
    fontSize: 18,
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
