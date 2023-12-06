import { View, Text, Image, StyleSheet } from "react-native";
import textStyle from "../../constants/textStyles";
import Colors from "../../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { Svg, Path } from "react-native-svg";
import { useProf } from "../../lib/profile_ctx";
import { useAuth } from "../../lib/auth_ctx";
import TextButton from "../textButton";
interface profileHeaderProps {
  random?: string;
}
export default function profileHeader(props: profileHeaderProps) {
  const { signOut } = useAuth();

  const { id, name, fetchUserProfile } = useProf();
  fetchUserProfile();
  let real = "John Doe";
  if (name != "" && name) {
    real = name;
  }
  return (
    <View>
      <SafeAreaView
        edges={["top", "left", "right"]}
        style={{
          backgroundColor: Colors.black,
        }}
      >
        <TextButton
          style={{
            marginLeft: 320,
          }}
          title="Sign Out"
          textColor="white"
          onPress={signOut}
        />
        {/*Row that contains the logo and the progress bar*/}
        <View style={{ width: "100%", paddingTop: 30 }}>
          <Image
            style={styles.image}
            source={require("../../assets/images/Ellipse.png")}
          />
          <Text
            style={StyleSheet.compose(textStyle.body, {
              fontSize: 32,
              alignSelf: "center",
            })}
          >
            {real}
          </Text>
          <Text
            style={StyleSheet.compose(textStyle.body, {
              fontSize: 18,
              alignSelf: "center",
              marginHorizontal: 20,
              marginBottom: 10,
            })}
          >
            Are you actually making progress? Or is it all just talk?
          </Text>
        </View>
      </SafeAreaView>
      <Svg
        width="100%"
        height="46"
        viewBox="0 0 389 46"
        fill="none"
        preserveAspectRatio="none"
      >
        <Path d="M389 0L0 46V0H389Z" fill={Colors.black} />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
  },
});
