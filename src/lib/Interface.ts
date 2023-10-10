export interface Anime {
  created_at: number;
  categories: string[];
  title: string;
  summary: string;
  image: string;
  id: string;
  author?: string;
}

export interface Category {
  created_at: { seconds: number; nanoseconds: number };
  title: string;
  id: string;
}
