import { Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import shadow from "../constants/shadows";
import React from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

interface ButtonProps {
  leadingIcon?: JSX.Element;
  title: string;
  onPress: () => void;
  color?: keyof typeof Colors;
  textColor?: keyof typeof Colors;
  disabled?: boolean;
  height?: number;
  marginTop?: number;
  style?: any;
  textStyle?: any;
}

export default function Button(props: ButtonProps) {
  const shadowOffsetWidth = useSharedValue(props.disabled ? 0 : 3);
  const shadowOffsetHeight = useSharedValue(props.disabled ? 0 : 4);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      shadowOffset: {
        width: shadowOffsetWidth.value,
        height: shadowOffsetHeight.value,
      },
    };
  });

  const tap = Gesture.Tap()
    .onBegin(() => {
      if (props.disabled) return;
      shadowOffsetWidth.value = withTiming(0, { duration: 50 });
      shadowOffsetHeight.value = withTiming(0, { duration: 50 });
    })
    .onEnd(() => {
      if (props.disabled) return;
      props.onPress();
    })
    .onFinalize(() => {
      if (props.disabled) return;
      shadowOffsetWidth.value = withTiming(3);
      shadowOffsetHeight.value = withTiming(4);
    })
    .runOnJS(true);

  // Update backgroundColor to be the color prop if it exists, otherwise use the default color
  let buttonStyle = StyleSheet.compose(styles.button, {
    backgroundColor: props.disabled
      ? Colors.disabled
      : Colors[props.color ?? "white"],
    marginTop: props.marginTop,
    ...props.style,
  });
  // Update textColor to be the textColor prop if it exists, otherwise use the default color
  let textStyle = StyleSheet.compose(styles.buttonText, {
    color: props.disabled ? Colors.white : Colors[props.textColor ?? "black"],
    height: props.height,
    flex: 1,
    textAlign: "center",
  });

  return (
    <GestureDetector gesture={tap}>
      <Animated.View style={[buttonStyle, animatedStyle]}>
        {props.leadingIcon}
        <Text style={[textStyle, props.textStyle]}>{props.title}</Text>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.white,
    paddingVertical: 20,
    paddingHorizontal: 12,
    marginVertical: 10,
    // Full width
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    // Shadow
    ...shadow,
  },
  buttonText: {
    color: Colors.darkGray,
    fontSize: 16,
    fontWeight: "900",
    fontStyle: "italic",
  },
});
