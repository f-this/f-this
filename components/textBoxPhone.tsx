import React, { useState } from "react";
import { TextInput, View, Image, StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";
import shadow from "../constants/shadows";

interface PhoneNumberInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  value,
  onChange,
}) => {
  // Remove non-numeric characters from input
  const cleanedInput = value.replace(/[^0-9]/g, "");

  // Format the input as a US phone number
  let formattedNumber = "";
  if (cleanedInput.length >= 3) {
    formattedNumber += `(${cleanedInput.slice(0, 3)})`;
  }
  if (cleanedInput.length > 3) {
    formattedNumber += `-${cleanedInput.slice(3, 6)}`;
  }
  if (cleanedInput.length > 6) {
    formattedNumber += `-${cleanedInput.slice(6, 10)}`;
  }

  const handleInputChange = (text: string) => {
    // Remove non-numeric characters from input
    const cleanedInput = text.replace(/[^0-9]/g, "");

    // Limit the length to a standard phone number length
    if (cleanedInput.length <= 10) {
      onChange(cleanedInput);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        {/*<Image
          source={require("./assets/images/americanflag.png")}
          style={styles.flag}
  />*/}
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          value={formattedNumber}
          onChangeText={handleInputChange}
        />
      </View>
      <Text style={styles.helperText}>Format: (XXX) XXX-XXXX</Text>
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
    height: 67,
    width: 321,
    borderColor: "black",
    borderWidth: 1,
  },
  flag: {
    width: 40,
    height: 30,
    marginRight: 8,
  },
  input: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: "900",
    fontFamily: "InterItalic",
  },
  helperText: {
    marginTop: 8,
    color: "gray",
  },
});

export default PhoneNumberInput;
