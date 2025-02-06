import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { Link, RelativePathString } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "@/components/ui/Card";

// import { Image } from "expo-image"

export default function Page() {
  return (
    <SafeAreaView className="items-center h-full md:items-start">
      <ScrollView className="p-2 max-h-[500px]">
        <Card
          title="Rosario"
          description="Reza y medita los misterios del Santo Rosario, un camino de
              oración que te conecta con la vida de Jesús y María. Encuentra
              guía espiritual y paz interior en cada decena."
          image={require("../../../assets/images/oraciones/lent.jpg")}
          link={{ href: "/via_crucis" as RelativePathString }}
        />

        <Card
          title="Via Crucis"
          description="Recorre el camino de la cruz con oración y meditación. Acompaña a Jesús en cada estación y profundiza en su amor y sacrificio por la humanidad."
          image={require("../../../assets/images/oraciones/lent.jpg")}
          link={{ href: "/via_crucis" as RelativePathString }}
        />

        {/* <View className="w-full h-96 max-h-[200px] max-w-[350px]">
          <Image
            className="w-full h-[55%] rounded-t-lg max-h-full max-w-full"
            source={require("../assets/images/oraciones/lent.jpg")}
          />
          <View className="h-auto bg-[#395E80] p-4 rounded-b-lg gap-3">
            <Text className="text-white text-lg">Devociones</Text>
            <Text className="text-white">
              Deepen your faith this Lent with daily oraciones, reflections, and
              scripture. Your journey toward spiritual renewal starts here.
            </Text>
            <Link className="w-14" href="/via_crucis" asChild>
              <Pressable className="p-2 bg-[#003553] rounded-md">
                <Text className="texl-xl text-white">PRAY</Text>
              </Pressable>
            </Link>
          </View>
        </View>

        <View className="w-full h-96 max-h-[200px] max-w-[350px]">
          <Image
            className="w-full h-[55%] rounded-t-lg max-h-full max-w-full"
            source={require("../assets/images/oraciones/lent.jpg")}
          />
          <View className="h-auto bg-[#395E80] p-4 rounded-b-lg gap-3">
            <Text className="text-white text-lg">Devociones</Text>
            <Text className="text-white">
              Deepen your faith this Lent with daily oraciones, reflections, and
              scripture. Your journey toward spiritual renewal starts here.
            </Text>
            <Link className="w-14" href="/via_crucis" asChild>
              <Pressable className="p-2 bg-[#003553] rounded-md">
                <Text className="texl-xl text-white">PRAY</Text>
              </Pressable>
            </Link>
          </View>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}
