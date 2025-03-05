import { View, Text, ScrollView, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import AppGradient from "@/components/ui/AppGradient";
import PrayerGallery from "@/components/ui/PrayerGallery";
import CATEGORIAS_GALLERY from "@/constants/categorias-gallery";
import { useLocalSearchParams } from "expo-router";

const Index = () => {
  const { categoriasId } = useLocalSearchParams();
  const categorySelected = CATEGORIAS_GALLERY.filter((category) => category.id === categoriasId);
  return (
    <ImageBackground
      source={{ uri: 'https://stonkstutors.com/wp-content/uploads/2024/01/Las-oraciones-cato%CC%81licas-diarias-a-un-clic-de-distancia3-1024x614.jpg' }}
      style={styles.flex1}
    >
      <View style={styles.submenu}>
        {categorySelected.map((categoria) => (
          <PrayerGallery 
            style={styles.subbuttons}//not working
            key={categoria.title}
            title={categoria.title}
            previews={categoria.data}
            
          />
        ))}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,

  },
  submenu: {
    top:40,
  },
  subbuttons: {
    color:"red",
    backgroundColor:"red",
  },
});

export default Index;