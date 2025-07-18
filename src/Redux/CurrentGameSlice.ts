import { createSlice } from '@reduxjs/toolkit'
import type { ChessMoveResponceType } from '@/Chess/FilteredPGNParser'
import type { PayloadAction } from '@reduxjs/toolkit'

type initialStateType = {
  currentgame: object,
  moveincrement: number,
  filteredPGN: ChessMoveResponceType[]

}

const initialState: initialStateType = {
  currentgame: {},
  moveincrement: 0,
  filteredPGN: []
}
const CurrentGameSlice = createSlice({
  name: 'CurrentGame',
  initialState,
  reducers: {
    insertcurrentgame: (state, action) => {
      state.currentgame = action.payload
    },
    insertfilteredPGN: (state, action: PayloadAction<ChessMoveResponceType[]>) => {
      state.filteredPGN = action.payload
    },
    updatemoves: (state, action) => {
      state.moveincrement = action.payload
    }
  }
})
const CurrentGameReducer = CurrentGameSlice.reducer;
export { CurrentGameReducer }
export const { insertcurrentgame, updatemoves, insertfilteredPGN } = CurrentGameSlice.actions
