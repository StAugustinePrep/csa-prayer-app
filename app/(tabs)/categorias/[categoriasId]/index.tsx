import { View, Text, ScrollView } from "react-native";
import React from "react";
import AppGradient from "@/components/ui/AppGradient";
import PrayerGallery from "@/components/ui/PrayerGallery";
import CATEGORIAS_GALLERY from "@/constants/categorias-gallery";
import { useLocalSearchParams } from "expo-router";

const Index = () => {
  const { categoriasId } = useLocalSearchParams();
  const categorySelected = CATEGORIAS_GALLERY.filter((category) => category.id === categoriasId);
  return (
    <View className="flex-1">
      <AppGradient
        colors={["rgb(37, 102, 175)", "rgb(35, 76, 128)", "rgb(29, 52, 84)"]}
      >
        <View className="flex-1">
          {categorySelected.map((categoria) => (
            <PrayerGallery
              key={categoria.title}
              title={categoria.title}
              previews={categoria.data}
            ></PrayerGallery>
          ))}
        </View>
      </AppGradient>
    </View>
  );
};

export default Index;
