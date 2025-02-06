import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { GalleryPreviewData } from "@/constants/models/Oracion";
import { Link, useLocalSearchParams, useRouter } from "expo-router";

interface PrayerGalleryProps {
  title: string;
  previews: GalleryPreviewData[];
}

const PrayerGallery = ({
  title,
  previews,
}: PrayerGalleryProps) => {
  const { categoriasId } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View className="my-5">
      <View className="mb-2">
        <Text className="text-zinc-50 text-3xl font-bold">{title}</Text>
      </View>
      <View className="space-y-2 items-center">
        <FlatList
          className="mt-5 mb-10"
          data={previews}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => router.push(`/categorias/${categoriasId}/${item.id}`)}
            >
              <View
                style={{
                  width: 250,
                  height: 80,
                  backgroundColor: "white",
                  borderRadius: 5,
                  marginBottom: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text className="text-lg">{item.title}</Text>
              </View>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

export default PrayerGallery;
