import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
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
  const { interests } = useProf();
  const [selected, setSelected] = React.useState<string[]>([]);
  let customInterest = "Chewing Gum";
  if (interests) {
    if (interests[0] != "") {
      customInterest = interests[0];
    }
  }

  return (
    <ScrollView >
      <KeyboardAvoidingView behavior={"padding"}>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
          }}
        >
          <Header
            title="F*** Sugar"
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
                  style={{ flexDirection: "row", justifyContent: "space-between" }}
                >
                  <Text
                    style={[
                      {
                        color: Colors.darkGray,
                        fontSize: 16,
                        fontWeight: "900",
                        fontStyle: "italic",
                      },
                    ]}
                  >
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
                  title="Coffee"
                  onPress={() => { }}
                  color="pink"
                  textColor="white"
                />

                <View style={{ height: 15 }} />

                <View
                  style={{ flexDirection: "row", justifyContent: "space-between" }}
                >
                  <Text
                    style={[
                      {
                        color: Colors.darkGray,
                        fontSize: 16,
                        fontWeight: "900",
                        fontStyle: "italic",
                      },
                    ]}
                  >
                    But this might also work for you...
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
                  onPress={() => { }}
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
                    {
                      color: Colors.darkGray,
                    },
                  ]}
                >
                  Pick one healthy alternative activity
                </Text>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView >
  );
}
