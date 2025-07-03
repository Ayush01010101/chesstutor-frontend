export type PGNobject={
    move:string 
    stockfishMove:string[]
    
}| null
const StockfishToPGN=(bestmove:string):PGNobject=>{
   //todo:-
    //check it's best move
    //loop all the best moves and make the object from it 
    //return the object with PGNobject strcture 
    //bestmove e2e4 ponder d7d5
   
   
    const isbestmove=bestmove.includes("bestmove")

    if(!isbestmove){
        return null;
    }

    const move=bestmove.split('bestmove')[1].split("ponder")[0].split("ponder")[0].trim()
    if(move){
        return {
            move:best
        }
    }



   return null;
}

export{
    StockfishToPGN
}