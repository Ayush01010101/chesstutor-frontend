import type { ReactNode } from "react";
import { SquarePlus, Timer } from "lucide-react";
type chesscardpropstype = {
  timecontrol: 'blitz' | 'bullet' | 'rapid',
  winner: 'white' | 'black' | 'draw',
  blackname: string,
  whitename: string,
}

const Gamecard: React.FC<chesscardpropstype> = ({ timecontrol, winner, data, blackname, whitename, }): ReactNode => {
  return (
    <>
      <div className="bg-gray-900/50 cursor-pointer w-[80%] hover:scale-95       transition-all duration-500 md:w-[60%] rounded-2xl  h-[15%]">

        <div className="flex items-center h-full justify-evenly">

          <Timer
            color="white"
            size={50}

          />
          <div className="text-white flex flex-col flex-wrap">

            <span>{blackname} </span>

            <span>{whitename} </span>


          </div>
          <div>
            <SquarePlus color="green" />
          </div>

        </div>
      </div >

    </>
  )

}

//GET https://api.chess.com/pub/player/magnuscarlsen/games/2025/06


export default Gamecard


