import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TextStyle,
  ViewStyle,
  Text,
} from "react-native";
import Colors from "../constants/Colors";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import shadow from "../constants/shadows";

interface VerificationCodeInputProps {
  onChange: (code: string, isValid: boolean) => void;
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
    props.onChange(newCode, newCode.length === 6);

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

  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: 6 });
  const [propsCell, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={styles.container}>
      <CodeField
        ref={ref}
        {...propsCell}
        value={value}
        onChangeText={setValue}
        cellCount={6}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[
              styles.cell,
              isFocused && styles.focusCell,
              index === 3 && { marginLeft: 30 },
            ]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  codeInput: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: Colors.black,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  separator: {
    width: 10,
  },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    flex: 1,
    height: 70,
    lineHeight: 38,
    fontSize: 32,
    fontStyle: "italic",
    fontWeight: "bold",
    paddingTop: 15,
    textAlign: "center",
    backgroundColor: Colors.white,
    marginBottom: 4,
    ...shadow,
  },
  focusCell: {
    borderColor: "#000",
  },
});

export default VerificationCodeInput;
