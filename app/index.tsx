import { Text, View, ImageBackground, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/ui/CustomButton";
import AppGradient from "@/components/ui/AppGradient";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.flex1}>
      {/* <AppGradient colors={["rgba(0,0,0, 0.3)", "rgba(0,0,0, 0.9)"]}> */}
      <ImageBackground
        source={require("../assets/images/csa-picture.jpg")}
        resizeMode="cover"
        style={styles.flex1}
      >
        <SafeAreaView style={styles.safeAreaView}>

          <View backgroundColor="#rgba(0, 53, 83, 0.8)">
            <Text style={styles.title}>
              Mensaje del Director
            </Text>
            <Text style={styles.description}>
            Con mucha alegría les doy la bienvenida a esta aplicación, elaborada en colaboración por los departamentos de tecnología, religión y música del colegio con el propósito de ayudar a todos los miembros de nuestra comunidad escolar a crecer en la vida de oración.
            </Text>
            <Text style={styles.description}>
            Los invito a usar esta aplicación frecuentemente con la esperanza que las palabras de San Agustín se hagan verdad en nuestras vidas:
            </Text>
            <Text style={styles.description}>
            “La búsqueda de Dios es la búsqueda de la felicidad. El encuentro con Dios es la felicidad misma”
            </Text>
            <Text style={styles.description}>
            (De Mor. Eccl.Cath 11,18).
            </Text>
          </View>

          <StatusBar style="light" />
        </SafeAreaView>
      </ImageBackground>
    {/* </AppGradient> */}
    </View>
  );
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 8,
    justifyContent: 'flex-end',
    marginTop: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'TitilliumWeb-Bold',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    color: 'white',
    fontFamily: 'Hum521Rm',
  },
  buttonContainer: {
    width: '100%',
    minHeight: 62,
    padding: 16,
    borderRadius: 6,
    backgroundColor: "#003553",
    alignItems: "center",
  },
});