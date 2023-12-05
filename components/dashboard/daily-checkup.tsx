import { View, Text, StyleSheet } from "react-native";
import shadow from "../../constants/shadows";
import textStyle from "../../constants/textStyles";
import Colors from "../../constants/Colors";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

export default function Checkup() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer as any}>
        <Text style={styles.title}>Daily Check-Up</Text>
        <Text style={styles.body}>
          Research shows that after 14 days without nicotine you will start
          feeling less urges to smoke
        </Text>

        <View style={styles.buttonContainer}>
          <SlimButton title="Fake News" onPress={() => { }} white />
          <SlimButton title="OMG so real" onPress={() => { }} white={false} />
        </View>
      </View>
    </View>
  );
}


function SlimButton(props: { title: string, onPress: () => void, white: boolean }) {
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

  const tap = Gesture.Tap()
    .onBegin(() => {
      shadowOffsetWidth.value = withTiming(0, { duration: 50 });
      shadowOffsetHeight.value = withTiming(0, { duration: 50 });
    })
    .onEnd(() => {
      props.onPress();
    })
    .onFinalize(() => {
      shadowOffsetWidth.value = withTiming(3);
      shadowOffsetHeight.value = withTiming(4);
    })
    .runOnJS(true);

  return (
    <GestureDetector gesture={tap}>
      <Animated.View style={[props.white ? styles.button : styles.blueButton as any, animatedStyle]}>
        <Text style={props.white ? styles.buttonText : styles.blueButtonText}>{props.title}</Text>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 43,
    width: "100%",
    marginTop: 20,
  },
  innerContainer: {
    backgroundColor: Colors.white,
    height: 160,
    width: "100%",
    justifyContent: "center",
    ...shadow,
  },
  title: {
    color: Colors.black,
    marginHorizontal: 10,
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  body: {
    ...textStyle.body,
    color: Colors.black,
    marginTop: 5,
    marginHorizontal: 10,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  button: {
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    height: 40,
    flex: 1,
    backgroundColor: Colors.white,
    ...shadow,
  },
  blueButton: {
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 40,
    flex: 1,
    backgroundColor: Colors.blue,
    ...shadow,
  },
  buttonText: {
    ...textStyle.body,
    color: Colors.black,
    marginTop: 0,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  blueButtonText: {
    ...textStyle.body,
    marginTop: 0,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
  },
});