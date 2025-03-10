import { View, Text } from "react-native";
import { Tabs } from "expo-router";
import React from "react";
import Colors from "@/constants/Colors";

// TO - DO Create an Icons constants
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
      }}
    >


      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={26} color={color} />
          ),
        }}
      />


      <Tabs.Screen
        name="categorias"
        options={{
          tabBarLabel: "Oraciones",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="praying-hands" size={26} color={color} />
          ),
        }}
      />


      <Tabs.Screen
        name="guia_confesion"
        options={{
          tabBarLabel: "Guia de Confesión",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="book-reader" size={26} color={color} />
          ),
        }}
      />


      <Tabs.Screen
        name="audios"
        options={{
          tabBarLabel: "Cantos Misa",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="music" size={26} color={color} />
          ),
        }}
      />


    </Tabs>
  );
};

export default TabsLayout;
