import React from "react";
import { View, StyleSheet, ViewStyle, DimensionValue } from "react-native";
import shadow, { shadowSmall } from "../constants/shadows";

interface ProgressBarProps {
  fillPercentage: number; // A number between 0 and 100
  style?: ViewStyle;
}

export default function ProgressBar(props: ProgressBarProps) {
  // Calculate the width of the filled portion
  const fillWidth = `${props.fillPercentage - 2}%` as DimensionValue;

  // Add style to the progress bar
  let progressBarStyle = StyleSheet.compose(
    styles.progressBar,
    props.style ?? {}
  );

  return (
    <View style={progressBarStyle}>
      <View style={[styles.fillBar, { width: fillWidth }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  progressBar: {
    backgroundColor: "white",
    // Full width of parent (100% does not work here)
    // Height of 11
    width: "100%",
    flex: 1,
    ...shadowSmall
  },
  fillBar: {
    height: 9,
    margin: 1,
    marginRight: 3,
    backgroundColor: "grey",
  },
});
