import { Text, View, ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/ui/CustomButton";

export default function Index() {
  return (
    <View style={styles.flex1}>
      <ImageBackground
        source={require("@/assets/images/csa-picture.jpg")}
        resizeMode="cover"
        style={styles.imagecenter}
      >

        <SafeAreaView style={styles.safeAreaView}>
          <CustomButton
            href="inicio"
            title="Mensaje del Director"
          />
        </SafeAreaView>

      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  imagecenter:{
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',  // Centers text vertically
  },
  safeAreaView: {
    //flex: 1,
    //marginHorizontal: 10,
    //marginVertical: 8,
    //marginTop: 5,
    justifyContent: 'center', // Centers text vertically
    alignItems: 'center',
    width: '85%',
    height: '16%',
    bottom: 50,
    position: 'absolute',
    backgroundColor: '#003553',
    borderRadius: 10,
    
    //minHeight: 10,
    //padding: 10,
  },
});