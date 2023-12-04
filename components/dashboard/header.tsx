import { View, Text } from "react-native";
import textStyle from "../../constants/textStyles";
import Logo from "../logo";
import Colors from "../../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DashboardHeader() {
    return <SafeAreaView
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
            }}>
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
            <Text style={textStyle.heading}>
                Wakie Wakie!
            </Text>
            {/*If subtitle is not null, show the subtitle*/}

            {/*If body is not null, show the body*/}
            <Text style={textStyle.body}>
                Morning Sunshine!
            </Text>
            <Text style={[textStyle.body, { marginTop: 0, marginBottom: 0 }]}>
                Let’s take a look at your progress, Alex.
            </Text>

        </View>
    </SafeAreaView>
}