import { View, Text, Pressable, ScrollView } from "react-native";
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
    <View className="flex-1">
      {/* <ImageBackground></ImageBackground> */}
      <AppGradient colors={["rgba(0,0,0, 0.3)", "rgba(0,0,0, 0.9)"]}>
        <Pressable
          onPress={() => router.back()}
          className="absolute top-6 left-6 z-10"
        >
          <FontAwesome5 name="arrow-left" size={24} color="white" />
        </Pressable>
        {categoriasId === "2" && oracionesId === "2" ? (
          <ViaCrucis />
        ) : (
          <ScrollView className="mt-20" showsVerticalScrollIndicator={false}>
            <View className="h-full justify-center">
              <View className="h-4/5 min-h-60 justify-center">
                {sentences.map((sentence, index) => (
                  <Text
                    key={index}
                    className="text-white text-2xl mb-5 font-bold text"
                  >
                    {sentence}.
                  </Text>
                ))}
              </View>
            </View>
          </ScrollView>
        )}
      </AppGradient>
    </View>
  );
};
export default Oracion;
