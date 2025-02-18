import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import React from "react"

export default function OracionesDiariasLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: true }}>
        <Stack.Screen
          options={{ headerShown: true, title: "Oraciones Diarias" }}
          name="index"
        />
        <Stack.Screen
          options={{ headerShown: true, title: "Ofrecimiento del día " }}
          name="ofrecimiento"
        />
        <Stack.Screen
          options={{ headerShown: true, title: "Examen de conciencia" }}
          name="examen"
        />
        <Stack.Screen
          options={{ headerShown: true, title: "Bendición de comida" }}
          name="comida"
        />
      </Stack>
      <StatusBar style="dark" />
    </>
  );
}
