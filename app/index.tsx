import { Text, View, ImageBackground, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/ui/CustomButton";
import AppGradient from "@/components/ui/AppGradient";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1">
      <ImageBackground
        style={{width: 'auto', height: '100%'}}
        source={require("../assets/images/csa-picture.jpg")}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.4)"]}>
            <SafeAreaView className="flex-1 mx-5 my-8 justify-evenly mt-5 items-center">
              <View>
                <Text className="text-3xl text-center font-bold lg:text-5xl text-white">
                  CSA App de Oración
                </Text>
                <Text className="text-lg text-center lg:text-xl mt-10 text-white">
                  La educación religiosa es una parte integral del plan de
                  estudios y de la vida estudiantil en St. Augustine Preparatory
                  School.
                </Text>
              </View>

              <View className="bg-transparent w-full">
                <CustomButton
                  href="/categorias"
                  title="Comenzar"
                />
              </View>
              <StatusBar style="light" />
            </SafeAreaView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
}
