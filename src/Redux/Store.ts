import { configureStore } from '@reduxjs/toolkit'
import userReducer from './UserSlice'
import { gameinfoobject as gameinfoobjectReducer } from './GameInfoSlice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    gameinfo: gameinfoobjectReducer
  },
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
