import { View, Text, FlatList, ImageBackground, Pressable } from "react-native";
import React from "react";
import AppGradient from "@/components/ui/AppGradient";
import { StatusBar } from "expo-status-bar";

import { ORACIONES_DATA } from "@/constants/OracionesData";
import oracionesImages from "@/constants/categorias-images";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

  return (
    <View className="flex-1">
      <AppGradient
        colors={["rgb(0, 53, 83)", "rgb(57, 94, 128)", "rgb(0,0,0)"]}
      >
        <View className="my-6">
          <Text className="text-gray-200 mb-3 font-bold text-4xl text-left">
            Bienvenido!
          </Text>
          <Text className="text-indigo-100 mb-1 font-medium text-xl text-left">
            Siempre es un buen momento para rezar
          </Text>
        </View>
        <View className="pb-16">
          <FlatList
            data={ORACIONES_DATA}
            className="mb-20"
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => router.push(`/categorias/${item.id}`)}
                className="h-48 my-3 rounded-md overflow-hidden"
              >
                <ImageBackground
                  source={oracionesImages[item.id - 1]}
                  resizeMode="cover"
                  className="flex-1 rounded-lg justify-center"
                >
                  <LinearGradient
                    colors={["transparent", "rgba(0,0,0,0.8)"]}
                    className="flex-1 justify-center items-center"
                  >
                    <Text className="text-gray-100 text-3xl font-bold text-center">
                      {item.title}
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </Pressable>
            )}
          />
        </View>
      </AppGradient>
      <StatusBar style="light" />
    </View>
  );
};

export default Index;
