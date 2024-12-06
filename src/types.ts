export interface Personal {
  image: string;
  name: string;
  title: string;
  birthDate: string;
  email: string;
  phone: string;
  website: string;
  github: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

export interface Education {
  school: string;
  period: string;
}

export interface Language {
  language: string;
  level: string;
}

export type SkillLevel = 'CREATOR' | 'EXPERT' | 'ADVANCED' | 'INTERMEDIATE' | 'BASIC' | 'NATIVE' | 'FLUENT';

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface Project {
  name: string;
  description: string;
  features: string[];
  url?: string;
}

export interface CVData {
  personal: Personal;
  professionalSummary: string;
  experience: Experience[];
  earlierPositions: string[];
  skills: Skill[];
  education: Education[];
  languages: Language[];
  projects: Project[];
}
