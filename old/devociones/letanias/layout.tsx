import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import React from "react"

export default function LetaniasLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: true }}>
        <Stack.Screen
          options={{ headerShown: true, title: "Letanias" }}
          name="index"
        />
        <Stack.Screen
          options={{ headerShown: true, title: "Lauretanas" }}
          name="lauretana"
        />
        <Stack.Screen
          options={{ headerShown: true, title: "Sagrado corazón de Jesús" }}
          name="sagrado_corazon"
        />
      </Stack>
      <StatusBar style="dark" />
    </>
  );
}
