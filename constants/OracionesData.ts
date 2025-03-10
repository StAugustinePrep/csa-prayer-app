export interface Oracion {
    id: number;
    title: string;
    image: string;
}

export const ORACIONES_DATA: Oracion[] = [
    {
        id: 1,
        title: "Oraciones Diarias",
        image: "csaOraciones.jpeg"
    },
    {
        id: 2,
        title: "Devociones",
        image: "csaDevociones.jpeg"
    },
    {
        id: 3,
        title: "Colección de Oraciones",
        image: "csaOraciones.jpeg"
    },
    {
        id: 4,
        title: "Salmos",
        image: "csaSalmos.jpeg"
    }
]