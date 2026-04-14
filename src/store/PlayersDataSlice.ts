import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Player {
  id: string;
  name: string;
  score: number;
  moviewsGuessed: string[];
}

export interface PlayersData {
  players: Player[];
}

const initialState: PlayersData = {
  players: [],
};

export const PlayersDataSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    addNewPlayer: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      state.players = [
        ...state.players,
        {
          id: `${payload}-${state.players.length + 1}`,
          moviewsGuessed: [],
          name: payload,
          score: 0,
        },
      ];
    },
  },
});

export const { addNewPlayer } = PlayersDataSlice.actions;

export default PlayersDataSlice.reducer;
