import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import shadow from "../constants/shadows";
import React from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

interface ButtonProps {
  children?: React.ReactNode;
  onPress: () => void;
  color?: keyof typeof Colors;
  marginTop?: number;
}

export default function FabButton(props: ButtonProps) {
  // Update backgroundColor to be the color prop if it exists, otherwise use the default color
  let buttonStyle = StyleSheet.compose(styles.button, {
    backgroundColor: Colors[props.color ?? "white"],
    marginTop: props.marginTop,
  });

  const shadowOffsetWidth = useSharedValue(3);
  const shadowOffsetHeight = useSharedValue(4);


  const animatedStyle = useAnimatedStyle(() => {
    return {
      shadowOffset: {
        width: shadowOffsetWidth.value,
        height: shadowOffsetHeight.value,
      },
    };
  });

  const tap = Gesture.Tap().onBegin(() => {
    shadowOffsetWidth.value = withTiming(0, { duration: 50 });
    shadowOffsetHeight.value = withTiming(0, { duration: 50 });
  }).onEnd(() => {
    props.onPress();
  }).onFinalize(() => {
    shadowOffsetWidth.value = withTiming(3);
    shadowOffsetHeight.value = withTiming(4);
  }).runOnJS(true);


  return (
    <GestureDetector gesture={tap}>
      <Animated.View style={[buttonStyle, animatedStyle]}>
        {props.children}
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.white,
    padding: 15,
    width: 54,
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    // Shadow
    ...shadow,
  },
  buttonText: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: "900",
    fontFamily: "InterItalic",
  },
});
