import { View, Text } from "react-native";
import shadow from "../../constants/shadows";
import textStyle from "../../constants/textStyles";
import Colors from "../../constants/Colors";

export default function Checkup() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-end",
        paddingHorizontal: 43,
        width: "100%",
        position: "absolute",
        top: 120,
      }}
    >
      <View
        style={{
          backgroundColor: Colors.white,
          height: 160,
          width: 305,
          justifyContent: "center",
          ...(shadow as any),
        }}
      >
        <Text
          style={[
            {
              color: Colors.black,
              marginTop: 0,
              marginHorizontal: 10,
              textAlign: "left",
              fontSize: 18,
              fontWeight: "bold",
              fontStyle: "italic",
            },
          ]}
        >
          Daily Check-Up
        </Text>
        <Text
          style={[
            textStyle.body,
            {
              color: Colors.black,
              marginTop: 5,
              marginHorizontal: 10,
              textAlign: "left",
            },
          ]}
        >
          Research shows that after 14 days without nicotine you will start
          feeling less urges to smoke
        </Text>

        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 10,
              paddingVertical: 5,
              marginRight: 10,
              height: 40,
              width: 120,
              flex: 1,
              backgroundColor: Colors.white,
              ...(shadow as any),
            }}
          >
            <Text
              style={[
                textStyle.body,
                {
                  color: Colors.black,
                  marginTop: 0,
                  textAlign: "center",
                  fontSize: 18,
                  fontWeight: "bold",
                  fontStyle: "italic",
                },
              ]}
            >
              Fake News
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 10,
              paddingVertical: 5,
              height: 40,
              width: 120,
              flex: 1,
              backgroundColor: Colors.blue,
              ...(shadow as any),
            }}
          >
            <Text
              style={[
                textStyle.body,
                {
                  color: Colors.white,
                  marginTop: 0,
                  textAlign: "center",
                  fontSize: 18,
                  fontWeight: "bold",
                  fontStyle: "italic",
                },
              ]}
            >
              OMG so real
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
