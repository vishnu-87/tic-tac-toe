import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setisXTurn] = useState(true);
  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;

      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };
  const checkDraw = () => {
    return state.every((square) => square !== null);
  };
  const isDraw = checkDraw();
  const isWinner = checkWinner();

  const HandleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "o";
    setState(copyState);
    setisXTurn(!isXTurn);
  };
  const handlereset = () => {
    setState(Array(9).fill(null));
  };
  return (
    <div className="Board-container">
      {isWinner ? (
        <>
          <div
            style={{
              display: "block",
            }}
          >
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {isWinner} won the Game
            </h1>
            <button
              style={{
                marginLeft: "70px",
                height: "50px",
                width: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "18px",
                background: "green",
                color: "white",
                cursor: "pointer",
              }}
              onClick={handlereset}
            >
              Play again
            </button>
          </div>
        </>
      ) : isDraw ? (
        <div>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            It's a Draw!
          </h1>
          <button
            style={{
              marginLeft: "30px",
              height: "50px",
              width: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "18px",
              background: "green",
              color: "white",
              cursor: "pointer",
            }}
            onClick={handlereset}
          >
            Play again
          </button>
        </div>
      ) : (
        <>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Tic Tac Toe Game
          </h1>
          <h4
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isXTurn ? "X" : "o"} turn
          </h4>
          <div className="Board-row">
            <Square onClick={() => HandleClick(0)} value={state[0]} />
            <Square onClick={() => HandleClick(1)} value={state[1]} />
            <Square onClick={() => HandleClick(2)} value={state[2]} />
          </div>
          <div className="Board-row">
            <Square onClick={() => HandleClick(3)} value={state[3]} />
            <Square onClick={() => HandleClick(4)} value={state[4]} />
            <Square onClick={() => HandleClick(5)} value={state[5]} />
          </div>
          <div className="Board-row">
            <Square onClick={() => HandleClick(6)} value={state[6]} />
            <Square onClick={() => HandleClick(7)} value={state[7]} />
            <Square onClick={() => HandleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;