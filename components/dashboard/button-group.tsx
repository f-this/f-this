import { View, Text } from "react-native";
import shadow from "../../constants/shadows";
import textStyle from "../../constants/textStyles";
import Colors from "../../constants/Colors";

export default function ButtonGroup() {
  return (
    <View
      style={{
        //flexDirection: "row",
        alignItems: "flex-end",
        paddingHorizontal: 43,
        width: "100%",
        position: "absolute",
        top: 320,
      }}
    >
      <View
        style={{
          backgroundColor: Colors.white,
          height: 35,
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
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
              fontStyle: "italic",
            },
          ]}
        >
          Dark Chocolate
        </Text>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: 10,
          //paddingHorizontal: 10,
          paddingVertical: 5,
        }}
      >
        <View
          style={{
            backgroundColor: Colors.white,
            height: 55,
            width: "48%",
            marginRight: 10,
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
                textAlign: "center",
                fontSize: 18,
                fontWeight: "bold",
                fontStyle: "italic",
              },
            ]}
          >
            Get Supplies
          </Text>
        </View>

        <View
          style={{
            backgroundColor: Colors.white,
            height: 55,
            width: "48%",
            justifyContent: "center",
            ...(shadow as any),
          }}
        >
          <Text
            style={[
              {
                color: Colors.black,
                marginHorizontal: 10,
                marginTop: 0,
                textAlign: "center",
                fontSize: 18,
                fontWeight: "bold",
                fontStyle: "italic",
              },
            ]}
          >
            Add Reminder
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: Colors.pink,
          height: 60,
          width: 305,
          marginTop: 10,
          justifyContent: "center",
          ...(shadow as any),
        }}
      >
        <Text
          style={[
            {
              color: Colors.white,
              marginTop: 0,
              marginHorizontal: 10,
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
              fontStyle: "italic",
            },
          ]}
        >
          Emergency Button
        </Text>
      </View>
    </View>
  );
}
