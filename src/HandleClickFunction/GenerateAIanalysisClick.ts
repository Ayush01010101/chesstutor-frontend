import axios from "axios"
import FilteredPGNParser from "@/Chess/FilteredPGNParser"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { insertcurrentgame, insertfilteredPGN, updatemoves } from "@/Redux/CurrentGameSlice"
const GenerateAIanalysisClick = (userside: string, pgn: string) => {
  const dispatch = useDispatch()
  const movesincrement = useSelector((state: any) => state.CurrentGame?.movesincrement)
  FilteredPGNParser(userside, pgn).then((res) => {

    dispatch(insertcurrentgame(res))
    dispatch(insertfilteredPGN(res))

    let chessgame;

    if (res.length > 20) {
      chessgame = res.slice(20)
      dispatch(insertfilteredPGN(res.slice(20, res.length)))
    } else {
      chessgame = res
      dispatch(insertfilteredPGN([]))
    }


    axios.post('http://localhost:3000/api/v1/model/llama', {
      chessgame,
    },

    ).then((res) => {
      dispatch(updatemoves(movesincrement + 20))
      console.dir(res.data)
    }).catch(() => {
    })

  }).catch(() => {
  })

}


export default GenerateAIanalysisClick
