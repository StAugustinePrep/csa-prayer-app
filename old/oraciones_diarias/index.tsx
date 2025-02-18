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
          title="Ofrecimiento del día"
          description="Comienza tu jornada entregando tus pensamientos, palabras y acciones a Dios. Una oración para vivir cada día con propósito, gratitud y amor."
          image={require("../../../assets/images/oraciones/oraciones-diarias.jpg")}
          link={{ href: "/ofrecimiento" as RelativePathString }}
        />
        <Card
          title="Examen de Conciencia"
          description="Encuentra paz, reflexión y guía en cada oración, meditaciones
          temáticas y pasajes bíblicos para acompañarte en tu día. ¡Haz de este
          espacio un momento especial para tu relación con Dios!"
          image={require("../../../assets/images/oraciones/devociones.jpg")}
          link={{ href: "/examen" as RelativePathString }}
        />
        <Card
          title="Bendición de comida"
          description="Explora esta hermosa selección de oraciones tradicionales y especiales para momentos de reflexión y devoción. Desde plegarias clásicas como Bajo tu amparo y Bendita sea tu pureza, hasta oraciones profundas como la del jubileo, encuentra palabras para elevar tu espíritu y fortalecer tu fe."
          image={require("../../../assets/images/oraciones/coleccion-oraciones.webp")}
          link={{ href: "/comida" as RelativePathString }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
