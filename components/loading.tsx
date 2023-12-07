import { View } from "react-native";
import Header from "./header";
import React from "react";

export default function LoadingPage() {
  return (
    <View>
      <Header
        showLogo
        title="Welcome,"
        subtitle="Just a sec."
        body={"We are loding some things, it will just just be a couple seconds..."}
        color="blue"
      />
    </View>
  );
}
