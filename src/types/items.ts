export interface ProjectFeatured {
  title: string;
  description: string;
  image: string;
  demo_url?: string;
  code_url?: string;
}

export interface Repository {
  full_name?: string;
  description?: string;
  html_url?: string;
  language?: string;
  stargazers_count?: number;
  forks?: number;
  id?: number;
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
