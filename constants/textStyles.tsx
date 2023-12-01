import { StyleSheet } from "react-native";
import Colors from "./Colors";

const textStyle = StyleSheet.create({
  heading: {
    fontStyle: "italic",
    fontSize: 50,
    fontWeight: "bold",
    letterSpacing: -2.5,
    color: Colors.white,
  },
  subtitle: {
    fontStyle: "italic",
    fontSize: 38,
    fontWeight: "700",
    color: Colors.white,
    marginTop: 20,
  },
  body: {
    fontSize: 25,
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
