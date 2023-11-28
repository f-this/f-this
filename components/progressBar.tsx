import React from "react";
import { View, StyleSheet } from "react-native";

interface ProgressBarProps {
  fillPercentage: number; // A number between 0 and 100
}

export default function ProgressBar(props: ProgressBarProps) {
  // Calculate the width of the filled portion
  //right now 360 is the width of the progress bar may need to be adjusted
  const fillWidth = (props.fillPercentage / 100) * 360;
  return (
    <View style={[styles.progressBar]}>
      <View style={[styles.fillBar, { width: fillWidth }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  progressBar: {
    backgroundColor: "white",
    height: 10,
    width: "100%",
  },
  fillBar: {
    height: "100%",
    backgroundColor: "grey",
    maxWidth: "100%",
  },
});
