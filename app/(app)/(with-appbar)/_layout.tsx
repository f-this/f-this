import { Redirect, Stack } from 'expo-router';
import { Text, View } from 'react-native';
import React from 'react';
import AppBar from '../../../components/appBar';
import { BlurView } from 'expo-blur';

export default function AppLayout() {
    return <View style={{ flex: 1, flexDirection: "column" }}>
        <Stack screenOptions={{ header: () => null }} />
        <BlurView intensity={100} >
            <AppBar />
        </BlurView>
    </View>;
}
