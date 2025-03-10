import { View, Text, Pressable, FlatList, StyleSheet, Image, SafeAreaView } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import CATEGORIAS_GALLERY from "@/constants/categorias-gallery";
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
        <FontAwesome5 name="arrow-left" size={30} color="white"/>
      </Pressable>
      <Text style={styles.heading}>{title}</Text>
      {categoriasId === "2" && oracionesId === "2" ? (
        <ViaCrucis />
      ) : categoriasId === "1" && oracionesId === "2" ? (
        <OracionDelDia />
      ) : (
        <>
          <FlatList
            data={sentences}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Text style={styles.text}>{item}.</Text>
            )}
            ListFooterComponent={
              imagePath ? (
                <Image
                  source={{ uri: imagePath }}
                  style={styles.image}
                />
              ) : null
            }
            contentContainerStyle={styles.innerView}
            showsVerticalScrollIndicator={true}
          />
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
    top: 30, // for back arrow position
    left: 10,
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
    fontSize: 24,
    marginBottom: 2,
    marginLeft: 10,
    marginRight: 10,
    fontFamily: "sans-serif", 
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    marginTop: 40,
    alignSelf: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 28,
    fontFamily: "sans-serif", 
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