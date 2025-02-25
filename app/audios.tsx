import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import AppGradient from "@/components/ui/AppGradient";
import TextoExamen from "@/components/ui/TextoExamen";

const Audios = () => {
  return (
    <View style={styles.container}>
      {/* <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}> */}
        <Text style={styles.title}>
        Audios
        </Text>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.innerContainer}>
            <View style={styles.section}>
              <View style={styles.textContainer}>
                <TextoExamen
                  texto="Texto Audios"
                />
                <TextoExamen texto=""/>
              </View>
            </View>
          </View>
        </ScrollView>
      {/* </AppGradient> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003553",
  },
  title: {
    color: "#f8f8f8",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 12,
  },
  scrollView: {
    marginTop: 4,
  },
  innerContainer: {
    height: "100%",
    justifyContent: "center",
  },
  section: {
    height: "80%",
    marginTop: 4,
    justifyContent: "center",
  },
  subtitle: {
    color: "#f8f8f8",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 4,
  },
  textContainer: {
    marginLeft: 8,
    fontFamily: "Hum521Rm",
  },
});

export default Audios;