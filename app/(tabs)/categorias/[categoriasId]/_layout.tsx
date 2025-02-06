import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import React from "react";

export default function CategoriasIdLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen options={{ headerShown: false }} name="index" />
        <Stack.Screen options={{ headerShown: false }} name="[oracionesId]" />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
