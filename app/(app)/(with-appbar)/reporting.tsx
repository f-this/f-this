import { router } from "expo-router";
import { View, Text } from "react-native";
import Button from "../../../components/button";
import Header from "../../../components/header";
import { useReporter } from "../../../lib/reporting_ctx";
import { ScrollView } from "react-native-gesture-handler";
import textStyle from "../../../constants/textStyles";
import Colors from "../../../constants/Colors";


export default function Reporting() {
    const { reporters } = useReporter();

    return (
        <View>
            <Header
                showLogo
                title="Reporting Duty"
                color="black"
                onBack={() => router.back()}
                triangleHeight={50}
            />
            <ScrollView>
                {reporters.length > 0 ? (
                    reporters.map((reporter) => (
                        <Text key={reporter.id}>{reporter.name}</Text>
                    ))
                ) : (
                    <View style={{
                        paddingHorizontal: 34,
                        paddingVertical: 20,
                    }}>
                        <Text style={[textStyle.caption, { color: Colors.black, fontStyle: "italic", fontSize: 18 }]}>Isn't anybody gonna hold me accountable?</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={[textStyle.caption, { color: Colors.black, fontStyle: "italic", fontSize: 18 }]} >Uh - I'm problematic</Text>
                            <Text style={[textStyle.caption, { color: Colors.disabled, fontStyle: "italic", fontSize: 18 }]}>- Bo Burnham or smthn</Text>
                        </View>
                        <Text style={[textStyle.body, { color: Colors.black, marginTop: 40 }]}>Sorry, I was listening to some music. Start adding friends, what are you waiting for? Chop Chop. </Text>
                        <Text style={[textStyle.body, { color: Colors.black, marginTop: 40 }]}>Research shows that sharing your progress with others increases your chances of quitting for good. So stop reading and do it!</Text>
                        <Button
                            title="Add a Friend"
                            color="blue"
                            textColor="white"
                            onPress={() => router.push("/generate-report")}
                            style={{ marginTop: 40 }}
                        />
                    </View>
                )}
            </ScrollView>

        </View>
    );
}