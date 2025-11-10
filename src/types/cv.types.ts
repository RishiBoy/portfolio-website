// Core types for the portfolio/CV data

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github?: string;
}

export interface Skill {
  name: string;
  category: SkillCategory;
  proficiency?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export type SkillCategory = 
  | 'Languages'
  | 'Frontend'
  | 'Backend'
  | 'Cloud & DevOps'
  | 'Databases'
  | 'AI/ML'
  | 'Tools'
  | 'Soft Skills';

export interface SkillGroup {
  category: SkillCategory;
  skills: string[];
  icon?: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
  projects?: Project[];
  clients?: string[];
  links?: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  highlights?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  graduationDate: string;
  classification?: string;
  field?: string;
}

export interface Reference {
  name: string;
  position: string;
  company: string;
  email: string;
  linkedin?: string;
}

export interface CVData {
  personalInfo: {
    name: string;
    title: string;
    tagline: string;
    summary: string;
    contact: ContactInfo;
  };
  skills: SkillGroup[];
  experience: WorkExperience[];
  education: Education[];
  references: Reference[];
}
