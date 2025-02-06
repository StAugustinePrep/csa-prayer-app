export interface Oracion {
  title: string;
  data: GalleryPreviewData[];
}

export interface GalleryPreviewData {
  title: string;
  text: string;
  image: any;
  id: number;
}