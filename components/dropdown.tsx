import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Colors from "../constants/Colors";
import React from "react";

interface dropdownProps {
  options: string[];
  optionAmt: number;
  onPress: () => void;
  color?: keyof typeof Colors;
  textColor?: keyof typeof Colors;
  multiselect?: boolean;
}

export default function Dropdown(props: dropdownProps) {
  // Update textColor to be the textColor prop if it exists, otherwise use the default color
  let textStyle = StyleSheet.compose(styles.buttonText, {
    color: Colors[props.textColor ?? "black"],
  });
  const renderCodeInputs = () => {
    return props.options.slice(0, props.optionAmt).map((current, index) => (
      <TouchableOpacity
        key={index}
        style={styles.button}
        onPress={props.onPress}
      >
        <Text style={textStyle}>{current}</Text>
      </TouchableOpacity>
    ));
  };
  return (
    <View style={styles.container}>
      {props.optionAmt > 4 ? (
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
        >
          {renderCodeInputs()}
        </ScrollView>
      ) : (
        renderCodeInputs()
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    borderWidth: 1,
  },
  button: {
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "black",
    // Full width
    width: "100%",
    padding: 10,
    backgroundColor: "white",
  },
  buttonText: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: "900",
    textTransform: "capitalize",
    letterSpacing: -0.8,
  },
  scrollView: {
    maxHeight: 165,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
});
