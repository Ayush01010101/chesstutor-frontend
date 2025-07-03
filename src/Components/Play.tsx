import type { ReactNode } from "react";
import Board from "../Chess/ChessBoard";
import { LinkChessaccount } from "./LinkChesscom";
import { GamesinfoPopup } from "./ui/GamesinfoPopup";
import { useState } from "react";
const Play = (): ReactNode => {
  const [loading,setLoading]=useState<boolean>(false)
  return (
    <>

    <div className="min-h-screen  bg-black/97 p-7">
    
        <div className="text-center mb-5  ">
          <h1 className="text-3xl md:text-4xl font-bold mb-1 p-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-300">
            Chess Analysis Studio
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Play chess with real-time AI analysis and voice assistance to
            improve your game 
          </p>
        </div>

   <div className="flex justify-center items-center w-screen border  h-screen  bg-black/70  fixed inset-0">
          <div className="h-[80%] w-[60%] rounded-2xl bg-gray-950">
                {loading} 
          </div>
      </div>
      
     <div className="flex flex-wrap w-full md:justify-evenly justify-center gap-5 md:gap-10">
        
          
        <div className="flex justify-center flex-wrap gap-7 items-center  md:w-1/2 p-4 bg-gray-900/40 rounded-2xl">
          <Board/>  
          
       
          
        </div>

        {/* card */}
        {/* <div className=" h-52 w-sm m-5 md:m-10 bg-black/80 shadow-2xl shadow-gray-900/40 rounded-2xl hover:shadow-gray-900/80 flex justify-center mt-5 ">
          
        </div> */}
        <LinkChessaccount/>
      </div>
      </div>
  
      
              
      <GamesinfoPopup
      setLoading={setLoading}
      loading={loading} 
      />
     
    </>
  );
};

export default Play;
