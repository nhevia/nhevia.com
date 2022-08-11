export interface ProjectFeatured {
  title: string;
  description: string;
  image: string;
  demo_url?: string;
  code_url?: string;
}

export interface Repository {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  created_at: string;
  language: string;
  topics?: string[];
}

export interface Post {
  url?: string;
  title?: string;
  social_image?: string;
  description?: string;
  id?: number;
}

export interface So {
  score?: number;
  id?: number;
  link?: string;
  title?: string;
}
