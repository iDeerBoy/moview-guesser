const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
const TMDB_ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

export interface TMDBMovie {
  id: number;
  title: string;
  original_title: string;
  release_date: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  vote_count: number;
  popularity: number;
}

export interface TMDBResponse {
  page: number;
  results: TMDBMovie[];
  total_pages: number;
  total_results: number;
}

const fetchTMDB = async (endpoint: string): Promise<TMDBResponse> => {
  const response = await fetch(`${TMDB_BASE_URL}${endpoint}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
      accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(
      `TMDB API Error: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
};

/**
 * Obtiene películas por rango de años
 * @param startYear - Año inicial
 * @param endYear - Año final
 * @param page - Número de página (default: 1)
 */
export const getMoviesByYearRange = async (
  startYear: number,
  endYear: number,
  page: number = 1
): Promise<TMDBResponse> => {
  const endpoint = `/discover/movie?language=es-ES&sort_by=popularity.desc&primary_release_date.gte=${startYear}-01-01&primary_release_date.lte=${endYear}-12-31&page=${page}`;
  return fetchTMDB(endpoint);
};

/**
 * Busca una película por título
 * @param query - Título de la película a buscar
 */
export const searchMovie = async (query: string): Promise<TMDBResponse> => {
  const endpoint = `/search/movie?query=${encodeURIComponent(query)}&language=es-ES&page=1`;
  return fetchTMDB(endpoint);
};

/**
 * Obtiene películas populares
 * @param page - Número de página (default: 1)
 */
export const getPopularMovies = async (
  page: number = 1
): Promise<TMDBResponse> => {
  const endpoint = `/movie/popular?language=es-ES&page=${page}`;
  return fetchTMDB(endpoint);
};

/**
 * Construye la URL completa del póster
 * @param posterPath - Path del póster desde TMDB
 * @param size - Tamaño del póster (w92, w154, w185, w342, w500, w780, original)
 */
export const getPosterUrl = (
  posterPath: string | null,
  size: string = "w500"
): string => {
  if (!posterPath) return "";
  return `${TMDB_IMAGE_BASE_URL}/${size}${posterPath}`;
};

/**
 * Construye la URL completa del backdrop
 * @param backdropPath - Path del backdrop desde TMDB
 * @param size - Tamaño del backdrop (w300, w780, w1280, original)
 */
export const getBackdropUrl = (
  backdropPath: string | null,
  size: string = "w1280"
): string => {
  if (!backdropPath) return "";
  return `${TMDB_IMAGE_BASE_URL}/${size}${backdropPath}`;
};
