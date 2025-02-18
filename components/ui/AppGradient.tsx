import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const Content = ({ children }: { children: any }) => {
  return <SafeAreaView className="flex-1 mx-5 px-5">{children}</SafeAreaView>;
};

const AppGradient = ({
  children,
  colors,
}: {
  children: any;
  colors: [string, string, ...string[]];
}) => {
  return (
    <LinearGradient colors={colors} className="flex-1">
      <Content>{children}</Content>
    </LinearGradient>
  );
};

export default AppGradient;
