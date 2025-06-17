import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { User as userresponce } from '@supabase/supabase-js'
export interface initialStateinterface {
  userdata: null | userresponce
  islogin:boolean
}

const initialState: initialStateinterface = {
  userdata:null,
  islogin:false

}

export const UserSlice = createSlice({
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

export const { setUserdata, setIslogin } = UserSlice.actions

export default UserSlice.reducer