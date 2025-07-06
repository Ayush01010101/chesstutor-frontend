import { CircleX } from "lucide-react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createPortal } from "react-dom";
import Gamecard from "./Gamecard";
const GamesinfoPopup = ({

  loading,
  setLoading,
  games = []
}: {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  games: object
}): ReactNode => {





  return (
    createPortal(
      <div className="flex justify-center items-center w-screen   h-screen   bg-black/75  fixed inset-0 " >

        <div className="relative  flex   gap-9  flex-col overflow-y-auto overflow-x-hidden   bg-[#232931] h-[80%] w-[60%] rounded-2xl ">

          <div onClick={() => setLoading(!loading)} className="absolute -top-15 cursor-pointer  -right-15"><CircleX size={40} color="white" /></div>
          {games.map((gameinfo: any) => {
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
                blackname={gameinfo.black.username}
                whitename={gameinfo.white.username}
                winner={winner}

              />
            )
          })}

        </div>
      </div>


      , document.querySelector("#portal") as HTMLDivElement)
  )
};

export { GamesinfoPopup };
