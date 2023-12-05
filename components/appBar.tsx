import React from "react";
import { View } from "react-native";
import Colors from "../constants/Colors";
import Logo from "./logo";
import { HomeAltSlimHoriz } from "iconoir-react-native";
import { ProfileCircle } from "iconoir-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useGlobalSearchParams, usePathname } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function appBar() {
  const pathname = usePathname();
  const params = useGlobalSearchParams();

  if (params.hideAppBar) return (<View></View>);

  let home = pathname === "/";
  let addiction = pathname === "/addiction";
  let profile = pathname === "/profile";


  return (
    <View >
      <SafeAreaView
        edges={["bottom"]}
        style={{
          backgroundColor: Colors.white,
          opacity: 0.98,
          paddingHorizontal: 34,
          position: "absolute",
          top: -100,
          width: "100%"
        }}
      >
        {/*Row that contains app bar*/}
        {/*If show is true, show the app bar*/}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 15,
            marginTop: 20,
            marginBottom: 20,
            width: "100%",
          }}
        >
          {home ? (
            <HomeAltSlimHoriz
              color={Colors.black}
              width={30}
              height={30}
              strokeWidth={3}
            />
          ) : (
            <TouchableOpacity onPress={() => { router.push("/") }}>

              <HomeAltSlimHoriz
                color={"gray"}
                width={30}
                height={30}
                strokeWidth={3}
              />
            </TouchableOpacity>
          )}
          {addiction ? (
            <Logo
              style={{
                height: 20,
                width: 35,
              }}
              color={"black"}
            />
          ) : (
            <TouchableOpacity onPress={() => { router.push("/add-addiction?hideAppBar=true") }}>
              <Logo
                style={{
                  height: 20,
                  width: 35,
                }}
                color={"gray"}
              /></TouchableOpacity>

          )}
          {profile ? (
            <ProfileCircle
              color={Colors.black}
              width={30}
              height={30}
              strokeWidth={3}
            />
          ) : (
            <TouchableOpacity onPress={() => { router.push("/profile") }}>
              <ProfileCircle
                color={"gray"}
                width={30}
                height={30}
                strokeWidth={3}
              />
            </TouchableOpacity>
          )}

        </View>
      </SafeAreaView>
    </View>
  );
}
