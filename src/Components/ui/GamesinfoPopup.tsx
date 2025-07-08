import { CircleX } from "lucide-react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createPortal } from "react-dom";
import { v4 } from 'uuid'
import Gamecard from "./Gamecard";
const GamesinfoPopup = ({

  loading,
  setLoading,
  games = [],
  username
}: {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  games: any[]
  username: string
}): ReactNode => {





  return (
    createPortal(
      <div className="flex justify-center items-center w-screen   h-screen   bg-black/75  fixed inset-0 " >

        <div className="relative  flex p-14  gap-9 flex-none flex-col overflow-auto items-center  bg-[#232931] h-[80%] w-[97%] md:w-[50%] rounded-2xl ">


          <div onClick={() => setLoading(!loading)} className="fixed  top-10  cursor-pointer right-2  md:right-10">

            <CircleX size={40} className="transition-all duration-300 hover:scale-125" color="white" /></div>
          {games?.map((gameinfo: any) => {
            let winner: 'white' | 'black' | 'draw';
            if (gameinfo.white.result == 'win') {
              winner = 'white'
            } else if (gameinfo.black.result == 'win') {
              winner = 'black'
            } else {
              winner = 'draw'
            }

            return (
              <Gamecard
                timecontrol={gameinfo.time_control}
                key={v4()}
                blackname={gameinfo.black.username}
                whitename={gameinfo.white.username}
                winner={winner}
                username={username}
              />
            )
          })}

        </div>
      </div>


      , document.querySelector("#portal") as HTMLDivElement)
  )
};

export { GamesinfoPopup };
