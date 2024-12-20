import { useState } from "react";

function Square() {
  const [value, setValue] = useState(null);

  function handleClic() {
    setValue('X');
  }

  return <button
    className="square"
    onClick={handleClic}
    >
      {value}
    </button>;
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
