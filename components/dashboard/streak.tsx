import { View, Text, StyleSheet } from "react-native";
import shadow from "../../constants/shadows";
import textStyle from "../../constants/textStyles";
import Colors from "../../constants/Colors";
import ConfettiCannon from "react-native-confetti-cannon";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useProf } from "../../lib/profile_ctx";


export default function Streak() {
    const { addictionData } = useProf();
    let explosion: ConfettiCannon | null = null;

    const tap = Gesture.Tap()
        .onEnd(() => {
            explosion && explosion.start();
        })
        .runOnJS(true);

    return (
        <GestureDetector gesture={tap}>
            <View
                style={styles.mainView}
            >
                <ConfettiCannon
                    count={200}
                    origin={{ x: +200, y: 0 }}
                    autoStart={false}
                    ref={(ref) => (explosion = ref)}
                    fadeOut
                    explosionSpeed={1000}
                />
                <View
                    style={styles.dayView}
                >
                    <Text
                        style={[
                            textStyle.subtitle,
                            styles.subtitleExt,
                        ]}
                    >
                        {addictionData?.days() ?? "0"}
                    </Text>
                </View>
                <View
                    style={styles.wideView}
                >
                    <Text
                        style={[
                            textStyle.body,
                            { color: Colors.black, marginTop: 0, textAlign: "center" },
                        ]}
                    >
                        days without {addictionData?.addiction ? addictionData.addiction : "TBD..."}
                    </Text>
                </View>
            </View>
        </GestureDetector>
    );
}

const styles = StyleSheet.create({
    wideView: {
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        flex: 1,
        height: 41,
        backgroundColor: Colors.white,
        ...(shadow as any),
    },
    subtitleExt: {
        color: Colors.white,
        marginTop: 0,
        textAlign: "center",
        fontStyle: "normal",
    },
    dayView: {
        backgroundColor: Colors.blue,
        height: 85,
        width: 85,
        justifyContent: "center",
        ...(shadow as any),
    },
    mainView: {
        flexDirection: "row",
        alignItems: "flex-end",
        paddingHorizontal: 43,
        width: "100%",
        position: "absolute",
        top: 15,
    },
});