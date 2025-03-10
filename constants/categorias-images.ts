import { ImageSourcePropType } from "react-native";

import diarias from '../assets/images/categorias/csaDiarias.jpg';
import devociones from '../assets/images/categorias/csaDevociones.jpg';
import coleccion from "../assets/images/categorias/csaOraciones.jpg"; // aqui funciona
import salmos from "../assets/images/categorias/csaSalmos.jpg";


const categoriasImages: ImageSourcePropType[] = [
    diarias,
    devociones,
    coleccion,
    salmos,
];

export default categoriasImages;