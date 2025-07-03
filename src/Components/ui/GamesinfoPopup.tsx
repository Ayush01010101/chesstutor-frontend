import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createPortal } from "react-dom";
const GamesinfoPopup = ({
  
  loading,
  setLoading,
}: {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}): ReactNode => {




  return(
    createPortal(
      <div className="flex justify-center items-center w-screen border  h-screen  bg-black/75  fixed inset-0">
          <div className="h-[80%] w-[60%] rounded-2xl bg-gray-800">
                {loading} 
          </div>
      </div>
      
      
    ,document.querySelector("#portal") as HTMLDivElement)
  )
};

export { GamesinfoPopup };
