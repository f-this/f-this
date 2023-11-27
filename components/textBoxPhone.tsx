import React, { useState } from "react";
import { TextInput, View, Image, StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";
import shadow from "../constants/shadows";

interface PhoneNumberInputProps {}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({}) => {
  const [inputText, setInputText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingVertical: 20,
    paddingHorizontal: 12,
    marginVertical: 10,
    // Full width
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    // Shadow
    ...shadow,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: "15%",
  },
  input: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: "900",
    fontFamily: "InterItalic",
  },
});

export default PhoneNumberInput;
