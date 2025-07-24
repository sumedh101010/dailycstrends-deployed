export interface User {
  id: string;
  email: string;
  name: string;
  subscribed: boolean;
  preferences: EmailPreferences;
  createdAt: string;
}

export interface EmailPreferences {
  topics: string[];
  frequency: 'daily' | 'weekly';
  timeOfDay: string;
  includeDSA: boolean;
  includeInnovations: boolean;
  includeResearch: boolean;
}

export interface TrendItem {
  id: string;
  title: string;
  description: string;
  category: 'dsa' | 'ai-ml' | 'cybersecurity' | 'web-dev' | 'systems' | 'research';
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  codeExample?: string;
  link?: string;
  date: string;
}

export interface EmailTemplate {
  id: string;
  subject: string;
  trends: TrendItem[];
  generatedAt: string;
}