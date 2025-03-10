import { View, Text, SafeAreaView, StyleSheet, ImageBackground, StatusBar, useWindowDimensions } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();
  const isPortrait = height > width;

  return (
    <View style={styles.flex1}>
      <ImageBackground
        source={isPortrait ? require("../assets/images/csa-picture-vertical.jpg") : require("../assets/images/csa-picture-horizontal.jpg")}
        resizeMode="cover"
        style={styles.flex1}
      >
        <SafeAreaView style={styles.safeAreaView}>
          <View style={[styles.overlay, { backgroundColor: "rgba(0, 53, 83, 0.8)" }]}>
            <Text style={styles.title}>
              Mensaje del Director
            </Text>
            <Text style={styles.description}>
              Con mucha alegría les doy la bienvenida a esta aplicación, elaborada en colaboración por los departamentos de tecnología, religión y música del colegio con el propósito de ayudar a todos los miembros de nuestra comunidad escolar a crecer en la vida de oración.
            </Text>
            <Text style={styles.description}>
              Los invito a usar esta aplicación frecuentemente con la esperanza que las palabras de San Agustín se hagan verdad en nuestras vidas:
            </Text>
            <Text style={styles.description}>
              “La búsqueda de Dios es la búsqueda de la felicidad. El encuentro con Dios es la felicidad misma”
            </Text>
            <Text style={styles.description}>
              (De Mor. Eccl.Cath 11,18).
            </Text>
          </View>
          <StatusBar barStyle="light-content" />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginHorizontal: 10,
    marginBottom: 5,
  },
  overlay: {
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'TitilliumWeb-Bold',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
    color: 'white',
    fontFamily: 'Roboto',
  },
});