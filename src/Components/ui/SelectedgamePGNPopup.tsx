import { CircleX, Cpu, Flame } from "lucide-react";
import type { Dispatch, ReactNode, SetStateAction } from "react"
import { Button } from '@mui/material'
import { createPortal } from "react-dom";
import ParseOpeningNameFromPGN from "@/HandleClickFunction/ParseOpeningNameFromPGN";
import { useSelector } from "react-redux";
type propstype = {
  setstate: Dispatch<SetStateAction<boolean>>
}
const SelectedgamePGNPopup = ({ setstate }: propstype): ReactNode => {
  const gamedata = useSelector((state: any) => state.gameinfo?.gameobject)
  let openingname: string | null = ""
  if (gamedata.pgn) {
    openingname = ParseOpeningNameFromPGN(gamedata.pgn)

  }


  return createPortal(

    <div className="h-screen w-screen fixed flex justify-center items-center bg-black/60">
      <div className="relative md:p-12  p-5 rounded-2xl flex-wrap  bg-gray-900 flex-col md:w-[35%] w-[90%] md:h-[60%] h-[70%]">
        <div className="absolute -top-10 right-1 md:-right-10 cursor-pointer" onClick={() => {
          setstate((prev) => !prev)
        }}><CircleX size={40} color="white" /></div>

        <div className="mb-5 w-full text-white font-medium text-xl">{openingname}</div>

        <div className='h-[30%]  text-white rounded-2xl flex items-center md:justify-around justify-between '>
          <div className="h-28 md:w-40 w-30  rounded-sm bg-gray-800 flex-col p-8  cursor-pointer hover:scale-110 transition-all duration-200 ">
            <div className="flex justify-center items-center flex-wrap">{gamedata?.white?.username}</div>
            <div className="text-center">{gamedata?.white?.rating}</div>
          </div>


          <Flame size={40} color="#88E788" />


          <div className="h-28 md:w-40 w-30 rounded-sm bg-gray-800 flex-col p-8  cursor-pointer hover:scale-110  transition-all duration-200 ">

            <div className="flex flex-wrap items-center justify-center text-center">{gamedata?.black?.username}</div>
            <div className="text-center">{gamedata?.black?.rating}</div>
          </div>



        </div>
        <div className="w-full h-1/2 flex   border">

          <div className="flex h-[30%] w-[30%] hover:scale-110 transition-all duration-200  bg-gray-700 rounded-xl ">  </div>


        </div>

        <div className=" flex gap-3 justify-end">
          <Button variant="contained" className="flex gap-3 h-12 justify-center items-center" color="success">
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
