import { Stack } from 'expo-router';
import 'react-native-reanimated';
import React from 'react'
import "../global.css";

export default function RootLayout() {
  return (
    <Stack initialRouteName="(tabs)">
    {/* <Stack > */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/* <Stack.Screen name="(tabs)/inicio" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="not-found" options={{ title: "Oops!" }} /> */}
    </Stack>
  );
}
