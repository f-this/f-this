import { View, Text } from "react-native";
import textStyle from "../../constants/textStyles";
import Logo from "../logo";
import Colors from "../../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { useProf } from "../../lib/profile_ctx";
import { useAuth } from "../../lib/auth_ctx";

export default function DashboardHeader() {
  const { signOut } = useAuth();
  const { name } = useProf();
  let real = "John Doe";
  if (name != "" && name) {
    real = name;
  }

  const currentHour = new Date().getHours();
  let greeting = "";
  let subtitle = "";

  // Subtitle2 is a random message that is displayed under the subtitle
  let subtitle2Array = [
    `Progress report, ${real}—show me the hustle.`,
    `How's the conquest going, ${real}?`,
    `To infinity and beyond, ${real}!`,
    `Houston, we have progress, ${real}.`,
    `Ready for a progress power-up, ${real}?`,
    `Since you've been gone, ${real}, let's catch up on progress.`,
    `Drop it like it's hot, ${real}, then let's check on your progress.`,
    `Oops!... I did it again, ${real}—time for a progress check.`,
    `Hit me, ${real}, one more time—let's check progress!`,
    `Rolling in the progress, ${real}, Adele would be proud.`,
    `This is how we do it, ${real}, progress check style.`,
    `Shut up and dance, ${real}, but first, let's check progress.`,
    `I'm a survivor, ${real}, and so is your progress.`,
    `Despacito, ${real}, but let's check your progress first.`,
    `I got a feeling, ${real}, it's time for a progress check.`,
    `Can't feel my face, ${real}, but I can feel the progress. Let's check it.`,
    `Havana, ooh na-na, ${real}, show me that progress nirvana.`,
  ];

  // Pick a random subtitle2
  let subtitle2 =
    subtitle2Array[Math.floor(Math.random() * subtitle2Array.length)];

  if (currentHour < 12) {
    greeting = "Wakie Wakie";
    subtitle = "Morning Sunshine!";
  } else if (currentHour < 18) {
    greeting = "Sun's still shinin'";
    subtitle = "Afternoon Delight!";
  } else {
    greeting = "Lights out champ";
    subtitle = "Nighty Night!";
  }

  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={{
        backgroundColor: Colors.black,
      }}
    >
      {/*Row that contains the logo and the progress bar*/}
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 34,
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <Logo
          style={{
            height: 36,
            width: 51,
          }}
          color={Colors.white}
        />
      </View>
      {/*Column that contains the title and subtitle*/}
      <View
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          paddingHorizontal: 34,
        }}
      >
        {/*If title is not null, show the title*/}
        <Text style={textStyle.heading}>{greeting}</Text>
        {/*If subtitle is not null, show the subtitle*/}

        {/*If body is not null, show the body*/}
        <Text style={textStyle.body}>{subtitle}</Text>
        <Text style={[textStyle.body, { marginTop: 0, marginBottom: 0 }]}>
          {subtitle2}
        </Text>
      </View>
    </SafeAreaView>
  );
}
