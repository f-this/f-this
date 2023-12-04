import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header, { EndTriangle } from "../../components/header";
import React from "react";
import Colors from "../../constants/Colors";
import textStyle from "../../constants/textStyles";
import Logo from "../../components/logo";
import Svg, { Path } from "react-native-svg";
import shadow from "../../constants/shadows";
import Streak from "../../components/dashboard/streak";
import Checkup from "../../components/dashboard/daily-checkup";
import DashboardHeader from "../../components/dashboard/header";

export default function Home() {
  return (
    <View>
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
          <Checkup />
        </View>
      </View>
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
