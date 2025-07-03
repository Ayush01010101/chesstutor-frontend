import { StockfishToPGN } from "./StockFishToPGN";


function stockfish(pgn:string) {
  const engine = new Worker("stockfish.js");

  engine.postMessage("uci");
  engine.postMessage('ucinewgame');

  engine.postMessage('setoption name MultiPV value 3');
  engine.postMessage("go depth 12");
  
  engine.postMessage(
    "position fen " + "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
  );
  


  engine.onmessage = (e) => {
    const check=e.data.includes("bestmove")
    if(check){  
      

    }
  };
}

export { stockfish };
