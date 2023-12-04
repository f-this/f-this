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

  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: 6 });
  const [propsCell, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleCodeChange = (value: string) => {
    setValue(value);
    props.onChange(value, value.length == 6);
  };

  return (
    <View style={styles.container}>
      <CodeField
        ref={ref}
        {...propsCell}
        value={value}
        onChangeText={handleCodeChange}
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
    fontSize: 16,
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
