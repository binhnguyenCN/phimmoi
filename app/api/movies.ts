/* eslint-disable no-unused-vars */
// libs
import axios from "./client";

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

export interface SearchResult {
  page: number;
  total_pages: number;
  total_results: number;
  results: Item[];
}

const getHomeData: () => Promise<any> = async () => {
  const HomeAPIRoutes = {
    "Trending Movies": { url: "/trending/movie/week" },
    "Popular Movies": { url: "/movie/popular" },
    "Top Rated Movies": { url: "/movie/top_rated" }
  };
  const trendingMovie = await axios.get(HomeAPIRoutes["Trending Movies"].url);
  const popularMovie = await axios.get(HomeAPIRoutes["Popular Movies"].url);
  const topRatedMovie = await axios.get(HomeAPIRoutes["Top Rated Movies"].url);
  const result = [trendingMovie, popularMovie, topRatedMovie];
  // const result = await Promise.all(
  //   Object.keys(HomeAPIRoutes).map((item) => axios.get(HomeAPIRoutes[item].url))
  // );

  const data = result.reduce((movies, category, index) => {
    movies[Object.keys(HomeAPIRoutes)[index]] = category.data.results.map(
      (item) => item
    );
    return movies;
  }, {});
  return data;
};

const getMovieDetails: (id: string) => Promise<any> = async (id) => {
  const labels = ["data", "casts", "similar"];

  const result = (
    await Promise.all([
      axios.get(`/movie/${id}`),
      axios.get(`/movie/${id}/credits`),
      axios.get(`/movie/${id}/similar`)
    ])
  ).reduce((final, current, index) => {
    if (labels[index] === "data") {
      final[labels[index]] = current.data;
    } else if (labels[index] === "casts") {
      final[labels[index]] = current.data.cast
        .filter((item: any) => item.name && item.character && item.profile_path)
        .slice(0, 10);
    } else if (labels[index] === "similar") {
      final[labels[index]] = current.data.results.map((item: any) => item);
    }
    return final;
  }, {} as any);

  return result;
};

const searchMovie: (query: string, page?: number) => Promise<any> = async (
  query,
  page = 1
) => {
  const { data } = await axios.get("/search/multi", {
    params: { query, page }
  });

  return {
    ...data,
    results: data.results.filter((item: any) => item.poster_path)
  };
};

export default { getHomeData, getMovieDetails, searchMovie };
