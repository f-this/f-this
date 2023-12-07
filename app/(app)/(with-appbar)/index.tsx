import { ScrollView, View, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../../constants/Colors";
import Svg, { Path } from "react-native-svg";
import Streak from "../../../components/dashboard/streak";
import Checkup from "../../../components/dashboard/daily-checkup";
import ButtonGroup from "../../../components/dashboard/button-group";
import Milestones from "../../../components/dashboard/milestones";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.svgContainer}>
        <Svg
          height="100%"
          viewBox="0 0 389 90"
          fill="none"
          preserveAspectRatio="none"
        >
          <Path d="M389 0L0 46V0H389Z" fill={Colors.black} />
          <Path d="M389 46.2825L0 90V46L389 0V46.2825Z" fill="#0BC4FF" />
        </Svg>
        <Streak />
      </View>
      <ScrollView>
        <Checkup />
        <ButtonGroup />
        <Milestones />
        <View style={styles.extraPadding} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  svgContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: 100,
  },
  extraPadding: {
    height: 120,
  },
});
