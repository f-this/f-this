import { router } from 'expo-router';
import { Text, View } from 'react-native';
import Header from '../components/header';
import React from 'react';

export default function Home() {
  return (
    <View>
      <Header
        showLogo
        title="Are you lost?"
        subtitle='You’re not supposed to be here...'
        body={"Just turn around and act like nothing happened..."}
        color="pink"
        onBack={() => router.back()}
        action={
          // Buttons go here
          <View style={{}}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Next</Text>
          </View>
        }
        showProgress
        totalSteps={8}
        currentStep={1}
      />
    </View>
  );
}
