import { Chess } from 'chess.js'
import { StockfishMoveParser } from './StockfishMoveParser';
import Stockfish from './StockFish';
export type ChessMoveResponceType = {
  myside: 'white' | 'black',
  moveNumber: number;
  whiteFen: string;
  whiteMove: string;
  whiteBestMove: string | null;
  blackFen: string;
  blackMove: string;
  blackBestMove: string | null;
}

const FilteredPGNParser = async (userside: string, pgn: string): Promise<ChessMoveResponceType[]> => {
  const chess = new Chess()
  chess.loadPgn(pgn)
  const moves = chess.history()
  chess.reset()
  let movenumber: number = 0
  let responce: ChessMoveResponceType[] = []
  for (let move = 0; move < moves.length; move += 2) {

    movenumber++
    console.log(movenumber)
    const whitecurrentmove = moves[move]
    chess.move(whitecurrentmove)
    let whitefen = chess.fen()
    let stockfishbestmoveforwhite = ''
    let whitebestmove: string | null = ''


    let blackcurrentmove: string
    let blackbestmove: string | null = ""
    let blackfen: string = ""





    if (userside === 'white') {
      stockfishbestmoveforwhite = await Stockfish(whitefen)
      whitebestmove = StockfishMoveParser(stockfishbestmoveforwhite)
    }

    //black moves 
    if ((move + 1) < moves.length) {
      chess.move(moves[move + 1])
      blackcurrentmove = moves[move + 1]
      blackfen = chess.fen()
      if (userside === 'black') {
        let stockfishmoveforblack = await Stockfish(chess.fen())
        const blackmove = StockfishMoveParser(stockfishmoveforblack)
        blackbestmove = blackmove

      }

    }

    let responceobj: ChessMoveResponceType = {
      myside: userside as 'black' | 'white',
      moveNumber: movenumber,
      whiteFen: whitefen,
      whiteMove: whitecurrentmove,
      whiteBestMove: whitebestmove,
      blackFen: blackfen,
      blackMove: moves[move + 1],
      blackBestMove: blackbestmove

    }
    responce.push(responceobj)

  }



  return responce

}

export default FilteredPGNParser
