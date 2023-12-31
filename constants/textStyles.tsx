import { StyleSheet } from "react-native";
import Colors from "./Colors";

const textStyle = StyleSheet.create({
  heading: {
    fontStyle: "italic",
    fontSize: 50,
    fontWeight: "bold",
    letterSpacing: -2.75,
    color: Colors.white,
  },
  subtitle: {
    fontStyle: "italic",
    fontSize: 36,
    fontWeight: "700",
    color: Colors.white,
    marginTop: 20,
  },
  body: {
    fontSize: 18,
    fontWeight: "500",
    color: Colors.white,
    marginTop: 20,
    letterSpacing: -0.9,
  },
  caption: {
    fontSize: 15,
    fontWeight: "400",
    color: Colors.white,
    marginTop: 15,
    letterSpacing: -0.9,
    fontStyle: "italic",
  },
});

export default textStyle;
