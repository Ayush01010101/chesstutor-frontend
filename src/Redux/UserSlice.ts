import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { User as userresponce } from '@supabase/supabase-js'
export interface CounterState {
  userdata: null | userresponce
  islogin:boolean
}

const initialState: CounterState = {
  userdata:null,
  islogin:false

}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {       
    setUserdata: (state, action: PayloadAction<userresponce>) => {
      state.userdata = action.payload
    },
    setIslogin: (state, action: PayloadAction<boolean>) => {
      state.islogin = action.payload
    },
  },
})

export const { setUserdata, setIslogin } = counterSlice.actions

export default counterSlice.reducer