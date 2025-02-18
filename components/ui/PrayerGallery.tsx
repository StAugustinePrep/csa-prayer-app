import {
  View,
  Text,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { GalleryPreviewData } from "@/constants/models/Oracion";
import { useLocalSearchParams, useRouter } from "expo-router";

interface PrayerGalleryProps {
  title: string;
  previews: GalleryPreviewData[];
}

const PrayerGallery = ({ title, previews }: PrayerGalleryProps) => {
  const { categoriasId } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View className="my-5">
      {/* Header Row */}
      <View style={styles.headerContainer}>
        <Pressable onPress={() => router.back()}>
          <FontAwesome5 name="arrow-left" size={24} color="white" />
        </Pressable>
        <Text style={styles.headerTitle}>{title}</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Gallery List */}
      <View className="space-y-2 items-center">
        <FlatList
          className="mt-5 mb-10"
          data={previews}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>
                router.push(`/categorias/${categoriasId}/${item.id}`)
              }
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

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default PrayerGallery;
