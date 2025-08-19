import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import {
  fetchNews,
  fetchMovies,
  fetchSocialPosts,
} from "../../services/contentService";
import type {
  ContentItem,
  NewsApiResponse,
  TMDBResponse,
  SocialApiResponse,
} from "./types";

interface ContentState {
  feed: ContentItem[];
  originalFeed: ContentItem[];
  trending: ContentItem[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ContentState = {
  feed: [],
  originalFeed: [],
  trending: [],
  status: "idle",
  error: null,
};

export const fetchContent = createAsyncThunk<
  ContentItem[],
  string[],
  { rejectValue: string }
>("content/fetchContent", async (categories, { rejectWithValue }) => {
  try {
    const [newsResponse, moviesResponse, socialResponse] = (await Promise.all([
      fetchNews(categories.join(",")),
      fetchMovies(),
      fetchSocialPosts(),
    ])) as [NewsApiResponse, TMDBResponse, SocialApiResponse];

    const newsItems: ContentItem[] = newsResponse.articles.map((article) => ({
      id: `news-${article.title}`,
      type: "news",
      title: article.title,
      description: article.description,
      url: article.url,
      source: article.source.name,
      image: article.urlToImage,
      publishedAt: article.publishedAt,
    }));

    const movieItems: ContentItem[] = moviesResponse.results.map((movie) => ({
      id: `movie-${movie.id}`,
      type: "movie",
      title: movie.title,
      description: movie.overview,
      rating: movie.vote_average,
      image: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : undefined,
      publishedAt: movie.release_date,
    }));

    const socialItems: ContentItem[] = socialResponse.data.map((post) => ({
      id: `social-${post.id}`,
      type: "social",
      username: post.username,
      content: post.content,
      timestamp: post.timestamp,
      title: `Post by ${post.username}`,
      description: post.content,
    }));

    return [...newsItems, ...movieItems, ...socialItems];
  } catch (err) {
    return rejectWithValue(`Failed to fetch content ${err}`);
  }
});

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    reorderFeed: (state, action: { payload: ContentItem[] }) => {
      state.feed = action.payload;
    },
    searchContent: (state, action: PayloadAction<string>) => {
      const searchTerm = action.payload.toLowerCase();
      if (searchTerm === "") {
        state.feed = state.originalFeed || state.feed;
      } else {
        state.feed = (state.originalFeed || state.feed).filter(
          (item) =>
            item.title.toLowerCase().includes(searchTerm) ||
            (item.description &&
              item.description.toLowerCase().includes(searchTerm)) ||
            (item.source && item.source.toLowerCase().includes(searchTerm)) ||
            (item.username && item.username.toLowerCase().includes(searchTerm))
        );
      }
    },
    setOriginalFeed: (state, action: PayloadAction<ContentItem[]>) => {
      state.originalFeed = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContent.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchContent.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.feed = action.payload;
        state.originalFeed = action.payload;
        state.trending = action.payload.slice(0, 5);
      })
      .addCase(fetchContent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Unknown error occurred";
      });
  },
});

export const { reorderFeed, searchContent, setOriginalFeed } =
  contentSlice.actions;
export default contentSlice.reducer;
