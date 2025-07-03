import type { ReactNode } from "react";
import { Chessboard } from "react-chessboard";

const Board = (): ReactNode => {
  function getBoardWidth(): number {
    const windowWidth = window.innerWidth;
    if (windowWidth < 480) return 355; //mobile
    if (windowWidth < 768) return 400;               //tablets
    return 600;                                  //desktop or big screens
  }
  return (
    <div>
      <Chessboard
        id="DarkThemeBoard"
        arePiecesDraggable={false}
        boardWidth={getBoardWidth()}
        customDarkSquareStyle={{ backgroundColor: "#2c3440" }}
        customLightSquareStyle={{ backgroundColor: "#768492" }}
        // showPromotionDialog={true}
        customBoardStyle={{
          borderRadius: "10px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.6)"
        }}
      />
      ~
    </div>
  );
}

export default Board
