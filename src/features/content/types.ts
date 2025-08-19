export type ContentItem = {
  id: string;
  type: "news" | "movie" | "social";
  title: string;
  description?: string;
  url?: string;
  source?: string;
  image?: string;
  rating?: number;
  username?: string;
  timestamp?: string;
};

export interface NewsApiArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  source: {
    name: string;
  };
  publishedAt: string;
}

export interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: NewsApiArticle[];
}

export interface TMDBMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

export interface TMDBResponse {
  page: number;
  results: TMDBMovie[];
  total_pages: number;
  total_results: number;
}

export interface SocialPost {
  id: string;
  username: string;
  content: string;
  timestamp: string;
}

export interface SocialApiResponse {
  data: SocialPost[];
}
