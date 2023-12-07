import { View, Text, StyleSheet } from "react-native";
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
          styles.title,
        ]}>
        You are replacing {addictionData?.addiction ? addictionData?.addiction : "who knows what"} with
      </Text>
      <View
        style={styles.replaceText}
      >
        <Text style={styles.altText} >
          {addictionData?.alternative ? addictionData?.alternative : "Who knows what..."}
        </Text>
      </View>

      <View
        style={styles.middleRowView}
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
    </View >
  );
}

const styles = StyleSheet.create({
  altText: {
    color: Colors.black,
    marginTop: 0,
    marginHorizontal: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  middleRowView: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 10,
    paddingVertical: 5,
  },
  replaceText: {
    marginTop: 10,
    height: 35,
    width: "100%",
    justifyContent: "center",
  },
  title: {
    color: Colors.black,
    marginTop: 5,
    textAlign: "left",
    width: "100%",
  },
});
