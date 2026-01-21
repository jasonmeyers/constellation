export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon?: string;
  price?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  achievements?: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  tags: string[];
  slug: string;
  featured?: boolean;
}