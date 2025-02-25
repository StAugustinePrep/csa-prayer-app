import { Text, View, ImageBackground, StyleSheet } from "react-native";
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
        source={require("../assets/images/csa-picture.jpg")}
        resizeMode="cover"
        className="flex-1"
      >
            <SafeAreaView style={styles.safeAreaView}>
              <View>
                <Text style={styles.title}>
                  Colegio Preparatorio San Agustín
                </Text>
                <Text style={styles.description}>
                  La educación religiosa es una parte integral del plan de
                  estudios y de la vida estudiantil.
                </Text>
              </View>

              <View style={styles.buttonContainer}>
                <CustomButton
                  href="/inicio"
                  title="Comenzar"
                />
              </View>
              <StatusBar style="light" />
            </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 8,
    justifyContent: 'space-evenly',
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
