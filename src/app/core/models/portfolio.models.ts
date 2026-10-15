export type IconName =
  | 'github'
  | 'linkedin'
  | 'mail'
  | 'external'
  | 'arrow-right'
  | 'arrow-left'
  | 'download'
  | 'sun'
  | 'moon'
  | 'menu'
  | 'close'
  | 'copy'
  | 'check'
  | 'bolt'
  | 'target'
  | 'layers'
  | 'users'
  | 'map-pin';

export interface SocialLink {
  label: string;
  url: string;
  icon: IconName;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  location: string;
  email: string;
  /** Opcional: se muestra solo en el CV. Al ser una web pública, mejor dejarlo vacío. */
  phone?: string;
  availability: string;
  /** Ruta a una imagen dentro de /public. Si no hay, se muestra un monograma. */
  photoUrl?: string;
  /** Datos clave que se muestran en la ficha del hero. */
  facts: { label: string; value: string }[];
  /** Ruta a un PDF dentro de /public (opcional). */
  cvPdfUrl?: string;
  socials: SocialLink[];
  highlights: Metric[];
}

export interface Metric {
  value: string;
  label: string;
}

export interface Strength {
  icon: IconName;
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface CaseStudy {
  context: string;
  problem: string;
  approach: string[];
  solution: string;
  results: string[];
  learnings?: string;
}

export type ProjectStatus = 'En producción' | 'Beta cerrada' | 'En desarrollo' | 'Finalizado';

export interface Project {
  slug: string;
  status: ProjectStatus;
  title: string;
  summary: string;
  year: number;
  role: string;
  stack: string[];
  featured: boolean;
  image?: string;
  links: { demo?: string; repo?: string };
  metrics?: Metric[];
  caseStudy: CaseStudy;
}

export interface Experience {
  /** 'dev' aparece en la web y en el CV; 'other' solo en el CV, de forma resumida. */
  kind: 'dev' | 'other';
  company: string;
  role: string;
  start: string;
  end?: string;
  location: string;
  description: string;
  achievements: string[];
  stack: string[];
}

export interface Education {
  institution: string;
  title: string;
  start: string;
  end?: string;
  description?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface Certification {
  name: string;
  issuer?: string;
}

export interface PortfolioData {
  profile: Profile;
  strengths: Strength[];
  process: ProcessStep[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  skills: SkillGroup[];
  languages: Language[];
  certifications: Certification[];
}
