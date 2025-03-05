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
    <View style={styles.container}>
      {/* Header Row */}
      <View style={styles.headerContainer}>
        <Pressable onPress={() => router.back()}>
          <FontAwesome5 name="arrow-left" size={24} color="#003553" />
        </Pressable>
        <Text style={styles.headerTitle}>{title}</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Gallery List */}
      <View style={styles.galleryContainer}>
        <FlatList
          style={styles.flatList}
          data={previews}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>
                router.push(`/categorias/${categoriasId}/${item.id}`)
              }
            >
              <View style={styles.itemContainer}>
                <Text style={styles.itemTitle}>{item.title}</Text>
              </View>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20, // equivalent to my-5
  },
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
  galleryContainer: {
    marginVertical: 8, // equivalent to space-y-2
    alignItems: "center",
  },
  flatList: {
    marginTop: 20, // equivalent to mt-5
    marginBottom: 40, // equivalent to mb-10
  },
  itemContainer: {
    width: 250,
    height: 80,
    backgroundColor: "#rgba(255, 255, 255, 0.5)",
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  itemTitle: {
    fontSize: 18, // equivalent to text-lg
    color: "#003553",
  },
});

export default PrayerGallery;