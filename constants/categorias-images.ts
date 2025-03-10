import { ImageSourcePropType } from "react-native";

import diarias from '../assets/images/categorias/csaDiarias.jpeg';
import devociones from '../assets/images/categorias/csaDevociones.jpeg';
import coleccion from "../assets/images/categorias/csaOraciones.jpeg"; // aqui funciona
import salmos from "../assets/images/categorias/csaSalmos.jpeg";


const categoriasImages: ImageSourcePropType[] = [
    diarias,
    devociones,
    coleccion,
    salmos,
];

export default categoriasImages;