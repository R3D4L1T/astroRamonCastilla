export interface Tool {
  slug: string;
  titulo: string;
  descripcion: string;
  descripcionLarga: string;
  tags: string[];
  icon: string;
  price: string;
  difficulty: string;
  beneficios: string[];
  usoEducativo: string;
}

// List Of Icons
// icon: "🎨"
//icon: "✨" icon: "🖌️" icon: "🧩" icon: "💡" icon: "🚀"
//icon: "🔥" icon: "⚡" icon: "💻" icon: "🖥️" icon: "⚙️"
//icon: "🔧" icon: "📦" icon: "🧠" icon: "🤖" icon: "🛰️"
//icon: "💬" icon: "📱" icon: "📡" icon: "🌐" icon: "📢"
//icon: "✉️" icon: "📚" icon: "📝" icon: "✅" icon: "📊"
//icon: "📅" icon: "⏰" icon: "🚀" icon: "⚡" icon: "✨"
// ⚫ ⚪ 🟢 🔴 🟡 🟥 🟨 🟩 🔵 🟣 🟠 💀


export const tools: Tool[] = [
  {
    slug: "canva",
    titulo: "Canva",
    descripcion: "Diseña recursos visuales para tus clases.",
    descripcionLarga:
      "Canva es una plataforma de diseño gráfico en línea que permite a docentes y estudiantes crear presentaciones, infografías, carteles, videos cortos y materiales didácticos de forma sencilla. Su versión gratuita ofrece miles de plantillas educativas listas para usar.",
    tags: ["Diseño", "Creatividad", "Primaria"],
    icon: "🎨 ",
    price: "🟢",
    difficulty: "🔥",
    beneficios: [
      "Interfaz intuitiva de arrastrar y soltar",
      "Miles de plantillas educativas gratuitas",
      "Colaboración en tiempo real entre estudiantes",
      "Integración con Google Classroom y otras plataformas",
    ],
    usoEducativo:
      "Ideal para crear presentaciones atractivas, infografías de resumen, líneas de tiempo históricas, mapas conceptuales, y recursos visuales para cualquier asignatura. Los estudiantes pueden crear sus propios proyectos colaborativos.",
  },
  {
    slug: "kahoot",
    titulo: "Kahoot",
    descripcion: "Crea quizzes... ",
    descripcionLarga: "Crea quizzes... ",
    tags: ["tag1", "tag2", "tag3"],
    icon: "🎮",
    price: "🟢",
    difficulty: "🔥",
    beneficios: [
      "beneficio1",
      "beneficio2",
      "beneficio3",
      "beneficio4",
    ],
    usoEducativo:
      "para examenes",
  },
  // ----------------------------------------------------------------
  // ----------------- TIC Tools
  // ----------------------------------------------------------------
  {
    slug: "socrative",
    titulo: "Socrative",
    descripcion: "Crea actividades interactivas, evaluaciones y cuestionarios en tiempo real ",
    descripcionLarga: "Socrative es una plataforma educativa digital que permite a los docentes crear actividades interactivas, evaluaciones y cuestionarios en tiempo real. Los estudiantes pueden responder desde celulare, tablets o computadoras utilizando la clave de sala. La herramienta ayuda a verificar la comprension de los estudiantes de manera rapida y dinamica permitiendo que los docentes obtengan los resultados de manera inmediata. Socrative puede utilizarse tanto en clases presenciales como virtuales",
    tags: ["evaluacion", "retroalimentacion"],
    icon: "🎮",
    price: "🟢",
    difficulty: "🔥",
    beneficios: [
      "beneficio1",
      "beneficio2",
      "beneficio3",
      "beneficio4",
    ],
    usoEducativo:
      "para examenes",
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function getAllTags(): string[] {
  return [...new Set(tools.flatMap((tool) => tool.tags))];
}
