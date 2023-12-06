import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Colors from "../constants/Colors";
import React from "react";
import shadow from "../constants/shadows";
import Checkbox, { CheckboxNoState } from "./checkbox";

interface dropdownProps {
  options: string[];
  onPress: (value: string) => void;
  onMultiselect?: (values: string[]) => void;
  color?: keyof typeof Colors;
  textColor?: keyof typeof Colors;
  maxCount?: number;
}

export default function Dropdown(props: dropdownProps) {
  let [selected, setSelected] = React.useState<string[]>([]);

  // Update textColor to be the textColor prop if it exists, otherwise use the default color
  let textStyle = StyleSheet.compose(styles.buttonText, {
    color: Colors[props.textColor ?? "black"],
  });

  return (
    <View style={styles.container as any}>
      <FlatList
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        data={props.options}
        overScrollMode="never"
        keyExtractor={(item, _) => item}
        scrollEnabled={props.options.length > 3}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (props.onMultiselect) {
                let selectedNew = [...selected];
                if (selected.length != 0 && selected.includes(item)) {
                  selectedNew.splice(selectedNew.indexOf(item), 1);
                } else if (props.maxCount && selected.length >= props.maxCount) {
                  // Replace the last item with the new one
                  selectedNew.splice(0, 1, item);
                }
                else {
                  selectedNew.push(item);
                }
                setSelected(selectedNew);
                props.onMultiselect(selectedNew);
              } else {
                setSelected([item]);
                props.onPress(item);
              }
            }}
          >
            <Text style={textStyle}>{item}</Text>
            {props.onMultiselect && (
              <CheckboxNoState
                initialState={selected.includes(item)}
                onPress={() => { }}
              />
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: Colors.white,
    ...shadow,
  },
  button: {
    borderWidth: 1,
    borderColor: "black",
    // Full width
    width: "100%",
    padding: 12,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonText: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: "500",
    textTransform: "capitalize",
    letterSpacing: -0.8,
  },
  scrollView: {
    maxHeight: 250,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
});
