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
import { User } from "iconoir-react-native";

interface contactButtonProps {
  leadingIcon?: JSX.Element;
  onPress: () => void;
  color?: keyof typeof Colors;
  text: string;
  disabled?: boolean;
  textColor?: keyof typeof Colors;
  showIcon: boolean;
}

export default function contactButton(props: contactButtonProps) {
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
  });
  let textStyle = StyleSheet.compose(styles.buttonText, {
    color: props.disabled ? Colors.white : Colors[props.textColor ?? "black"],
  });

  return (
    <GestureDetector gesture={tap}>
      <Animated.View style={[buttonStyle, animatedStyle]}>
        {props.showIcon && (
          <User color={Colors.black} width={30} height={25} strokeWidth={3} />
        )}
        <Text style={textStyle}> {props.text}</Text>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.white,
    paddingVertical: 20,
    paddingHorizontal: 12,
    marginTop: 10,
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
    fontSize: 20,
    fontWeight: "900",
    fontStyle: "italic",
    paddingLeft: 10,
  },
});
