import Instance from "./Instance.ts";
import type  { User as userresponce } from "@supabase/supabase-js";
import type { AuthResponse } from "@supabase/supabase-js";
class User {
  LoginUser = async (email:string):Promise<AuthResponse| null> => {

    
   try {
     const responce = await Instance.auth.signInWithOtp({
       email,
       options: {
     
         shouldCreateUser: true,
         emailRedirectTo: import.meta.env.VITE_ROOT_URL,
       },
     });
     return responce
   } catch {
        return null
   }
  };


  LogoutUser=async():Promise<void>=>{
    const responce=await Instance.auth.signOut()
  } 

  GetUser=async ():Promise<userresponce|null>=>{
    const responce=await Instance.auth.getUser()
    if(responce.error){
      return null
    }
    return responce.data.user

  }


}

export default new User;
