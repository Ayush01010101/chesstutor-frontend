import User from "../Supabase/User";
import  type  { AuthResponse } from "@supabase/supabase-js";
const LoginClick=async (email:string):Promise<  AuthResponse | null  > =>{

   const user=await User.LoginUser(email)
   
    return user



}

export default LoginClick