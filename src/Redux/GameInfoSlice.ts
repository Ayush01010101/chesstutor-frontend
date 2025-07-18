import { createSlice } from '@reduxjs/toolkit'

const GameInfoSlice = createSlice({
  name: 'GameInfo',
  initialState: {
    gameobject: {},
    userside: ""
  },
  reducers: {
    insertgame: (state, action) => {
      state.gameobject = action.payload
    },
    setuserside: (state, action) => {
      state.userside = action.payload
    }
  }
})
const gameinfoobject = GameInfoSlice.reducer;
export { gameinfoobject }
export const { insertgame } = GameInfoSlice.actions
