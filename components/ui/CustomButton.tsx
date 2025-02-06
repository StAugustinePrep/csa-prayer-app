import { Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { Link, RelativePathString } from "expo-router";

interface CustomButtonProps {
  onPress?: () => void;
  title: string;
  textStyles?: string;
  containerStyles?: string;
  href?: string;
}

export default function CustomButton({
  onPress = () => {},
  title,
  textStyles = "",
  containerStyles = "",
  href = "",
}: CustomButtonProps) {
  return href === "" ? (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className={`${containerStyles} min-h-[62px] p-4 bg-[#003553] rounded-md items-center`}
    >
      <Text className={`${textStyles} font-semibold text-2xl text-white`}>
        {title}
      </Text>
    </TouchableOpacity>
  ) : (
    <Link href={href as RelativePathString} asChild>
      <Pressable
        style={{
          backgroundColor: "#003553",
          padding: 16,
          borderRadius: 6,
          alignItems: "center",
          minHeight: 62,
        }}
        className={`${containerStyles} bg-[#003553] p-4 rounded-md min-h-[62px] items-center`}
      >
        <Text className={`${textStyles} text-2xl font-semibold text-white`}>
          {title}
        </Text>
      </Pressable>
    </Link>
  );
}
