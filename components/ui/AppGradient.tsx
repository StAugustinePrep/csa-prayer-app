import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, StyleSheet } from "react-native";

interface ContentProps {
  children: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return <SafeAreaView style={styles.safeAreaView}>{children}</SafeAreaView>;
};

interface AppGradientProps {
  children: React.ReactNode;
  colors: [string, string, ...string[]];
}

const AppGradient = ({ children, colors }: AppGradientProps) => {
  return (
    <LinearGradient colors={colors} style={styles.linearGradient}>
      <Content>{children}</Content>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    marginHorizontal: 5,
    paddingHorizontal: 5,
  },
  linearGradient: {
    flex: 1,
  },
});

export default AppGradient;