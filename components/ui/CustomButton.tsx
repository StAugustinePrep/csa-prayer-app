import { Text, TouchableOpacity, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Link, RelativePathString } from "expo-router";

interface CustomButtonProps {
  onPress?: () => void;
  title: string;
  textStyles?: object;
  containerStyles?: object;
  href?: string;
}

export default function CustomButton({
  onPress = () => {},
  title,
  textStyles = {},
  containerStyles = {},
  href = "",
}: CustomButtonProps) {
  return href === "" ? (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.container, containerStyles]}
    >
      <Text style={[styles.text, textStyles]}>
        {title}
      </Text>
    </TouchableOpacity>
  ) : (
    <Link href={href as RelativePathString} asChild>
      <Pressable
        style={[styles.container, containerStyles]}
      >
        <Text style={[styles.text, textStyles]}>
          {title}
        </Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 62,
    padding: 16,
    backgroundColor: "#003553",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: 'center',  // Centers text vertically
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
    justifyContent: 'center',  // Centers text vertically
  },
});