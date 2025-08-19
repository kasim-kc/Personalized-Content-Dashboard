import type {
  NewsApiResponse,
  TMDBResponse,
  SocialApiResponse,
} from "../features/content/types";

export const fetchNews = async (category: string): Promise<NewsApiResponse> => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${category}&apiKey=${
      import.meta.env.VITE_NEWS_API_KEY
    }`
  );
  if (!response.ok) throw new Error("News API request failed");
  return response.json();
};

export const fetchMovies = async (): Promise<TMDBResponse> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmQxMjg1OGFmNzRjNTNlNjM2NjQ3YzJiN2Q5YzlmMyIsIm5iZiI6MTc1NTQzNzU5MS4zMzcsInN1YiI6IjY4YTFkYTE3ODdjMTg1OWMzZDAyZDI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.96ojZBIv62ZAakpyik0YBI1lXs143ZRGkMJHyFUz93U",
      },
    }
  );
  if (!response.ok) throw new Error("TMDB API request failed");
  return response.json();
};

export const fetchSocialPosts = async (): Promise<SocialApiResponse> => {
  const mockData: SocialApiResponse = {
    data: [
      {
        id: "social1",
        username: "tech_enthusiast",
        content:
          "Just tried the new React 18 features - amazing performance improvements!",
        timestamp: "2h ago",
      },
    ],
  };
  return Promise.resolve(mockData);
};
