import { useState } from "react";

function Square({value, onSquareClick}) {
  return <button className="square" onClick={onSquareClick}>
    {value}
  </button>;
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squeres, setsqueres] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squeres[i]) {
      return;
    }
    const nextSquares = squeres.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setsqueres(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squeres[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squeres[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squeres[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squeres[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squeres[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squeres[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squeres[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squeres[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squeres[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
