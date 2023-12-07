import { router } from "expo-router";
import { View, Text, Image } from "react-native";
import Button from "../../../components/button";
import Header from "../../../components/header";
import { daysMap, frequencyMap, useReporter } from "../../../lib/reporting_ctx";
import { ScrollView } from "react-native-gesture-handler";
import textStyle from "../../../constants/textStyles";
import Colors from "../../../constants/Colors";
import shadow from "../../../constants/shadows";
import { EditPencil, Settings, SettingsProfiles } from "iconoir-react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Reporting() {
    const { reporters, clearReporter } = useReporter();


    return (
        <View style={{
            flex: 1,
        }}>
            <Header
                showLogo
                title="Reporting Duty"
                color="black"
                onBack={() => router.back()}
                triangleHeight={50}
            />
            <ScrollView
                style={{
                    flex: 1,
                    width: "100%",
                }}
            >
                <SafeAreaView
                    edges={["bottom"]}>
                    {reporters.length > 0 ? (
                        <View style={{
                            paddingHorizontal: 34,
                            paddingVertical: 20,
                            paddingBottom: 100,
                        }}>
                            <Button
                                title="Add another friend"
                                onPress={() => {
                                    router.push("/generate-report");
                                }}
                                marginTop={10}
                                height={20}
                                style={{
                                    paddingVertical: 10,
                                }}
                            />
                            {reporters.map((reporter) => (
                                <View style={{
                                    width: "100%",
                                    flexDirection: "column",
                                    backgroundColor: Colors.white,
                                    ...shadow as any,
                                    marginBottom: 20,
                                }} >
                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        paddingHorizontal: 20,
                                        paddingVertical: 10,
                                    }}>
                                        <View style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                        }}>
                                            <Image source={require("../../../assets/images/Ellipse2.png")} style={{ marginRight: 10 }} />
                                            <Text style={{
                                                color: Colors.black,
                                                fontSize: 16,
                                                fontWeight: "900",
                                                fontStyle: "italic",
                                            }}>{reporter.name}</Text>
                                        </View>
                                        <EditPencil
                                            width={24}
                                            height={24}
                                            color={Colors.black}
                                            strokeWidth={3}
                                        />
                                    </View>
                                    {/** Divider line */}
                                    <View style={{
                                        backgroundColor: Colors.black,
                                        height: 1,
                                        width: "100%",
                                    }} />
                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        paddingHorizontal: 20,
                                        paddingTop: 20,
                                        paddingBottom: 10,
                                    }}>
                                        <Text style={{
                                            color: Colors.black,
                                            fontSize: 16,
                                        }}>Reporting Frequency</Text>
                                        <Text style={{
                                            color: Colors.black,
                                            fontSize: 16,
                                            fontWeight: "900",
                                            fontStyle: "italic",
                                        }}>{daysMap[reporter.frequencyDays]}</Text>
                                    </View>
                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        paddingHorizontal: 20,
                                        paddingVertical: 10,
                                    }}>
                                        <Text style={{
                                            color: Colors.black,
                                            fontSize: 16,
                                        }}>Sharing</Text>
                                        <Text style={{
                                            color: Colors.black,
                                            fontSize: 16,
                                            fontWeight: "900",
                                            fontStyle: "italic",
                                        }}>{reporter.reportType.length.toString() + ` Data Point${reporter.reportType.length > 1 ? "s" : ""}`}</Text>
                                    </View>
                                    <View style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        paddingHorizontal: 20,
                                        paddingVertical: 10,
                                        paddingBottom: 20,
                                    }}>
                                        <Text style={{
                                            color: Colors.black,
                                            fontSize: 16,
                                        }}>Method</Text>
                                        <Text style={{
                                            color: Colors.black,
                                            fontSize: 16,
                                            fontWeight: "900",
                                            fontStyle: "italic",
                                        }}>{reporter.method}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
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
                                onPress={() => {
                                    clearReporter();
                                    router.push("/generate-report")
                                }}
                                style={{ marginTop: 40 }}
                            />
                        </View>
                    )}
                </SafeAreaView>
            </ScrollView>


        </View>
    );
}