export interface Oracion {
    id: number;
    title: string;
    image: string;
}

export const ORACIONES_DATA: Oracion[] = [
    {
        id: 1,
        title: "Oraciones Diarias",
        image: "oraciones-diarias.jpg"
    },
    {
        id: 2,
        title: "Devociones",
        image: "devociones.jpg"
    },
    // {
    //     id: 3,
    //     title: "Letanias",
    //     image: "letanias.jpg"
    // },
    {
        id: 4,
        title: "Colección de Oraciones",
        image: "coleccion-oraciones.webp"
    },
    {
        id: 5,
        title: "Salmos",
        image: "salmos.jpg"
    }
]