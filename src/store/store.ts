import { configureStore } from "@reduxjs/toolkit";
import MoviesDataSlice from "./MoviesDataSlice";

export const store = configureStore({
  reducer: {
    moviesData: MoviesDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
