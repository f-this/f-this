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
import { KeyboardType } from "react-native";
import FabButton from "./fab";
import { ArrowRight } from "iconoir-react-native";

interface textBoxProps {
  alignment?: FlexAlignType;
  keyboardType?: KeyboardType;
  onChange?: (text: string) => void;
  placeholder?: string;
  height?: number;
  width?: number;
  onConfirm?: () => void;
}

const TextBoxInput: React.FC<textBoxProps> = (props: textBoxProps) => {
  const [inputText, setInputText] = useState("");
  let textBoxStyle = StyleSheet.compose(styles.container, {
    alignItems: props.alignment,
    height: props.height,
    width: props.width,
  });

  return (
    <View style={styles.surround}>
      <View style={textBoxStyle}>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder={props.placeholder}
            value={inputText}
            placeholderTextColor={Colors.darkGray}
            keyboardType={props.keyboardType}
            onChangeText={(text) => setInputText(text)}
            clearButtonMode="never"
          />
        </View>
      </View>
      {props.onConfirm && inputText && (
        <FabButton onPress={props.onConfirm}>
          <ArrowRight color="black" width={30} height={30} strokeWidth={2} />
        </FabButton>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingVertical: 20,
    paddingHorizontal: 12,
    marginLeft: 20,
    // Full width
    justifyContent: "center",
    // Shadow
    ...shadow,
  },
  surround: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "flex-end",
    alignItems: "flex-end",
    paddingVertical: 20,
  },
  image: {
    marginRight: 10,
    maxHeight: 25,
    maxWidth: 40,
    aspectRatio: 1,
  },
  inputBox: {
    flexDirection: "row",
  },
  input: {
    color: Colors.black,
    marginHorizontal: 10,
    fontSize: 16,
    width: "100%",
  },
});

export default TextBoxInput;
