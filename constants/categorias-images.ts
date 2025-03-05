import { ImageSourcePropType } from "react-native";

import diarias from '../assets/images/categorias/csaDiarias.jpg';
import devociones from '../assets/images/categorias/csaDevociones.jpg';
import letanias from "../assets/images/categorias/letanias.jpg";
import coleccion from "../assets/images/categorias/csaOraciones.jpg";//aqui funciona
import salmos from "@/assets/images/categorias/csaSalmos.jpg";



// export default [
//     diarias,
//     devociones,
//     letanias,
//     coleccion,
//     salmos,
// ];

const categoriasImages: ImageSourcePropType[] = [
    diarias,
    devociones,
    letanias,
    coleccion,
    salmos,
];

export default categoriasImages;