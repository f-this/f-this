import { View, Text, StyleSheet } from "react-native";
import shadow from "../../constants/shadows";
import textStyle from "../../constants/textStyles";
import Colors from "../../constants/Colors";

export default function Checkup() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Daily Check-Up</Text>
        <Text style={styles.body}>
          Research shows that after 14 days without nicotine you will start
          feeling less urges to smoke
        </Text>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Fake News</Text>
          </View>
          <View style={styles.blueButton}>
            <Text style={styles.blueButtonText}>OMG so real</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 43,
    width: "100%",
    marginTop: 20,
  },
  innerContainer: {
    backgroundColor: Colors.white,
    height: 160,
    width: "100%",
    justifyContent: "center",
    ...shadow,
  },
  title: {
    color: Colors.black,
    marginHorizontal: 10,
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  body: {
    ...textStyle.body,
    color: Colors.black,
    marginTop: 5,
    marginHorizontal: 10,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  button: {
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    height: 40,
    flex: 1,
    backgroundColor: Colors.white,
    ...shadow,
  },
  blueButton: {
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 40,
    flex: 1,
    backgroundColor: Colors.blue,
    ...shadow,
  },
  buttonText: {
    ...textStyle.body,
    color: Colors.black,
    marginTop: 0,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  blueButtonText: {
    ...textStyle.body,
    marginTop: 0,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
  },
});