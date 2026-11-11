// Data types for portfolio content

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory[];
  status: 'professional' | 'portfolio' | 'wip';
  businessProblem: string;
  objective: string;
  dataset: string;
  technologies: string[];
  myContribution: string[];
  analyticalApproach: string[];
  keyFindings: string[];
  liveUrl?: string;
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  images?: string[];
  hasIllustrativeContent?: boolean;
}

export type ProjectCategory = 'Power BI' | 'SQL' | 'ERP Analytics' | 'Data Analytics' | 'Data Engineering';

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  startDate: string; // ISO for sorting
  endDate: string | 'present';
  location: string;
  type: string;
  achievements: string[];
  tags: string[];
}

export interface Skill {
  name: string;
  level?: 'proficient' | 'experienced' | 'familiar';
  projectRefs?: string[]; // project ids
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  url?: string;
  type: 'certification' | 'education' | 'publication' | 'simulation';
}
