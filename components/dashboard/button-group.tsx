import { View, Text } from "react-native";
import shadow from "../../constants/shadows";
import textStyle from "../../constants/textStyles";
import Colors from "../../constants/Colors";
import Button from "../button";
import { useProf } from "../../lib/profile_ctx";

export default function ButtonGroup() {
  const { addictionData } = useProf();
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
          {
            color: Colors.black,
            marginTop: 5,
            textAlign: "left",
            width: "100%",
          },
        ]}
      >
        You are replacing {addictionData?.addiction ? addictionData?.addiction : "who knows what"} with
      </Text>
      <View
        style={{
          marginTop: 10,
          height: 35,
          width: "100%",
          justifyContent: "center",
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
          {addictionData?.alternative ? addictionData?.alternative : "Who knows what..."}
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
        <Button
          title="Get Supplies"
          onPress={() => { }}
          style={{
            flex: 1,
            marginRight: 10,
            marginVertical: 0,
          }}
        />
        <Button
          title="Add Reminder"
          onPress={() => { }}
          style={{
            flex: 1,
            marginVertical: 0,
          }}
        />
      </View>
      <Button
        title="Emergency Button"
        onPress={() => { }}
        color="red"
        textColor="white"
      />
    </View>
  );
}
