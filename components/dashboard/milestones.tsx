import { View, Text } from "react-native";
import textStyle from "../../constants/textStyles";
import Colors from "../../constants/Colors";
import { FlatList } from "react-native-gesture-handler";
import { CheckboxNoState } from "../checkbox";
import Svg, { Line } from "react-native-svg";


export default function Milestones() {
    let milestones: Milestone[] = [
        {
            title: "Day 0",
            description: "You've started your journey to quit!",
            completed: true,
            date: new Date(),
            day: 0
        },
        {
            title: "Day 7",
            description: "You got past 1 week!",
            completed: true,
            date: new Date(),
            day: 7
        },
        {
            title: "Day 14",
            description: "14-day smoke free is no small feat!",
            completed: true,
            date: new Date(),
            day: 14
        },
        {
            title: "Day 30",
            description: "You’ll have to wait and see...",
            completed: false,
            date: new Date(),
            day: 30
        },
        {
            title: "Day 45",
            description: "45 Days?! You're a rockstar!",
            completed: false,
            date: new Date(),
            day: 30
        },
    ];

    let completedNum = milestones.filter((milestone) => milestone.completed).length;

    let textEnd = completedNum <= milestones.length - 1 ? "Patience, my little padawan" : "The end of your yourney is here...";

    return (
        <View style={{ flexDirection: "column", alignItems: "center", width: "100%", marginTop: 0 }}>
            <View style={{ flexDirection: "row", alignItems: "flex-start", paddingHorizontal: 43, width: "100%", marginTop: 20 }}>
                <Text style={[textStyle.body, {
                    color: Colors.black, marginTop: 0, textAlign: "left"

                }]}>
                    Your Milestones
                </Text>
            </View>
            <View style={{ width: 3, flex: 1, position: "absolute", top: 90, left: 63, height: "75%", }} >
                <Svg viewBox="0 0 3 194" fill="none" preserveAspectRatio="none" >
                    <Line opacity="0.4" x1="1.5" y1="108.134" x2="1.5" y2="162.134" stroke="#292929" strokeWidth="3" />
                    <Line opacity="0.9" x1="1.5" y1="0.134277" x2="1.5" y2="108.134" stroke="#292929" strokeWidth="3" />
                    <Line x1="1.5" y1="159.134" x2="1.5" y2="193.134" stroke="#292929" strokeWidth="3" strokeDasharray="6 6" />
                </Svg>

            </View>
            <FlatList data={milestones.splice(0, completedNum + 1)} keyExtractor={(item) => item.title}
                renderItem={({ item, index }) => {
                    return <MilestoneItem {...item} />
                }
                }
                scrollEnabled={false} style={{ width: "100%" }} />
            <Text style={[{ color: Colors.disabled, marginTop: 10, textAlign: "center", fontSize: 15 }]}>{textEnd}</Text>
        </View>
    );
}

function MilestoneItem(props: Milestone) {
    return (
        <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 43, width: "100%", marginTop: 20 }}>
            <CheckboxNoState initialState={props.completed} selectedColor={"blue"} onPress={() => { }} />
            <View style={{ flexDirection: "column", alignItems: "flex-start", marginLeft: 15 }}>
                <Text style={{ color: Colors.disabled, marginTop: 0, textAlign: "left", fontSize: 13, fontStyle: "italic", fontWeight: "700" }}>{props.title}</Text>
                <Text style={{ color: Colors.black, marginTop: 5, textAlign: "center", fontSize: 15, }}>{props.description}</Text>
            </View>
        </View>
    );
}

type Milestone = {
    title: string;
    description: string;
    completed: boolean;
    date: Date;
    day: number;
}