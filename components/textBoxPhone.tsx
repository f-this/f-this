import React, { useState } from "react";
import { TextInput, View, Image, StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";
import shadow from "../constants/shadows";
import { MaskedTextInput } from "react-native-mask-text";

interface PhoneNumberInputProps {
  onChange?: (text: string, isValid: boolean) => void;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = (
  props: PhoneNumberInputProps
) => {
  const [inputText, setInputText] = useState("");

  return (
    <View style={styles.container as any}>
      <Image
        source={require("../assets/images/americanflag.png")}
        style={styles.image}
      />
      <MaskedTextInput
        mask="+1 (999) 999-9999"
        style={styles.input}
        keyboardType="number-pad"
        placeholder="Enter your phone number"
        placeholderTextColor={Colors.darkGray}
        value={inputText}
        onChangeText={(_, text) => {
          setInputText(text);
          props.onChange?.(text, text.length == 10);
        }}
      />
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingVertical: 20,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
    ...shadow,
  },
  image: {
    marginRight: 10,
    marginLeft: 15,
    height: 20,
    width: 30,

  },
  input: {
    color: Colors.black,
    marginHorizontal: 10,
    fontSize: 16,
    flex: 1,
  },
});

export default PhoneNumberInput;
