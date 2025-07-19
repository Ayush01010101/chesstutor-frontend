import axios from "axios"
import FilteredPGNParser from "@/Chess/FilteredPGNParser"
import { insertfilteredPGN, updatemoves } from "@/Redux/CurrentGameSlice"
const GenerateAIanalysisClick = (userside: string, pgn: string, dispatch: any) => {
  FilteredPGNParser(userside, pgn).then((res) => {


    let chessgame;

    if (res.length > 20) {
      chessgame = res.slice(0, 21)
      console.log(chessgame)
      console.log('full game ', res)
      dispatch(insertfilteredPGN(res.slice(20, res.length)))
    } else {
      chessgame = res
      dispatch(insertfilteredPGN([]))
    }


    axios.post('http://localhost:3000/api/v1/model/llama', {
      chessgame,

    },
      { timeout: 60000 }

    ).then((res) => {
      dispatch(updatemoves(20))
      console.dir(res.data)
    }).catch(() => {
    })

  }).catch(() => {
  })

}


export default GenerateAIanalysisClick
