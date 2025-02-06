import { View, Text, ScrollView } from "react-native";
import React from "react";
import AppGradient from "@/components/ui/AppGradient";

const ExamenConciencia = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <Text className="text-zinc-50 text-2xl font-bold mt-3">
          Examen de conciencia (Ignaciano)
        </Text>
        <ScrollView className="mt-3" showsVerticalScrollIndicator={false}>
          <View className="h-full justify-center">
            <View className="h-4/5 justify-center">
              <Text className="text-white text-2xl mb-6 font-bold text-center">
                1. Presencia: Pide a Dios su gracias y ayuda en este momento de
                oración.
              </Text>
              <Text className="text-white text-2xl mb-6 font-bold text-center">
                2. Gratitud: Evoca los momentos que te sucedieron hoy de los
                cuales estoy especialmente agradecido y disfruta de ellos.
              </Text>
              <Text className="text-white text-2xl mb-6 font-bold text-center">
                3. Agradece a Dios por estos regalos. Repaso del día: Revisa tu
                día experimentaste la presencia de Dios.
              </Text>
              <Text className="text-white text-2xl mb-6 font-bold text-center">
                4. Arrepentimiento: ¿Has pecado hoy o has hecho algo de lo que
                te arrepientes? Expresa tu pena a Dios y pídele perdón. Si el
                pecado es grave, ora buscando el perdón de la persona ofendida y
                el sacramento de la reconciliación.
              </Text>
              <Text className="text-white text-2xl mb-6 font-bold text-center">
                5. Gracias: Al finalizar la oración, pídele a Dios la gracia
                necesaria para el siguiente día.
              </Text>
            </View>
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default ExamenConciencia;
