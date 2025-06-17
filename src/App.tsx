import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Dashboard from "./Pages/DashboardPage";
import AuthWrapper from "./Wrapper/AuthWrapper";
import Homepage from "./Pages/Homepage";
import useGetUserData from "./Components/CustomHooks/useGetUserdata";
function App() {  
  useGetUserData()
  const router = createBrowserRouter([
  {
    path: "/",
    element: 
    
      <Homepage/>


    
    
    
  },
  {
    path:"/dashboard",
    element:<Dashboard/>
  }
]);

  return (
    <>
    <AuthWrapper>
      <RouterProvider router={router}/>
          </AuthWrapper>
    </>
  )
}

export default App
