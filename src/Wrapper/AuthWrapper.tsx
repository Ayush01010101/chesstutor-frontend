import type { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { setUserdata } from "../Redux/UserSlice";

import { useState } from "react";
import User from "../Supabase/User";
const AuthWrapper = ({children}:{children:ReactNode}):ReactNode => {
    const dispatch=useDispatch()
    const [loading,setLoading]=useState(true)
    User.GetUser()
    .then((userdata)=>{
        if(userdata){
            dispatch(setUserdata(userdata))

        }
        setLoading(false)
    })
    .catch(()=>{
        setLoading(false)
    })
    

    return (
        <>  
        {loading?<div className="text-4xl">Loading...</div>:children}
        
        </>
    )
 
}
export default AuthWrapper; 