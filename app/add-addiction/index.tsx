import { View } from "react-native";
import Header from "../../components/header";
import Button from "../../components/button";
import TextButton from "../../components/textButton";
import { router } from "expo-router";
import React from "react";
import Dropdown from "../../components/dropdown";

export default function Home() {
    const [selected, setSelected] = React.useState<string[]>([]);

    return (
        <View style={{
            flex: 1,
            flexDirection: "column",
        }}>
            <Header
                showLogo
                title="Let’s get to the point"
                body={"We both have places to be and things to do, so let’s get started. Time to say “F*** it” to your addictions for good."}
                color="black"
                onBack={() => router.back()}
            />
            <View style={{ marginHorizontal: 34, position: "absolute", bottom: 40 }}>
                <Dropdown options={["Smoking", "Gambling", "Illicit Substances", "Sugar", "Adrenaline"]} onMultiselect={(_) => {
                    setSelected(_);
                }} onPress={() => { }} />
                <View style={{ height: 10 }} />
                <TextButton title="I don’t see my addiction" onPress={() => {
                    router.push("/add-addiction/replacement");
                }}
                    textColor="black"
                />
                <View style={{ height: 20 }} />
                <Button
                    title="Let’s go!"
                    onPress={() => {
                        router.push("/add-addiction/replacement");
                    }}
                    disabled={selected.length != 0}
                    color="blue"
                    textColor="white"
                />
            </View>
        </View>
    );
}
