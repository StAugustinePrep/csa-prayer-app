import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function OracionesLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen options={{ headerShown: false }} name="index" />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}