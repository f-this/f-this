import React from "react";
import { View } from "react-native";
import Colors from "../constants/Colors";
import Logo from "./logo";
import { HomeAltSlimHoriz } from "iconoir-react-native";
import { ProfileCircle } from "iconoir-react-native";
import { router, useGlobalSearchParams, usePathname } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useAuth } from "../lib/auth_ctx";
import { BlurView } from "expo-blur";

export default function AppBar() {
  const pathname = usePathname();
  const params = useGlobalSearchParams();
  const auth = useAuth();

  if (params.hideAppBar) return (<View></View>);

  let home = pathname === "/";
  let addiction = pathname === "/addiction";
  let profile = pathname === "/profile" || pathname === "/reporting";


  return (
    <BlurView
      style={{
        paddingHorizontal: 34,
        paddingBottom: 20,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
      }}
      intensity={80} tint="light"
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
          <TouchableOpacity onPress={() => { router.push("/profile") }} onLongPress={
            () => {
              auth.signOut();
            }}>
            <ProfileCircle
              color={"gray"}
              width={30}
              height={30}
              strokeWidth={3}
            />
          </TouchableOpacity>
        )}
      </View>
    </BlurView>
  );
}
