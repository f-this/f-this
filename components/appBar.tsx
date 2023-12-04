import React from "react";
import { View, SafeAreaView } from "react-native";
import Svg, { Path } from "react-native-svg";
import Colors from "../constants/Colors";
import Logo from "./logo";
import { HomeAltSlimHoriz } from "iconoir-react-native";
import { ProfileCircle } from "iconoir-react-native";

interface appBarProps {
  color?: keyof typeof Colors;
  show?: boolean;
  home?: boolean;
  addiction?: boolean;
  profile?: boolean;
}

export default function appBar(props: appBarProps) {
  return (
    <View>
      <SafeAreaView
        style={{
          backgroundColor: Colors[props.color ?? "white"],
          paddingHorizontal: 34,
        }}
      >
        {/*Row that contains app bar*/}
        {/*If show is true, show the app bar*/}
        {props.show && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 34,
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            {props.home ? (
              <HomeAltSlimHoriz
                style={{
                  height: 36,
                  width: 51,
                  borderColor: "black",
                }}
              />
            ) : (
              <HomeAltSlimHoriz
                style={{
                  height: 36,
                  width: 51,
                }}
              />
            )}
            {props.addiction ? (
              <Logo
                style={{
                  height: 36,
                  width: 51,
                  shadowColor: "black",
                }}
              />
            ) : (
              <Logo
                style={{
                  height: 36,
                  width: 51,
                  color: Colors.black,
                }}
              />
            )}
            {props.profile ? (
              <ProfileCircle
                style={{
                  height: 36,
                  width: 51,
                  shadowColor: "black",
                }}
              />
            ) : (
              <ProfileCircle
                style={{
                  height: 36,
                  width: 51,
                }}
              />
            )}
          </View>
        )}
      </SafeAreaView>
    </View>
  );
}
