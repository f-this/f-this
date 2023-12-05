import { View, Text } from "react-native";
import shadow from "../../constants/shadows";
import textStyle from "../../constants/textStyles";
import Colors from "../../constants/Colors";
import Button from "../button";

export default function ButtonGroup() {
  return (
    <View
      style={{
        //flexDirection: "row",
        alignItems: "flex-end",
        paddingHorizontal: 43,
        width: "100%",
        marginTop: 20,
      }}
    >
      <Text
        style={[
          textStyle.body,
          { color: Colors.black, marginTop: 5, textAlign: "left", width: "100%" },
        ]}
      >
        You are replacing Smoking with
      </Text>
      <View
        style={{
          marginTop: 10,
          backgroundColor: Colors.white,
          height: 35,
          width: "100%",
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
          paddingVertical: 5,
        }}
      >

        <Button title="Get Supplies" onPress={() => { }}
          style={{
            flex: 1,
            marginRight: 10,
            marginVertical: 0,
          }} />
        <Button title="Add Reminder" onPress={() => { }}
          style={{
            flex: 1,
            marginVertical: 0,
          }} />
      </View>
      <Button title="Emergency Button" onPress={() => { }} color="red" textColor="white" />
    </View>
  );
}
