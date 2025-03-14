import { Text, StyleSheet } from "react-native";
import React from "react";

interface TextoExamenProps {
  texto: string;
}

const TextoExamen = ({
  texto = "No se ha enviado texto para este examen de conciencia",
}: TextoExamenProps) => {
  return (
    <Text style={styles.text}>
      {texto}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 16,
    marginBottom: 12,
    //fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'sans-serif', // Apply the custom font
  },
});

export default TextoExamen;