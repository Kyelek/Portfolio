import { PortfolioData } from '../models/portfolio.models';

/**
 * Fuente única de contenido del portfolio.
 * Todo lo que aparece en la web (home, casos de estudio y CV) sale de aquí.
 */
export const PORTFOLIO_DATA: PortfolioData = {
  profile: {
    name: 'Francisco Eugenio Ibeas Aniceto',
    role: 'Desarrollador Full Stack',
    tagline:
      'Construyo producto digital de punta a punta: de la API a la interfaz, y del prototipo a producción.',
    summary:
      'Desarrollador Full Stack especializado en Angular, con experiencia en consultoría enterprise (NTT DATA), ' +
      'producto propio y desarrollo para clientes. Trabajo en frontend con Angular y TypeScript, en backend con Java, ' +
      'Python y Node, y llevo mis proyectos hasta móvil con React Native y Expo. Me importa entender el problema ' +
      'antes de escribir código, y que lo que entrego funcione, se mantenga y aporte valor.',
    location: 'Granada, España',
    email: 'fco.eugenio@hotmail.com',
    phone: undefined,
    availability: 'Abierto a nuevas oportunidades',
    photoUrl: '/foto-perfil.webp',
    cvPdfUrl: undefined,
    facts: [
      { label: 'Ubicación', value: 'Granada · Remoto o híbrido' },
      { label: 'Especialidad', value: 'Angular · TypeScript · Java' },
      { label: 'Idiomas', value: 'Español nativo · Inglés profesional' },
      { label: 'Estado', value: 'Abierto a nuevas oportunidades' },
    ],
    socials: [
      { label: 'GitHub', url: 'https://github.com/Kyelek', icon: 'github' },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/francisco-eugenio-ibeas-aniceto',
        icon: 'linkedin',
      },
    ],
    highlights: [
      { value: '4+', label: 'años desarrollando software' },
      { value: '+20', label: 'webs entregadas a clientes' },
      { value: '4', label: 'productos propios, web y móvil' },
    ],
  },

  strengths: [
    {
      icon: 'layers',
      title: 'Full Stack de verdad',
      description:
        'Angular en el frontend; Java, Python (Django REST) y Node en el backend; PostgreSQL y Docker. Puedo llevar una funcionalidad completa sin depender de nadie.',
    },
    {
      icon: 'target',
      title: 'Mentalidad de producto',
      description:
        'Como fundador de Selah he gestionado el ciclo completo: prototipo, desarrollo, producción, despliegue y validación de mercado. Pienso en el usuario y en el negocio, no solo en el ticket.',
    },
    {
      icon: 'bolt',
      title: 'Desarrollo asistido por IA, con criterio',
      description:
        'Uso agentes de IA para iterar más rápido, pero reviso, verifico y entiendo cada cambio. Más velocidad sin perder calidad.',
    },
    {
      icon: 'users',
      title: 'Comunicación con negocio',
      description:
        'He trabajado codo con codo con marketing, ventas, diseño y clientes, y he sido docente. Traduzco necesidades a soluciones técnicas y explico lo técnico con claridad.',
    },
  ],

  process: [
    {
      title: 'Entender',
      description:
        'Reproduzco el problema y pregunto hasta entender el porqué. Muchos bugs y malas funcionalidades nacen de un requisito mal entendido.',
    },
    {
      title: 'Investigar',
      description:
        'Antes de tipar una API o tocar una librería, compruebo cómo funciona de verdad. Las suposiciones son la fuente de errores más cara.',
    },
    {
      title: 'Construir',
      description:
        'Iteraciones cortas, TypeScript estricto y código que otra persona pueda mantener mañana. Entrego pronto y ajusto con feedback real.',
    },
    {
      title: 'Verificar',
      description:
        'No doy algo por resuelto porque compile. Lo compruebo en el resultado final y busco la causa raíz, no el parche.',
    },
  ],

  projects: [
    {
      slug: 'mh-wilds-builder',
      status: 'En producción',
      title: 'Monster Hunter Wilds Builder',
      summary:
        'Planificador de equipamiento para Monster Hunter Wilds: combina armaduras y armas y calcula al instante las habilidades y bonificaciones resultantes.',
      year: 2026,
      role: 'Desarrollo completo',
      stack: [
        'Angular 19',
        'Signals',
        'rxResource',
        'Angular Material',
        'ngx-translate',
        'REST API',
      ],
      featured: true,
      links: {
        demo: 'https://mh-wilds-buildier.vercel.app',
        repo: 'https://github.com/Kyelek/MhWildsBuildier',
      },
      metrics: [
        { value: '5', label: 'piezas combinables en tiempo real' },
        { value: '0', label: 'usos de any: TypeScript estricto' },
      ],
      caseStudy: {
        context:
          'Los jugadores de Monster Hunter Wilds dedican mucho tiempo a probar combinaciones de armadura para conseguir las habilidades que necesitan. Los datos existen en una API pública (wilds.mhdb.io), pero no hay una forma cómoda de simular un conjunto.',
        problem:
          'Calcular el nivel acumulado de cada habilidad a partir de cinco piezas distintas, detectar qué piezas pertenecen al mismo set y activar sus bonificaciones, que dependen del número de piezas equipadas y pueden coexistir varias a la vez.',
        approach: [
          'Investigué la forma real de las respuestas de la API antes de tipar nada, con ejemplos concretos, para modelar correctamente los rangos de bonificación por número de piezas.',
          'Modelé el dominio en TypeScript estricto (sin any): piezas, sets, rangos de habilidad y bonificaciones.',
          'Diseñé toda la lógica como estado derivado con Signals y computed: cada cambio de pieza recalcula habilidades, niveles y bonificaciones sin código imperativo.',
          'Corregí un primer diseño que solo activaba el set predominante para soportar varios sets simultáneos (por ejemplo, 2 piezas de un set y 3 de otro).',
        ],
        solution:
          'Una SPA en Angular 19 con componentes standalone, carga de datos con rxResource, interfaz con Angular Material y soporte multidioma con ngx-translate, desplegada en Vercel.',
        results: [
          'Cálculo instantáneo de habilidades activas, con la descripción exacta de cada nivel alcanzado.',
          'Soporte de varias bonificaciones de set activas a la vez, fiel a las reglas del juego.',
          'Resolví un bug visual en los desplegables encontrando su causa raíz en el CSS compilado: estilos globales mal anidados que nunca se aplicaban.',
        ],
        learnings:
          'Ante un bug que «no debería pasar», inspeccionar el resultado compilado en lugar de seguir parcheando. El primer arreglo, basado en una suposición, no funcionó; el segundo, basado en evidencia, sí.',
      },
    },
    {
      slug: 'selah',
      status: 'En producción',
      title: 'Selah · Producto phygital con NFC',
      summary:
        'Piezas físicas con un chip NFC que, al acercar el móvil, abren una web con un versículo aleatorio. Producto propio que diseño, fabrico y vendo como fundador.',
      year: 2026,
      role: 'Founder & Lead Developer',
      stack: ['NFC', 'JavaScript', 'CSS', 'REST API', 'Vercel', 'Impresión 3D'],
      featured: true,
      links: {
        demo: 'https://web-versiculos-aleatorios.vercel.app',
        repo: 'https://github.com/Kyelek/WebVersiculosAleatorios',
      },
      metrics: [
        { value: '1 gesto', label: 'acercar el móvil, sin instalar ninguna app' },
        { value: 'Idea → venta', label: 'producto completo de punta a punta' },
      ],
      caseStudy: {
        context:
          'Selah nace de la intersección entre el mundo físico y el digital (phygital): dar una capa digital a objetos cotidianos. Cada pieza que vendo lleva un chip NFC.',
        problem:
          'Conseguir que un objeto físico ofrezca una experiencia digital instantánea, sin apps ni registros, y llevarlo de la idea a un producto real que se vende, con los recursos de una sola persona.',
        approach: [
          'Diseñé el ecosistema completo: pieza física, chip NFC y experiencia web.',
          'Prototipé e imprimí en 3D las piezas, y gestioné su producción.',
          'Construí una web ligera, sin frameworks, que carga un versículo aleatorio desde una API REST, con un estado de carga claro y animaciones solo en CSS para que se abra al instante en cualquier móvil.',
          'Usé metodologías de desarrollo asistidas por IA para acortar el ciclo de iteración sin sacrificar calidad.',
        ],
        solution:
          'El cliente acerca el móvil a la pieza y el chip NFC abre una web desplegada en Vercel que muestra un versículo distinto en cada lectura.',
        results: [
          'Producto en venta: las piezas físicas abren la experiencia web real.',
          'Ciclo de vida gestionado de punta a punta: prototipo, fabricación, desarrollo, despliegue y validación de mercado.',
          'Experiencia en decisiones de producto y negocio, no solo técnicas.',
        ],
        learnings:
          'En un producto físico la web tiene que funcionar a la primera y rápido: nadie espera ni reintenta delante de un objeto. Eso me llevó a la solución más ligera posible.',
      },
    },
    {
      slug: 'dejar-de-fumar',
      status: 'Beta cerrada',
      title: 'Dejar De Fumar Fácil',
      summary:
        'App Android, en beta cerrada en Google Play, para dejar de fumar: un toque registra cada cigarro y la app muestra en tiempo real cuánto tiempo llevas sin fumar.',
      year: 2026,
      role: 'Desarrollo y publicación',
      stack: ['React Native', 'Expo', 'TypeScript', 'AsyncStorage', 'AdMob', 'EAS'],
      featured: true,
      links: { repo: 'https://github.com/Kyelek/DontSmoke' },
      metrics: [
        { value: '1 toque', label: 'para registrar un cigarro' },
        { value: '0', label: 'cuentas, formularios o datos en servidores' },
      ],
      caseStudy: {
        context:
          'Quien intenta dejar de fumar necesita ver su progreso, pero muchas apps piden registro, formularios y configuración antes de aportar nada.',
        problem:
          'Crear una herramienta tan simple que se use de verdad en el momento crítico, respetando la privacidad del usuario y funcionando sin conexión.',
        approach: [
          'Reduje la interacción principal a un solo gesto: tocar el cigarro.',
          'Guardé todos los datos en el propio dispositivo con AsyncStorage: sin cuentas ni servidores.',
          'Diseñé mensajes de motivación que cambian según el tiempo sin fumar, incluido el caso de recaída.',
          'Gestioné la publicación en Google Play: ficha en varios idiomas, política de privacidad, builds con EAS y lanzamiento en beta cerrada.',
        ],
        solution:
          'App en React Native y Expo con contador en tiempo real, estadísticas diarias y totales, historial editable y monetización discreta con AdMob.',
        results: [
          'Experiencia sin fricción: funciona desde el primer segundo, sin registro.',
          'Privacidad por diseño: los datos nunca salen del móvil.',
          'Publicada en beta cerrada en Google Play, recogiendo feedback antes del lanzamiento público.',
        ],
      },
    },
    {
      slug: 'pasta-timer',
      status: 'En desarrollo',
      title: 'Tiempos para pasta',
      summary:
        'App Android de temporizador de cocción por tipo y marca de pasta, construida con Angular sobre React Native.',
      year: 2026,
      role: 'Desarrollo completo',
      stack: ['Angular 22', 'ng-native', 'Expo', 'React Native', 'expo-notifications', 'Vitest'],
      featured: true,
      links: { repo: 'https://github.com/Kyelek/PastaTimer' },
      metrics: [
        { value: '10', label: 'pastas con tiempos verificados' },
        { value: '7', label: 'marcas reales' },
      ],
      caseStudy: {
        context:
          'Los tiempos de cocción cambian según el tipo de pasta, la marca y el punto deseado (al dente, suave o para terminar en salsa).',
        problem:
          'Ofrecer tiempos fiables y una alarma que suene aunque el móvil esté bloqueado o la app cerrada, usando Angular en una app nativa.',
        approach: [
          'Elegí ng-native para aprovechar Angular 22 en una app nativa sobre Expo y React Native.',
          'Verifiqué los tiempos reales con webs oficiales y envases, y los modelé como datos (al dente, suave y en salsa).',
          'Diseñé un temporizador basado en la hora de fin y no en un contador en memoria, para que sobreviva a que el sistema cierre la app.',
          'Planifiqué el trabajo en un roadmap por tareas, con estados y notas, y validé cada paso en un móvil real.',
        ],
        solution:
          'Catálogo con buscador, pantalla de detalle con botones de cocción y un temporizador con notificación persistente y alarma en canal propio.',
        results: [
          'Angular llevado a móvil nativo con una arquitectura limpia y testeada con Vitest.',
          'Temporizador robusto frente al ciclo de vida de Android.',
        ],
      },
    },
  ],

  experience: [
    {
      kind: 'dev',
      company: 'Selah',
      role: 'Founder & Lead Software Developer',
      start: 'may. 2026',
      location: 'España',
      description:
        'Producto propio phygital: piezas físicas con chip NFC que abren una experiencia web. Diseño, fabrico y vendo las piezas.',
      achievements: [
        'Diseño, modelado y desarrollo integral de un ecosistema escalable que une hardware NFC e interfaces web dinámicas.',
        'Interfaces minimalistas con animaciones orientadas a una experiencia inmersiva y de buen rendimiento.',
        'Gestión del ciclo de vida completo: prototipado, impresión 3D, producción, repositorios, despliegue y validación de mercado.',
        'Uso de metodologías de desarrollo asistidas por IA para acelerar la iteración manteniendo la calidad del código.',
      ],
      stack: ['NFC', 'JavaScript', 'REST API', 'Vercel', 'Impresión 3D'],
    },
    {
      kind: 'dev',
      company: 'NTT DATA Europe & Latam',
      role: 'Center Developer Full Stack',
      start: 'ago. 2025',
      end: 'mar. 2026',
      location: 'Granada',
      description:
        'Desarrollo en proyectos de gran envergadura para clientes enterprise dentro de la consultora.',
      achievements: [
        'Desarrollo frontend con Angular 18 y gestión de estado con Redux.',
        'Desarrollo backend con Java 21.',
        'Control de versiones e integración continua con GitLab CI/CD.',
        'Trabajo en equipos grandes bajo metodologías ágiles y formación continua.',
      ],
      stack: ['Angular 18', 'Redux', 'Java 21', 'GitLab CI'],
    },
    {
      kind: 'dev',
      company: 'Creative Quality S.L.',
      role: 'Full Stack Web Developer',
      start: 'ene. 2024',
      end: 'ene. 2025',
      location: 'Granada',
      description: 'Desarrollo de aplicaciones web full stack para producto propio y clientes.',
      achievements: [
        'Frontend con Angular (hasta v19) y TypeScript: componentes, servicios, routing y formularios dinámicos con Formly.',
        'Backend con Python, Django REST Framework y PostgreSQL, contenedorizado con Docker.',
        'Interfaces con Angular Material, Tailwind y RxJS siguiendo estándares actuales de código limpio.',
        'Trabajo en equipo con Jira, Bitbucket y Git; pruebas de API con Postman.',
      ],
      stack: ['Angular', 'Django REST', 'PostgreSQL', 'Docker', 'RxJS'],
    },
    {
      kind: 'dev',
      company: 'Profesional independiente',
      role: 'Desarrollador Full Stack',
      start: 'jul. 2023',
      end: 'ago. 2025',
      location: 'Granada',
      description:
        'Desarrollo de proyectos propios para profundizar en nuevas tecnologías y arquitecturas.',
      achievements: [
        'Proyectos con Angular, TypeScript, JavaScript, PHP, Python, Node, Java y SQL.',
        'Control de versiones y publicación de proyectos en GitHub.',
      ],
      stack: ['Angular', 'Node', 'Java', 'Python', 'PHP'],
    },
    {
      kind: 'dev',
      company: 'Infowork Technology',
      role: 'Desarrollador Full Stack',
      start: 'mar. 2023',
      end: 'jun. 2023',
      location: 'Granada',
      description: 'Desarrollo de dos aplicaciones web internas para el equipo de marketing.',
      achievements: [
        'Herramientas para generar landing pages de ofertas para la web de la empresa, que ayudaron a aumentar las ventas.',
        'Backend con PHP y Node conectado a SQL y GraphQL; frontend con Angular y TypeScript.',
        'Colaboración directa con ventas, marketing y diseño en un equipo de 4 personas.',
      ],
      stack: ['Angular', 'PHP', 'Node', 'GraphQL', 'SQL'],
    },
    {
      kind: 'dev',
      company: 'Incorpora Marketing',
      role: 'Desarrollador Frontend',
      start: 'mar. 2022',
      end: 'jun. 2022',
      location: 'Granada',
      description: 'Desarrollo web para clientes de la agencia.',
      achievements: [
        'Más de 20 webs para clientes como Málaga Moto Center, Celmosa o Grupo Eigra.',
        'Comunicación directa con clientes para entender sus necesidades; dailies con el equipo.',
      ],
      stack: ['HTML', 'CSS', 'CMS', 'Git'],
    },
    {
      kind: 'other',
      company: 'Feu Vert España',
      role: 'Coordinador de ventas',
      start: 'jul. 2026',
      end: 'sep. 2026',
      location: 'Granada',
      description:
        'Coordinación de la operativa diaria de tienda, gestión de stock e incidencias, y asesoramiento técnico-comercial.',
      achievements: [],
      stack: [],
    },
    {
      kind: 'other',
      company: 'Feu Vert España',
      role: 'Asistente de ventas',
      start: 'jun. 2025',
      end: 'sep. 2025',
      location: 'Granada',
      description:
        'Atención comercial, gestión de caja y presupuestos, y apoyo operativo a taller y tienda.',
      achievements: [],
      stack: [],
    },
    {
      kind: 'other',
      company: 'Formación acreditada',
      role: 'Docente online',
      start: 'may. 2025',
      end: 'jun. 2025',
      location: 'Granada',
      description:
        'Diseño de cursos online, preparación de material didáctico y aplicación de metodologías formativas.',
      achievements: [],
      stack: [],
    },
  ],

  education: [
    {
      institution: 'Ipartek Servicios Informáticos',
      title: 'Desarrollo Full Stack con Java',
      start: '2023',
      end: '2023',
    },
    {
      institution: 'EIG Business School',
      title: 'CFGS Desarrollo de Aplicaciones Multiplataforma',
      start: '2023',
      end: '2023',
    },
    {
      institution: 'EIG Business School',
      title: 'CFGS Desarrollo de Aplicaciones Web',
      start: '2020',
      end: '2022',
    },
    {
      institution: 'Dipthylom Imagen Digital',
      title: 'SSCE0110 · Docencia de la Formación Profesional para el Empleo',
      start: '2025',
      end: '2025',
    },
  ],

  skills: [
    {
      category: 'Frontend',
      items: [
        'Angular',
        'TypeScript',
        'RxJS',
        'Signals',
        'Redux',
        'Angular Material',
        'Formly',
        'Tailwind',
        'SCSS',
      ],
    },
    {
      category: 'Backend',
      items: ['Java 21', 'Python', 'Django REST', 'Node.js', 'Express', 'PHP', 'GraphQL'],
    },
    { category: 'Móvil', items: ['React Native', 'Expo', 'ng-native', 'EAS'] },
    { category: 'Datos', items: ['PostgreSQL', 'SQL', 'SQLite'] },
    {
      category: 'DevOps y herramientas',
      items: ['Git', 'GitLab CI/CD', 'Docker', 'Vercel', 'Postman', 'Jira', 'Bitbucket'],
    },
    { category: 'IA', items: ['Claude Code', 'Desarrollo asistido por IA'] },
  ],

  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Profesional' },
  ],

  certifications: [
    { name: 'JavaScript Moderno: guía para dominar el lenguaje' },
    { name: 'Introducción a Docker' },
    { name: 'JavaScript intermedio' },
    { name: 'Introducción a la programación con pseudocódigo' },
  ],
};
