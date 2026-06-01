import projectImage1 from "../../assets/img/projects-page-img-01.jpg";
import projectImage2 from "../../assets/img/projects-page-img-02.jpg";
import projectImage3 from "../../assets/img/projects-page-img-03.jpg";
import projectImage4 from "../../assets/img/projects-page-img-04.jpg";
import type { ImageMetadata } from "astro";

export interface TourismPlace {
  id: number;
  number: string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  image: ImageMetadata;
  location: string;
  date: string;
  features: string[];
}

export const tourismPlaces: TourismPlace[] = [
  {
    id: 1,
    number: '01',
    title: 'Laguna Azul',
    slug: 'laguna-azul',
    subtitle: 'Naturaleza y tranquilidad',

    description:
      'Ubicada entre montañas y paisajes naturales, la Laguna Azul es uno de los principales atractivos turísticos de nuestra comunidad.',

    image: projectImage1,
    location: 'Comunidad Andina',
    date: 'Todo el año',

    features: [
      'Naturaleza',
      'Fotografía',
      'Senderismo'
    ]
  },

  {
    id: 2,
    number: '02',
    title: 'Mirador de la Comunidad',
    slug: 'mirador-de-la-comunidad',
    subtitle: 'Vista panorámica',

    description:
      'Desde este punto turístico se puede apreciar toda la belleza de la comunidad y sus paisajes naturales.',

    image: projectImage2,
    location: 'Zona Alta',
    date: 'Mayo - Septiembre',

    features: [
      'Panorámica',
      'Atardeceres',
      'Cultural'
    ]
  },

  {
    id: 3,
    number: '03',
    title: 'Plaza Principal',
    slug: 'plaza-principal',
    subtitle: 'Historia y cultura',

    description:
      'La plaza principal representa el corazón de la comunidad y sus actividades culturales.',

    image: projectImage3,
    location: 'Centro',
    date: 'Todo el año',

    features: [
      'Historia',
      'Festividades',
      'Eventos'
    ]
  },

  {
    id: 4,
    number: '04',
    title: 'Catarata Escondida',
    slug: 'catarata-escondida',
    subtitle: 'Aventura natural',

    description:
      'Rodeada de vegetación y caminos naturales, la catarata ofrece una experiencia única.',

    image: projectImage4,
    location: 'Reserva Natural',
    date: 'Junio - Diciembre',

    features: [
      'Ecológico',
      'Fotografía',
      'Aventura'
    ]
  }
]

