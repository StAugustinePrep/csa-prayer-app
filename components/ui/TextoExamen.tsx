import { Text } from "react-native";
import React from "react";

interface TextoExamenProps {
  texto: string;
}

const TextoExamen = ({
  texto = "No se ha enviado texto para este examen de conciencia",
}: TextoExamenProps) => {
  return (
    <Text className="text-white text-xl mb-3 font-bold text-left">
      {texto}
    </Text>
  );
};

export default TextoExamen;
