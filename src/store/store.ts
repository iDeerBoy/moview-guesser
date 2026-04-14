import { configureStore } from "@reduxjs/toolkit";
import MoviesDataSlice from "./MoviesDataSlice";
import PlayersDataSlice from "./PlayersDataSlice";

export const store = configureStore({
  reducer: {
    moviesData: MoviesDataSlice,
    playersData: PlayersDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
