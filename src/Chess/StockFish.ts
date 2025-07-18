function Stockfish(fen: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const engine = new Worker("stockfish.js");

    engine.onerror = (e) => {
      reject(e);
    };

    engine.onmessage = (e) => {
      const line = e.data;

      if (line.includes("bestmove")) {

        engine.terminate();
        resolve(e.data)
      }
    };

    engine.postMessage("uci");
    engine.postMessage("ucinewgame");
    //engine.postMessage("setoption name MultiPV value 1");
    engine.postMessage(`position fen ${fen}`);
    engine.postMessage("go depth 7");
  });
}


export default Stockfish;
