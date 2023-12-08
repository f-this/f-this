import { ScrollView, View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../../constants/Colors";
import Svg, { Path } from "react-native-svg";
import Streak from "../../../components/dashboard/streak";
import Checkup from "../../../components/dashboard/daily-checkup";
import ButtonGroup from "../../../components/dashboard/button-group";
import DashboardHeader from "../../../components/dashboard/header";
import Milestones from "../../../components/dashboard/milestones";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <DashboardHeader />
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            height: 100,
          }}
        >
          <Svg
            style={{
              // Should fill the width of the screen
              width: "100%",
              height: 100,
            }}
            viewBox="0 0 389 90"
            fill="none"
            preserveAspectRatio="none"
          >
            <Path d="M389 0L0 46V0H389Z" fill={Colors.black} />
            <Path d="M389 46.2825L0 90V46L389 0V46.2825Z" fill="#0BC4FF" />
          </Svg>
          <Streak />
        </View>
      </View>
      <ScrollView>
        <Checkup />
        <ButtonGroup />
        <Milestones />
        {/**Extra Padding for the app bar */}
        <View style={{ height: 120 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    width: 100,
    backgroundColor: "red",
  },
});
