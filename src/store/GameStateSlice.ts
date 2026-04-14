import { createSlice } from "@reduxjs/toolkit";

interface GameState {
  isStarted: boolean;
}

const initialState: GameState = {
  isStarted: false,
};

export const GameStateSlice = createSlice({
  name: "gameState",
  initialState,
  reducers: {
    startGame: state => {
      state.isStarted = true;
    },
  },
});

export const { startGame } = GameStateSlice.actions;

export default GameStateSlice.reducer;
