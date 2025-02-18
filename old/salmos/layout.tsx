import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import React from "react"

export default function SalmosLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: true }}>
        <Stack.Screen
          options={{ headerShown: true, title: "Salmos" }}
          name="index"
        />
        <Stack.Screen
          options={{ headerShown: true, title: "Salmo 23" }}
          name="23"
        />
        <Stack.Screen
          options={{ headerShown: true, title: "Salmo 51" }}
          name="51"
        />
        <Stack.Screen
          options={{ headerShown: true, title: "Salmo 138" }}
          name="138"
        />
      </Stack>
      <StatusBar style="dark" />
    </>
  );
}
