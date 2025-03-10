import { View, Text, ScrollView, StyleSheet, ImageBackground, Pressable } from "react-native";
import React from "react";
import PrayerGallery from "@/components/ui/PrayerGallery";
import CATEGORIAS_GALLERY from "@/constants/categorias-gallery";
import { router, useLocalSearchParams, useRouter } from "expo-router";

const Index = () => {
  const { categoriasId } = useLocalSearchParams();
  const categorySelected = CATEGORIAS_GALLERY.filter((category) => category.id === categoriasId);
  return (
    <ImageBackground
      source={{ uri: 'https://stonkstutors.com/wp-content/uploads/2024/01/Las-oraciones-cato%CC%81licas-diarias-a-un-clic-de-distancia3-1024x614.jpg' }}
      style={styles.flex1}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.submenu}>
          {categorySelected.map((categoria) => (
            <PrayerGallery 
              key={categoria.title}
              title={categoria.title}
              previews={categoria.data}
            />
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  submenu: {
    top: 40,
  },
});

export default Index;