export interface Item {
  poster_path: string;
  title?: string;
  name?: string;
  overview: string;
  backdrop_path: string;
  id: number;
  media_type: "tv" | "movie";
  vote_average: number;
}

export interface Detail {
  backdrop_path: string;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
  last_air_date: string;
  name: string;
  seasons: {
    episode_count: number;
    season_number: number;
  }[];
}

export interface VideoTrailer {
  name: string;
  key: string;
}

export interface SearchResult {
  page: number;
  total_pages: number;
  total_results: number;
  results: Item[];
}
