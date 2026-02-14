export const SITE = {
  website: "https://www.condadocuantico.com/",
  author: "Alexis Rios Lopez",
  profile: "https://www.condadocuantico.com/", // O tu LinkedIn si prefieres
  desc: "Comunidad de Inteligencia Artificial, Agentes IA y Noticias Técnicas.",
  title: "Condado Cuántico",
  ogImage: "condado-cuantico-og.jpg", // Tarea pendiente: Crear/Subir esta imagen
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, 
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: true, // Útil para correcciones de la comunidad
    text: "Sugerir Cambios",
    url: "https://github.com/CondadoCuantico/condado-cuantico-web/edit/main/", // ACTUALIZAR con tu repo real
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "es", 
  timezone: "America/Mexico_City", // Zona horaria CDMX
} as const;
