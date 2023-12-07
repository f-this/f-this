import { Stack } from 'expo-router';
import { View } from 'react-native';
import React from 'react';
import AppBar from '../../../components/appBar';

export default function AppLayout() {
    return <View style={{ flex: 1, flexDirection: "column" }}>
        <Stack screenOptions={{ header: () => null }} />
        <AppBar />
    </View>;
}
