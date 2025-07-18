import Landing from "../Components/Landing";
import useGetUserData from "../Components/CustomHooks/useGetUserdata";
import Navbar from "../Components/Navbar";
// import { pgn } from "../Supabase/Test";

import Analysis from "../Components/Play";





const Homepage = () => {

  const userdata = useGetUserData()

  // console.log(userdata)
  return (
    <>
      {userdata.islogin ?

        <>
          <Navbar />

          <Analysis />

        </>
        :
        <>


          <Landing />
        </>
      }
    </>
  )
}

export default Homepage 
