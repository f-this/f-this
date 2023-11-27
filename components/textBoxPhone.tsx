import React, { useState } from "react";
import { TextInput, View, Image, StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";
import shadow from "../constants/shadows";

interface PhoneNumberInputProps {
  onChange?: (text: string) => void;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = (
  props: PhoneNumberInputProps
) => {
  const [inputText, setInputText] = useState("");
  //check that number is within format
  const validateNumber = (text: string) => {
    if (text.length < 11) {
      setInputText(text);
    }
    if (text.length == 10) {
      setInputText("+1 " + text);
    }
  };
  {
    /*IMPLEMENT MASKING LATER 
    const formatNumber = (text: string) => {
    let maskedInput = "";
    if (text.length >= 1) {
      maskedInput += `(${text.slice(0, 3)}`;
    }
    if (text.length > 3) {
      maskedInput += `) ${text.slice(3, 6)}`;
    }
    if (text.length > 6) {
      maskedInput += `-${text.slice(6, 10)}`;
    }
    
  }; */
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Image
          source={require("../assets/images/americanflag.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          value={inputText}
          onChangeText={(text) => validateNumber(text)}
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
    marginHorizontal: 20,
    // Full width
    alignItems: "center",
    justifyContent: "center",
    // Shadow
    ...shadow,
  },
  image: {
    marginRight: 10,
    maxHeight: 25,
    maxWidth: 40,
    aspectRatio: 1,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  input: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: "900",
    fontFamily: "InterItalic",
  },
});

export default PhoneNumberInput;
