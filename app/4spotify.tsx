import { View } from "react-native";
import Header from "../components/header";
import { router } from "expo-router";
import TextButton from "../components/textButton";
import React from "react";
import Button from "../components/button";
import { Path, Svg } from "react-native-svg";
import { useProf } from "../lib/profile_ctx";

export default function Home() {
  const { storeLocal } = useProf();
  const handleConfirm = () => {
    storeLocal({ spotifyEnabled: true });
    router.push("/5location");
  };

  return (
    <View>
      <Header
        showLogo
        title="No wayyyy, I love Animals too!"
        body={
          "That’s crazyyy, we have so much in common!!\n\nI bet we even have the same music taste too, we should totally make a blend!"
        }
        color="black"
        onBack={() => router.back()}
        action={
          // Buttons go here
          <View style={{ width: "100%", paddingTop: 10 }}>
            <Button
              title="Connect to Spotify"
              color={"spotify"}
              onPress={handleConfirm}
              leadingIcon={
                <Svg width="23" height="23" viewBox="0 0 23 23" fill="none">
                  <Path
                    d="M11.4648 0C5.13311 0 0 5.13297 0 11.4647C0 17.7967 5.13311 22.9292 11.4648 22.9292C17.7972 22.9292 22.9298 17.7967 22.9298 11.4647C22.9298 5.13338 17.7972 0.000547616 11.4647 0.000547616L11.4648 0ZM16.7225 16.5354C16.5171 16.8721 16.0763 16.9789 15.7395 16.7722C13.0477 15.128 9.65904 14.7556 5.66827 15.6674C5.2837 15.755 4.90037 15.514 4.81275 15.1293C4.72472 14.7446 4.96471 14.3613 5.35024 14.2737C9.7175 13.2755 13.4636 13.7055 16.4857 15.5524C16.8224 15.7591 16.9292 16.1986 16.7225 16.5354ZM18.1258 13.4132C17.867 13.8342 17.3167 13.967 16.8964 13.7083C13.8146 11.8137 9.11704 11.2651 5.47195 12.3715C4.99921 12.5143 4.49992 12.2479 4.35645 11.776C4.21407 11.3033 4.48062 10.8049 4.95253 10.6612C9.11621 9.39783 14.2924 10.0098 17.8314 12.1845C18.2517 12.4433 18.3845 12.9935 18.1258 13.4132ZM18.2463 10.1626C14.5512 7.96786 8.45483 7.76606 4.92693 8.83679C4.36042 9.00861 3.76132 8.6888 3.58964 8.12229C3.41796 7.5555 3.7375 6.95682 4.30442 6.78459C8.3542 5.55518 15.0865 5.79271 19.3407 8.3182C19.8513 8.62062 20.0184 9.27872 19.7158 9.7876C19.4146 10.2972 18.7547 10.4651 18.2468 10.1626H18.2463Z"
                    fill="#292929"
                  />
                </Svg>
              }
            />
            <TextButton
              title="Ummmm... No."
              onPress={() => {
                storeLocal({ spotifyEnabled: false });
                router.push("/5location");
              }}
            />
          </View>
        }
        showProgress
        totalSteps={8}
        currentStep={4}
      />
    </View>
  );
}
