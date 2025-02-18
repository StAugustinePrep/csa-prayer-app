import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { Link, RelativePathString } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "@/components/ui/Card";

// import { Image } from "expo-image"

export default function Index() {
  return (
    <SafeAreaView className="items-center h-full md:items-start">
      <ScrollView className="p-2 flex-col gap-5">
        <Card
          title="Lauretanas"
          description="Comienza tu jornada entregando tus pensamientos, palabras y acciones a Dios. Una oración para vivir cada día con propósito, gratitud y amor."
          image={require("../../../../assets/images/oraciones/oraciones-diarias.jpg")}
          link={{ href: "/ofrecimiento" as RelativePathString }}
        />
        <Card
          title="Sagrado corazón de Jesús"
          description="Encuentra paz, reflexión y guía en cada oración, meditaciones
          temáticas y pasajes bíblicos para acompañarte en tu día. ¡Haz de este
          espacio un momento especial para tu relación con Dios!"
          image={require("../../../../assets/images/oraciones/devociones.jpg")}
          link={{ href: "/examen" as RelativePathString }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
