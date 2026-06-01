import project1Image from "../assets/img/projects-page-img-01.jpg";
import project2Image from "../assets/img/projects-page-img-02.jpg";
import project3Image from "../assets/img/projects-page-img-03.jpg";
import project4Image from "../assets/img/projects-page-img-04.jpg";
import project5Image from "../assets/img/projects-page-img-05.jpg";
import project6Image from "../assets/img/projects-page-img-06.jpg";
import type { ImageMetadata } from "astro";

export interface Activity {
  title: string;
  category: "Reuniones" | "Eventos" | "Talleres";
  location: string;
  year: string;
  image: ImageMetadata | ImageMetadata[];
  alt: string;
  description: string;
}

export const activities: Activity[] = [
  {
    title: "Taller de Lectura Comprensiva",
    category: "Talleres",
    location: "Biblioteca Institucional",
    year: "2026",
    image: [project1Image, project2Image, project3Image, project4Image],
    alt: "Estudiantes participando en taller de lectura comprensiva",
    description: "Taller enfocado en fortalecer las habilidades de comprensión lectora de los estudiantes de primaria y secundaria. Se trabajan estrategias como la identificación de ideas principales, inferencias, síntesis y análisis crítico de textos literarios y académicos. Los estudiantes participan en dinámicas grupales, lectura guiada y actividades lúdicas que fomentan el amor por la lectura.",
  },
  {
    title: "Reunión de Padres de Familia",
    category: "Reuniones",
    location: "Auditorio Principal",
    year: "2026",
    image: project2Image,
    alt: "Reunión con padres de familia en el auditorio",
    description: "Encuentro trimestral con los padres de familia para informar sobre el progreso académico y disciplinario de los estudiantes. Se abordan temas como el rendimiento escolar, la asistencia, la convivencia y las actividades extracurriculares programadas. Espacio de diálogo abierto donde los padres pueden expresar inquietudes y sugerencias para mejorar el entorno educativo.",
  },
  {
    title: "Feria de Ciencias 2026",
    category: "Eventos",
    location: "Patio Central",
    year: "2026",
    image: project3Image,
    alt: "Exposición de proyectos en la feria de ciencias",
    description: "Evento anual donde los estudiantes presentan proyectos científicos y tecnológicos desarrollados durante el año escolar. Se exponen maquetas, experimentos en vivo, prototipos de energías renovables, robótica y soluciones innovadoras a problemas de la comunidad. Un jurado evalúa la creatividad, el rigor científico y la presentación de cada proyecto.",
  },
  {
    title: "Taller de Robótica Básica",
    category: "Talleres",
    location: "Aula de Innovación",
    year: "2023",
    image: project4Image,
    alt: "Estudiantes armando robots en taller de robótica",
    description: "Introducción a la robótica educativa utilizando kits Arduino y LEGO Education. Los estudiantes aprenden conceptos básicos de electrónica, programación en bloques y mecánica, construyendo robots que responden a sensores y realizan tareas simples. El taller promueve el pensamiento computacional, la resolución de problemas y el trabajo en equipo.",
  },
  {
    title: "Reunión de Coordinación Docente",
    category: "Reuniones",
    location: "Sala de Profesores",
    year: "2024",
    image: project5Image,
    alt: "Docentes reunidos en coordinación pedagógica",
    description: "Sesión de trabajo mensual con todo el equipo docente para planificar, coordinar y evaluar las estrategias pedagógicas. Se revisan los avances curriculares, se comparten experiencias exitosas de aula y se diseñan intervenciones para estudiantes que requieren refuerzo académico. Incluye además formación continua en metodologías activas de enseñanza.",
  },
  {
    title: "Día del Logro Institucional",
    category: "Eventos",
    location: "Loseta Deportiva",
    year: "2023",
    image: project6Image,
    alt: "Celebración del día del logro institucional",
    description: "Jornada de celebración donde la comunidad educativa se reúne para compartir y exhibir los logros alcanzados durante el año escolar. Los estudiantes muestran sus trabajos, proyectos, presentaciones artísticas y deportivas. Se realiza una ceremonia de reconocimiento a los estudiantes destacados en las áreas académica, cultural y deportiva, con la participación activa de las familias.",
  },
  {
    title: "Taller de Arte y Pintura",
    category: "Talleres",
    location: "Aula de Arte",
    year: "2025",
    image: project2Image,
    alt: "Estudiantes pintando en taller de arte",
    description: "Espacio creativo donde los estudiantes exploran diversas técnicas de expresión artística como acuarela, acrílico, carboncillo y técnicas mixtas. El taller fomenta la sensibilidad estética, la creatividad y la expresión personal, abordando también la apreciación del arte peruano y sus principales exponentes. Al finalizar, se organiza una exposición con las obras de los participantes.",
  },
  {
    title: "Reunión del CONEI",
    category: "Reuniones",
    location: "Sala de Reuniones",
    year: "2025",
    image: project3Image,
    alt: "Miembros del CONEI en sesión de trabajo",
    description: "Sesión ordinaria del Consejo Educativo Institucional donde participan el director, representantes de docentes, personal administrativo, estudiantes y padres de familia. Se tratan temas fundamentales como la aprobación del plan anual de trabajo, la ejecución presupuestal, la evaluación de metas institucionales y la toma de decisiones sobre mejoras en la infraestructura y servicios educativos.",
  },
  {
    title: "Festival de Danzas Folklóricas",
    category: "Eventos",
    location: "Plataforma Deportiva",
    year: "2024",
    image: project4Image,
    alt: "Presentación de danzas folklóricas por estudiantes",
    description: "Colorido festival que reúne a todos los grados de la institución en una jornada de presentación de danzas típicas de la costa, sierra y selva del Perú. Los estudiantes, ataviados con trajes tradicionales, interpretan coreografías preparadas durante semanas de ensayo. El evento busca fortalecer la identidad cultural, el respeto por la diversidad y la valoración del folklore nacional.",
  },
  {
    title: "Taller de Computación Básica",
    category: "Talleres",
    location: "Aula de Cómputo",
    year: "2026",
    image: project5Image,
    alt: "Estudiantes en clase de computación",
    description: "Curso introductorio al manejo de herramientas informáticas para estudiantes de primaria. Se enseñan conceptos fundamentales como el uso del sistema operativo, procesadores de texto, hojas de cálculo, presentaciones y navegación segura en internet. El taller está diseñado para reducir la brecha digital y brindar competencias tecnológicas básicas necesarias para el aprendizaje moderno.",
  },
  {
    title: "Reunión de APAFA",
    category: "Reuniones",
    location: "Auditorio Principal",
    year: "2024",
    image: project1Image,
    alt: "Asamblea general de la APAFA",
    description: "Asamblea general de la Asociación de Padres de Familia donde se elige la nueva junta directiva y se presentan los informes de gestión y estados financieros del período anterior. Se discuten y aprueban las cuotas y aportes, así como los proyectos de inversión en infraestructura y equipamiento para la institución educativa con los fondos recaudados.",
  },
  {
    title: "Aniversario Institucional",
    category: "Eventos",
    location: "Toda la Institución",
    year: "2025",
    image: project6Image,
    alt: "Celebración del aniversario de la institución educativa",
    description: "Semana completa de celebraciones por un año más de vida institucional. Incluye desfile cívico, concursos de ambientación de aulas, competencias deportivas inter-aulas, festival gastronómico con platos típicos, presentaciones artísticas y la tradicional serenata. Las actividades integran a estudiantes, docentes, personal administrativo y familias en un ambiente de confraternidad y orgullo institucional.",
  },
];

export const activityCategories = [
  "Todas las Actividades",
  "Reuniones",
  "Eventos",
  "Talleres",
] as const;

export const INITIAL_VISIBLE = 6;
