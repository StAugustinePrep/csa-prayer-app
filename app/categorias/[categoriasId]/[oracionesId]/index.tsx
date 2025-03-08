import { View, Text, Pressable, ScrollView, StyleSheet, Image, SafeAreaView, ImageBackground } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import CATEGORIAS_GALLERY from "@/constants/categorias-gallery";
import AppGradient from "@/components/ui/AppGradient";
import ViaCrucis from "@/components/ui/ViaCrucis";
import OracionDelDia from "@/components/ui/OracionDelDia";
import { FontAwesome5 } from "@expo/vector-icons";

const Oracion = () => {
  const router = useRouter();
  const { categoriasId, oracionesId } = useLocalSearchParams();
  
  const category = CATEGORIAS_GALLERY.filter(
    (category) => category.id === categoriasId
  );
  const oracion = category[0].data.filter(
    (oracion) => oracion.id === oracionesId
  );
  const sentences = oracion[0].text.split(".");
  const imagePath = oracion[0].image;
  const title = oracion[0].title; 
  
  return (
    <SafeAreaView style={styles.safeAreaView}>
      
      <Pressable
        onPress={() => router.back()}
        style={styles.pressable}
      >
        <FontAwesome5 name="arrow-left" size={24} color="white" />
      </Pressable>
      <Text style={styles.heading}>{title}</Text>
      {categoriasId === "2" && oracionesId === "2" ? (
        <ViaCrucis />
      ) : categoriasId === "1" && oracionesId === "2" ? (
        <OracionDelDia />
      ) : (
        <>
          

          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <View style={styles.innerView}>
              {sentences.map((sentence, index) => (
                <Text
                  key={index}
                  style={styles.text}
                >
                  {sentence}.
                </Text>
              ))}

              {imagePath && (
                <Image
                  source={{ uri: imagePath }}
                  style={styles.image}
                />
              )}
            </View>
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  pressable: {
    position: 'absolute',
    top: 70,
    left: 6,
    zIndex: 10,
  },
  scrollView: {
    marginTop: 0,
  },
  fullHeight: {
    height: '100%',
    justifyContent: 'center',
  },
  innerView: {
    minHeight: 60,
    justifyContent: 'center',
    marginTop: 30,
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginBottom: 2,
    marginLeft: 10,
    marginRight: 10,
    fontFamily: "Hum521Rm", 
  },
  image: {
    width: '100%',
    height: 280,
    marginTop: 40,
    alignSelf: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    top: 15,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: '#003553'
  },
});

export default Oracion;