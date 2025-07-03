import { useSelector} from "react-redux";
import type { RootState } from "../../Redux/Store.ts";
import type  { initialStateinterface } from "../../Redux/UserSlice";

const useGetUserData=():initialStateinterface=>{
    const userdata=useSelector((state:RootState)=>state.user)
   
    
    return userdata;    
}

export default useGetUserData