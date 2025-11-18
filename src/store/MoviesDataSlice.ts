import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMoviesByYearRange } from "@/services/tmdbService";
import type { TMDBResponse } from "@/services/tmdbService";

export interface MoviesDataState {
  isLoading: boolean;
  data: TMDBResponse | null;
  error: string | null;
}

const initialState: MoviesDataState = {
  isLoading: false,
  data: null,
  error: null,
};

export interface FetchMoviesParams {
  startYear: number;
  endYear: number;
  page?: number;
}

export const fetchMovies = createAsyncThunk(
  "moviesData/fetchMovies",
  async (params: FetchMoviesParams, { rejectWithValue }) => {
    try {
      const { startYear, endYear, page = 1 } = params;
      const data = await getMoviesByYearRange(startYear, endYear, page);
      return data;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Failed to fetch movies"
      );
    }
  }
);

export const MoviesDataSlice = createSlice({
  name: "MoviesData",
  initialState,
  reducers: {
    clearMovies: state => {
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.data = null;
        state.error = action.payload as string;
      });
  },
});

export const { clearMovies } = MoviesDataSlice.actions;

export default MoviesDataSlice.reducer;
