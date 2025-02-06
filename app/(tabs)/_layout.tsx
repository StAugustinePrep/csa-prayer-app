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
        name="categorias"
        options={{
          tabBarLabel: "Oraciones",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="praying-hands" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="examen_conciencia"
        options={{
          tabBarLabel: "Examen de Conciencia",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="book-reader" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
