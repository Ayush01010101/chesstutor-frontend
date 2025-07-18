import { configureStore } from '@reduxjs/toolkit'
import userReducer from './UserSlice'
import { gameinfoobject as gameinfoobjectReducer } from './GameInfoSlice';
import { CurrentGameReducer } from './CurrentGameSlice.ts';
export const store = configureStore({
  reducer: {
    user: userReducer,
    gameinfo: gameinfoobjectReducer,
    CurrentGameReducer
  },
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
