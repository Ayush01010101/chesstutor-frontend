import axios from 'axios'
import type { ReactNode } from "react";
import Board from "../Chess/ChessBoard";
import Alert from '@mui/material/Alert'
import { LinkChessaccount } from "./LinkChesscom";
import { useState } from "react";
import { GamesinfoPopup } from './ui/GamesinfoPopup';
import { User } from 'lucide-react';
const Play = (): ReactNode => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [games, setGames] = useState([])
  let accountname: string = "";
  const connectClick = async (username: string) => {
    const date = new Date()
    if (!username) {
      //show popup with error
      return;
    }
    accountname = accountname.concat("" + username)
    username.trim()
    try {
      const responce = await axios.get(`https://api.chess.com/pub/player/${username}/games/${date.getFullYear()}/${date.getMonth() + 1 < 10 ? ('0' + (date.getMonth() + 1)) : date.getMonth() + 1}`)

      if (responce.data.games.length == 0 || !responce) {
        setError("account not found  ".toUpperCase())
        setTimeout(() => {
          setError("")
        }, 3000)
        return;

      }
      else {
        const gameslength = responce.data.games.length
        const limitresponce = responce.data.games.slice(gameslength - 10, gameslength)
        setGames(limitresponce.reverse())
        console.log(limitresponce)
        setLoading(true)
      }

    } catch {
    }
  }
  return (
    <>

      <div className="min-h-screen  bg-black/97 p-7  ">
        {error && <div className=' w-full flex justify-evenly top-0  items-center  fixed up-to-down  z-100'>
          <Alert severity='error' className='w-[40%] flex justify-center items-center  font-bold text-2xl' >


            <div className='flex justify-evenly items-center gap-3'>
              {error}
              <User /> </div>

          </Alert>

        </div>}
        <div className="text-center mb-5  ">
          <h1 className="text-3xl md:text-4xl font-bold mb-1 p-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-300">
            Chess Analysis Studio
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Play chess with real-time AI analysis and voice assistance to
            improve your game
          </p>
        </div>



        <div className="flex flex-wrap w-full md:justify-evenly justify-center gap-5 md:gap-10">


          <div className="flex justify-center flex-wrap gap-7 items-center  md:w-1/2 p-4 bg-gray-900/50 rounded-2xl">
            <Board />

          </div>
          <LinkChessaccount
            funx={connectClick}

          />
          {/* card */}
          {/* <div className=" h-52 w-sm m-5 md:m-10 bg-black/80 shadow-2xl shadow-gray-900/40 rounded-2xl hover:shadow-gray-900/80 flex justify-center mt-5 ">
          
        </div> */}

          {loading &&
            <GamesinfoPopup
              games={games}
              username={accountname}
              setLoading={setLoading}
              loading={loading}
            />}
        </div>
      </div>




    </>
  );
};

export default Play;
