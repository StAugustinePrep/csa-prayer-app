import { ExternalPathString, Link, RelativePathString } from "expo-router";
import {
  View,
  Text,
  Pressable,
  Image,
  ImageSourcePropType,
} from "react-native";

type CardProps = {
  title: string;
  description?: string;
  image: ImageSourcePropType;
  link: {
    href: RelativePathString | ExternalPathString;
  };
};

export default function Card({ title, description, image, link }: CardProps) {
  return (
    <View className="w-full h-96 max-h-[400px] md:max-h-[] max-w-[350px]">
      <Image
        className="w-full h-[55%] rounded-t-lg max-h-full max-w-full"
        source={image}
      />
      <View className="h-auto bg-[#395E80] p-4 rounded-b-lg gap-3">
        <Text className="text-white text-lg">{title}</Text>
        <Text className="text-white">
          {description || "Descripción de la oración"}
        </Text>
        <Link className="w-16" href={link.href} asChild>
          <Pressable className="p-2 bg-[#003553] rounded-md">
            <Text className="texl-xl text-white">ORAR</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
