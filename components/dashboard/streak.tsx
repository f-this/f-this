import { View, Text } from "react-native";
import shadow from "../../constants/shadows";
import textStyle from "../../constants/textStyles";
import Colors from "../../constants/Colors";

export default function Streak() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-end",
        paddingHorizontal: 43,
        width: "100%",
        position: "absolute",
        top: 15,
      }}
    >
      <View
        style={{
          backgroundColor: Colors.blue,
          height: 85,
          width: 85,
          justifyContent: "center",
          ...(shadow as any),
        }}
      >
        <Text
          style={[
            textStyle.subtitle,
            {
              color: Colors.white,
              marginTop: 0,
              textAlign: "center",
              fontStyle: "normal",
            },
          ]}
        >
          14
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 20,
          flex: 1,
          height: 41,
          backgroundColor: Colors.white,
          ...(shadow as any),
        }}
      >
        <Text
          style={[
            textStyle.body,
            { color: Colors.black, marginTop: 0, textAlign: "center" },
          ]}
        >
          days without smoking
        </Text>
      </View>
    </View>
  );
}
