import { configureStore } from "@reduxjs/toolkit";
import MoviesDataSlice from "./MoviesDataSlice";
import PlayersDataSlice from "./PlayersDataSlice";
import GameStateSlice from "./GameStateSlice";

export const store = configureStore({
  reducer: {
    moviesData: MoviesDataSlice,
    playersData: PlayersDataSlice,
    gameState: GameStateSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
