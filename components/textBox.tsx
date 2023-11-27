import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  ViewStyle,
  FlexAlignType,
  ImageStyle,
  TextStyle,
} from "react-native";
import Colors from "../constants/Colors";
import shadow from "../constants/shadows";

interface textBoxProps {
  alignment?: string;
  onChange?: (text: string) => void;
  placeholder?: string;
  height?: number;
  width?: number;
}

const TextBoxInput: React.FC<textBoxProps> = (props: textBoxProps) => {
  const [inputText, setInputText] = useState("");
  let textBoxStyle = StyleSheet.compose(styles.container, {
    alignItems: props.alignment as FlexAlignType,
    height: props.height,
    width: props.width,
  });

  return (
    <View style={textBoxStyle}>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder={props.placeholder}
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
    marginHorizontal: 20,
    // Full width
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
    marginHorizontal: 10,
  },
  input: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: "900",
    fontFamily: "InterItalic",
  },
});

export default TextBoxInput;
