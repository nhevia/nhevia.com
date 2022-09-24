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
  description: string | null;
  created_at: string;
  language: string | null;
  topics?: string[];
  stargazers_count?: string | number;
  forks?: string | number;
}

export interface StackoverflowData {
  profile_image: string;
  reputation: string;
  link: string;
  rating: string;
  badge_counts: {
    bronze: string;
    silver: string;
    gold: string;
  };
}
