import { useState } from "react";
import styles from "./GameBoard.module.css";

const BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const WINNING = [
  [
    { row: 0, col: 0 },
    { row: 1, col: 1 },
    { row: 2, col: 2 },
  ],
  [
    { row: 0, col: 2 },
    { row: 1, col: 1 },
    { row: 2, col: 1 },
  ],
  [
    { row: 0, col: 0 },
    { row: 1, col: 0 },
    { row: 2, col: 0 },
  ],
  [
    { row: 0, col: 1 },
    { row: 1, col: 1 },
    { row: 2, col: 1 },
  ],
  [
    { row: 0, col: 2 },
    { row: 1, col: 2 },
    { row: 2, col: 2 },
  ],
  [
    { row: 0, col: 0 },
    { row: 0, col: 1 },
    { row: 0, col: 2 },
  ],
  [
    { row: 1, col: 0 },
    { row: 1, col: 1 },
    { row: 1, col: 2 },
  ],
  [
    { row: 2, col: 0 },
    { row: 2, col: 1 },
    { row: 2, col: 2 },
  ],
];

const GameBoard = () => {
  const [board, setBoard] = useState(BOARD);
  const [player, setPlayer] = useState("0");
  const [playerState, setPlayerState] = useState({ X: [], Y: [] });
  const [winner, setWinner] = useState("");

  const tempPlayer = player === "0" ? "X" : player === "X" ? "Y" : "X";

  const onColClickHandler = (row, col) => {
    setPlayerState((prevPlayerState) => {
      let tempState = { ...prevPlayerState };
      let playerState = [...tempState[tempPlayer]];
      playerState.push({ row, col });
      tempState[tempPlayer] = playerState;
      return tempState;
    });

    setBoard((preBoard) => {
      let tempBoard = preBoard.map((row) => [...row]);
      tempBoard[row][col] = tempPlayer;
      for (let combo of WINNING) {
        let firstSq = tempBoard[combo[0].row][combo[0].col];
        let secondSq = tempBoard[combo[1].row][combo[1].col];
        let thirdSq = tempBoard[combo[2].row][combo[2].col];
        if (
          firstSq &&
          secondSq &&
          thirdSq &&
          firstSq === secondSq &&
          secondSq === thirdSq &&
          thirdSq === firstSq
        ) {
          setWinner(tempPlayer);
        }
      }
      return tempBoard;
    });

    setPlayer(tempPlayer);
  };

  return (
    <div>
      <h2>Tic-Tac</h2>
      <div className={styles.board}>
        {winner}
        {board.map((row, rowIndex) => {
          return (
            <div key={rowIndex} className={styles.row}>
              {row.map((col, colIndex) => {
                return (
                  <div
                    id={`${rowIndex}-${colIndex}`}
                    className={styles.col}
                    onClick={() => onColClickHandler(rowIndex, colIndex)}
                  >
                    {col}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className={styles.score}>
        <div>
          X
          {playerState["X"].map((item) => (
            <div>
              ({item.row},{item.col})
            </div>
          ))}
        </div>
        <div>
          Y
          {playerState["Y"].map((item) => (
            <div>
              ({item.row},{item.col})
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
