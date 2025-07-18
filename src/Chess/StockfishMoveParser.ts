const StockfishMoveParser = (bestmove: string): string | null => {
  const isbestmove = bestmove.includes("bestmove")

  if (!isbestmove) {
    return null;
  }

  const move: string = bestmove.split('bestmove')[1].split("ponder")[0].split("ponder")[0].trim()

  return move ? move : null



}



export {
  StockfishMoveParser
}
