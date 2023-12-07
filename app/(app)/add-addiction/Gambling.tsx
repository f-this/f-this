import { View, Text, KeyboardAvoidingView, ScrollView, StyleSheet } from "react-native";
import Header from "../../../components/header";
import Button from "../../../components/button";
import { router } from "expo-router";
import React from "react";
import textStyle from "../../../constants/textStyles";
import Colors from "../../../constants/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { InfoCircle, Refresh } from "iconoir-react-native";
import { useProf } from "../../../lib/profile_ctx";

export default function Home() {
  const { storeLocalAddictionData } = useProf();
  const { interests } = useProf();
  let customInterest = "Sky diving";
  if (interests) {
    if (interests[0] != "") {
      customInterest = interests[0];
    }
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior={"padding"}>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
          }}
        >
          <Header
            title="F*** Gambling"
            subtitle="How about we replace it with something better?"
            onBack={() => router.back()}
            color="black"
          />
          <View style={{ width: "100%" }}>
            <View style={{ marginHorizontal: 34 }}>
              <View
                style={{
                  flexDirection: "column",
                  width: "100%",
                  marginBottom: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.mainText}>
                    Experts say this helps...
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      router.push("/add-addiction/customize");
                    }}
                  >
                    <InfoCircle
                      color={Colors.disabled}
                      width={25}
                      height={25}
                      strokeWidth={3}
                    />
                  </TouchableOpacity>
                </View>
                <Button
                  title="Puzzles"
                  onPress={() => {
                    storeLocalAddictionData({ alternative: "Puzzles" });
                    router.push("/profile?push=true");
                  }}
                  color="pink"
                  textColor="white"
                />

                <View style={{ height: 15 }} />

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={styles.mainText}
                  >
                    But this might work for you...
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        router.push("/add-addiction/customize");
                      }}
                      style={{
                        marginRight: 10,
                      }}
                    >
                      <Refresh
                        color={Colors.darkGray}
                        width={20}
                        height={20}
                        strokeWidth={3}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => {
                        router.push("/add-addiction/customize");
                      }}
                    >
                      <InfoCircle
                        color={Colors.disabled}
                        width={25}
                        height={25}
                        strokeWidth={3}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <Button
                  title={customInterest}
                  onPress={() => {
                    storeLocalAddictionData({ alternative: customInterest });
                    router.push("/profile?push=true");
                  }}
                  color="purple"
                  textColor="white"
                />

                <View style={{ height: 10 }} />

                <Button
                  title="I have a better idea..."
                  onPress={() => {
                    router.push("/add-addiction/customize");
                  }}
                  color="orange"
                  textColor="white"
                />

                <Text
                  style={[
                    textStyle.caption,
                    { color: Colors.darkGray },
                  ]}
                >
                  Pick one healthy alternative activity
                </Text>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainText: {
    color: Colors.darkGray,
    fontSize: 16,
    fontWeight: "900",
    fontStyle: "italic",
  },
});