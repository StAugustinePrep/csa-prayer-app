import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import CATEGORIAS_GALLERY from "@/constants/categorias-gallery";
import AppGradient from "@/components/ui/AppGradient";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import ViaCrucis from "@/components/ui/ViaCrucis";

const Oracion = () => {
  const router = useRouter();

  const { categoriasId, oracionesId } = useLocalSearchParams();
  const category = CATEGORIAS_GALLERY.filter(
    (category) => category.id === categoriasId
  );
  const oracion = category[0].data.filter(
    (oracion) => oracion.id === oracionesId
  );
  const sentences = oracion[0]?.text.split(".");

  return (
    <View style={styles.flex1}>
      {/* <ImageBackground></ImageBackground> */}
      {/* <AppGradient colors={["rgba(0,0,0, 0.3)", "rgba(0,0,0, 0.9)"]}> */}
        <Pressable
          onPress={() => router.back()}
          style={styles.pressable}
        >
          <FontAwesome5 name="arrow-left" size={24} color="white" />
        </Pressable>
        {categoriasId === "2" && oracionesId === "2" ? (
          <ViaCrucis />
        ) : (
          <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
            <View style={styles.fullHeight}>
              <View style={styles.innerView}>
                {sentences.map((sentence, index) => (
                  <Text
                    key={index}
                    style={styles.text}
                  >
                    {sentence}.
                  </Text>
                ))}
              </View>
            </View>
          </ScrollView>
        )}
      {/* </AppGradient> */}
    </View>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    backgroundColor: '#003553'
  },
  pressable: {
    position: 'absolute',
    top: 16,
    left: 6,
    zIndex: 10,
  },
  scrollView: {
    marginTop: 20,
  },
  fullHeight: {
    height: '100%',
    justifyContent: 'center',
  },
  innerView: {
    height: '80%',
    minHeight: 60,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    marginBottom: 5,
    fontWeight: 'bold',
  },
});

export default Oracion;