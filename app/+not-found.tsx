import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import React from "react";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Text>Esta pagina no existe.</Text>
        <Link href="/" style={styles.link}>
          <Text>Ir a la pantalla de inicio!</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
