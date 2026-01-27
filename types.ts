
export interface Project {
  id: string;
  title: string;
  role: string;
  date: string;
  description: string;
  techStack: string[];
  image: string;
}

export interface Skill {
  name: string;
  category: 'AI/ML' | 'Engineering' | 'Tools' | 'Soft Skills';
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
