import { View, Text, FlatList, ImageBackground, Pressable } from "react-native";
import React from "react";
import AppGradient from "@/components/ui/AppGradient";
import { StatusBar } from "expo-status-bar";

import { ORACIONES_DATA } from "@/constants/OracionesData";
import oracionesImages from "@/constants/categorias-images";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

import { StyleSheet } from "react-native";

const Index = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
        <View style={{ marginVertical: 24 }}>
          <Text style={styles.welcomeText}>
            Bienvenido!
          </Text>
          <Text style={styles.subtitleText}>
            Siempre es un buen momento para rezar
          </Text>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={ORACIONES_DATA}
            style={styles.flatList}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => router.push(`/categorias/${item.id}`)}
                style={styles.pressable}
              >
                <ImageBackground
                  source={oracionesImages[item.id - 1]}
                  resizeMode="cover"
                  style={styles.imageBackground}
                >
                  <LinearGradient
                    colors={["transparent", "rgba(0,0,0,0.8)"]}
                    style={styles.linearGradient}
                  >
                    <Text style={styles.itemTitle}>
                      {item.title}
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </Pressable>
            )}
          />

          <ImageBackground 
              source={{ uri: 'https://static.wixstatic.com/media/bad981_9077257cae84434ca441d17730d3f51a~mv2.png/v1/fill/w_877,h_211,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO%20ST_%20AUGUSTINE%20Y%20NEASC.png' }}
              resizeMode="cover"
              style={styles.logoImageBackground}
          >
              <Text style={styles.textButtom}>.</Text>
          </ImageBackground>
          
        </View>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeText: {
    color: "#7c7c89",
    marginBottom: 3,
    fontWeight: "bold",
    fontSize: 32,
    textAlign: "center",
  },
  subtitleText: {
    color: "#003553",
    marginBottom: 1,
    fontWeight: "500",
    fontSize: 18,
    textAlign: "center",
  },
  listContainer: {
    paddingBottom: 16,
  },
  flatList: {
    marginBottom: 20,
  },
  pressable: {
    height: 100,
    marginVertical: 3,
    borderRadius: 8,
    overflow: "hidden",
  },
  imageBackground: {
    flex: 1,
    borderRadius: 8,
    justifyContent: "center",
  },
  linearGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  logoImageBackground: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  textButtom: {
    color: "transparent",
  },
});

export default Index;
