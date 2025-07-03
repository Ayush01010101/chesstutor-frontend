// import { Chess } from 'chess.js';
// import Stockfish from 'stockfish.wasm'

//  async function stockfish (pgn: string): Promise<void> {
  
//   console.log(new Stockfish())
//   // const chess = new Chess();
//   // chess.loadPgn(pgn); // PGN load karo
//   // const moves = chess.history();

//   // console.log("♟ PGN Moves:", moves);

//   // // Ek ek move analyze karo
//   // for (let i = 0; i < moves.length; i++) {
//   //   const partialMoves = moves.slice(0, i + 1).join(' ');
//   //   const positionCommand = `position startpos moves ${partialMoves}`;

//   //   const engine = Stockfish();
//   //   const outputLines: string[] = [];

//   //   // Handle stockfish ka message
//   //   engine.onmessage = (line: string) => {
//   //     if (line.includes("info depth") || line.includes("bestmove")) {
//   //       outputLines.push(line);
//   //     }
//   //   };

//   //   // Send commands to stockfish
//   //   engine.postMessage("uci");
//   //   engine.postMessage("ucinewgame");
//   //   engine.postMessage("isready");
//   //   engine.postMessage(positionCommand); // current position set karo
//   //   engine.postMessage("go depth 12");   // analysis karo

//   //   // Wait engine response
//   //   await new Promise((res) => setTimeout(res, 1000));

//   //   console.log(`\n🔍 Move ${i + 1}: ${moves[i]}`);
//   //   outputLines.forEach(line => console.log("   " + line));
//   // }
// }

// export {stockfish}