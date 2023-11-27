import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from "react-native";
import Colors from "../constants/Colors";

interface VerificationCodeInputProps {
  onChange: (code: string) => void;
}

const VerificationCodeInput: React.FC<VerificationCodeInputProps> = (
  props: VerificationCodeInputProps
) => {
  const [verificationCode, setVerificationCode] = useState("");
  const inputRefs: React.RefObject<TextInput>[] = [];

  const handleCodeChange = (index: number, value: string) => {
    let newCode = verificationCode;

    // Update the code at the specific index
    if (value.length === 1) {
      newCode =
        newCode.substring(0, index) + value + newCode.substring(index + 1);
    } else {
      newCode = newCode.substring(0, index) + newCode.substring(index + 1);
    }

    // Update the state and notify the parent component
    setVerificationCode(newCode);
    props.onChange(newCode);

    // Move focus to the next input, if available
    if (value.length === 1 && inputRefs[index + 1]) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const renderCodeInputs = () => {
    const codeInputs = [];

    for (let i = 0; i < 6; i++) {
      const isLastInput = 5;
      const inputRef = React.createRef<TextInput>();
      inputRefs.push(inputRef);

      codeInputs.push(
        <TextInput
          key={i}
          ref={inputRef}
          style={styles.codeInput}
          value={verificationCode[i] || ""}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(value) => handleCodeChange(i, value)}
          autoFocus={i === 0}
        />
      );

      if (!isLastInput) {
        // Add a separator between code inputs
        codeInputs.push(
          <View style={styles.separator} key={`separator-${i}`} />
        );
      }
    }

    return codeInputs;
  };

  return <View style={styles.container}>{renderCodeInputs()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  codeInput: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: Colors.black,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  separator: {
    width: 10,
  },
});

export default VerificationCodeInput;
