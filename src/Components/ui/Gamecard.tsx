import { insertgame } from "@/Redux/GameInfoSlice";
import type { ReactNode } from "react";
import { useDispatch } from "react-redux";
import type { SetStateAction } from "react";
import { SquareEqual, SquareMinus, SquarePlus, Timer, Zap } from "lucide-react";
type chesscardpropstype = {
  timecontrol: 'blitz' | 'bullet' | 'rapid',
  winner: 'white' | 'black' | 'draw',
  blackname: string,
  whitename: string,
  username: string,
  gameinfo: any,
  setState: React.Dispatch<SetStateAction<boolean>>
  setPopup: React.Dispatch<SetStateAction<boolean>>
}

const Gamecard: React.FC<chesscardpropstype> = ({ timecontrol, winner, blackname, whitename, username, gameinfo, setState, setPopup }): ReactNode => {
  const dispatch = useDispatch()
  let userside: 'black' | 'white';
  const formatnames = [blackname.toLowerCase().trim(), username.toLowerCase().trim()];
  const [black, user] = formatnames;
  if (black == user) {
    userside = 'black';
  } else {
    userside = 'white'
  }
  const importgameclick = (): void => {
    dispatch(insertgame(gameinfo))
    setState((prev) => !prev)
    setPopup((prev) => !prev)
  }
  return (
    <>
      <div className="bg-gray-900/50 shadow-black inset-shadow-2xs hover:shadow-md shadow-s  cursor-pointer w-full hover:scale-95   transition-all duration-300 md:w-[60%] rounded-2xl  min-h-[40%]">

        <div onClick={() => {
          importgameclick()
        }} className="flex items-center h-full justify-evenly rounded-2xl">


          {
            parseInt(timecontrol) >= 600 ? <Timer
              color="white"
              size={34} /> : <Zap size={34} color="white" />
          }

          <div className="text-white flex flex-col flex-wrap">

            <span>{blackname} </span>

            <span>{whitename} </span>


          </div>
          <div>
            {winner == userside ? <SquarePlus color="green" /> : (winner == 'draw' ? <SquareEqual color="gray" /> : <SquareMinus color="red" />)}

          </div>

        </div>
      </div >

    </>
  )

}

//GET https://api.chess.com/pub/player/magnuscarlsen/games/2025/06


export default Gamecard


