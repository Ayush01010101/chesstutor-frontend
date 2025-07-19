import { ChevronsUp, Clock, Cpu, Hourglass, Zap } from "lucide-react";
import type { Dispatch, ReactNode, SetStateAction } from "react"
import { Button } from '@mui/material'
import { createPortal } from "react-dom";
import ParseOpeningNameFromPGN from "@/HandleClickFunction/ParseOpeningNameFromPGN";
import { useSelector } from "react-redux";
import GenerateAIanalysisClick from "@/HandleClickFunction/GenerateAIanalysisClick";
import { useDispatch } from "react-redux";
type propstype = {
  setstate: Dispatch<SetStateAction<boolean>>
  accountname: string
}
const SelectedgamePGNPopup = ({ setstate, accountname }: propstype): ReactNode => {
  let openingname: string | null = ""
  const gamedata = useSelector((state: any) => state.gameinfo?.gameobject)
  const dispatch = useDispatch()
  if (gamedata.pgn) {
    openingname = ParseOpeningNameFromPGN(gamedata.pgn)
    console.dir(gamedata)
  }
  let userside = 'white'
  if (gamedata?.black?.username === accountname.toLowerCase()) {
    userside = 'black'
  }
  const timecontrol = Math.floor(gamedata.time_control / 60);
  return createPortal(

    <div className="h-screen w-screen fixed flex justify-center items-center bg-black/60">
      <div className="relative  md:p-12 flex items-center  p-5 rounded-2xl bg-gray-900 flex-col md:w-[35%] w-[90%] md:min-h-[50%] h-auto">

        <div className="mb-5 w-full text-white font-medium text-xl">{openingname}</div>

        {/*username showcase card */}
        <div className='h-[30%]  gap-3  text-white rounded-2xl flex min-w-[60%]  items-center md:justify-around justify-center flex-wrap shrink-0'>



          <div className="h-28 p-1 w-36 rounded-sm bg-gray-800 flex  flex-wrap fy-center items-center cursor-pointer hover:scale-110 justify-center transition-all duration-200 ">
            <div className="w-[90%]  break-all items-center text-center ">{gamedata?.white?.username}</div>
            <div className="text-center">{gamedata?.white?.rating}</div>
          </div>

          <div className="h-28 w-36  flex flex-wrap  rounded-sm p-3  bg-gray-800    justify-center items-center  cursor-pointer hover:scale-110  transition-all duration-200 ">
            <div className="w-[90%] break-all text-center">{gamedata?.black?.username}</div>
            <div className="text-center">{gamedata?.black?.rating}</div>

          </div>




        </div>
        <div className="w-2/3 mt-4  flex flex-wrap justify-center md:mt-6 items-center md:gap-4 gap-3 shadow-md shadow-black/15  rounded-2xl p-2">

          <div className="flex  gap-1 p-2 w-30 h-12 items-center justify-center hover:scale-110 transition-all duration-200  bg-gray-700 rounded-xl text-white ">
            <div className="text-center"><Hourglass color="white" size={20} /></div>
            <div className="text-center"> {timecontrol} MIN</div>
          </div>

          <div className="flex gap-1 p-2  h-12  items-center justify-center  w-30 hover:scale-110 transition-all duration-200  bg-gray-700 rounded-xl text-white ">
            {gamedata.time_class == 'bullet' ? <ChevronsUp color="white" size={20} /> : gamedata.time_class == 'rapid' ? <Clock size={20} color="white" /> : <Zap color="white" size={20} />}
            {gamedata?.time_class?.toUpperCase()}
          </div>



        </div>

        <div className=" flex gap-3 self-end flex-wrap  justify-end mt-5 md:mt-8">
          <Button onClick={() => {

            GenerateAIanalysisClick(userside, gamedata.pgn, dispatch)


          }} variant="contained" className="flex gap-3 h-12 justify-center items-center" color="success">
            Get AI Analysis <Cpu size={23} />
          </Button>

          <Button onClick={() => {
            setstate((prev) => !prev)
          }} variant="outlined" color="error">
            Cancel
          </Button>


        </div>
      </div>
    </div >

    , document.querySelector('#portal') as HTMLDivElement)

}

export default SelectedgamePGNPopup;
