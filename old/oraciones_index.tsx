import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { Link, RelativePathString } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "@/components/ui/Card";

// import { Image } from "expo-image"

export default function Index() {
  return (
    <SafeAreaView className="items-center h-full md:items-start">
      <ScrollView id="scroll" className="p-2 flex-col gap-5 md:flex-row">
        <Card
          title="Oraciones diarias"
          description="Comienza o termina tu día con oraciones que te guían en la fe, la gratitud y la paz interior."
          image={require("../../assets/images/oraciones/oraciones-diarias.jpg")}
          link={{ href: "/oraciones_diarias" as RelativePathString }}
        />
        <Card
          title="Devociones"
          description="Encuentra paz, reflexión y guía en cada oración, meditaciones
          temáticas y pasajes bíblicos para acompañarte en tu día. ¡Haz de este
          espacio un momento especial para tu relación con Dios!"
          image={require("../../assets/images/oraciones/devociones.jpg")}
          link={{ href: "/devociones" as RelativePathString }}
        />
        <Card
          title="Colección de oraciones"
          description="Explora esta hermosa selección de oraciones tradicionales y especiales para momentos de reflexión y devoción. Desde plegarias clásicas como Bajo tu amparo y Bendita sea tu pureza, hasta oraciones profundas como la del jubileo, encuentra palabras para elevar tu espíritu y fortalecer tu fe."
          image={require("../../assets/images/oraciones/coleccion-oraciones.webp")}
          link={{ href: "/coleccion_oraciones" as RelativePathString }}
        />
        <Card
          title="Salmos"
          description="Encuentra en los Salmos palabras de alabanza, gratitud y esperanza. Ora con estos himnos sagrados que inspiran consuelo y fortaleza en tu día a día."
          image={require("../../assets/images/oraciones/salmos.jpg")}
          link={{ href: "/salmos" as RelativePathString }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
