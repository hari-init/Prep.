import { useState } from "react";
import styles from "./Game.module.css";

const WINNING = [
  [
    { row: 0, col: 0 },
    { row: 1, col: 1 },
    { row: 2, col: 2 },
  ],
  [
    { row: 2, col: 2 },
    { row: 1, col: 1 },
    { row: 0, col: 0 },
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

//[00, 01, 02]
//[10, 11, 12]
//[20, 21, 22]

const Game = () => {
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [player, setPlayer] = useState("X");
  const [playerStatus, setPlayerStatus] = useState({ X: [], O: [] });
  const [winner, setWinner] = useState(null);

  const onClickHandler = (row, col) => {
    setPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));

    setBoard((preBoard) => {
      let temp = preBoard.map((row) => [...row]);
      temp[row][col] = player;

      for (let combo of WINNING) {
        let first = temp[combo[0].row][combo[0].col];
        let second = temp[combo[1].row][combo[1].col];
        let third = temp[combo[2].row][combo[2].col];
        if (
          first &&
          second &&
          third &&
          first == second &&
          second == third &&
          third == first
        ) {
          setWinner(player);
        }
      }
      return temp;
    });

    setPlayerStatus((preStatus) => {
      let tempStatus = { ...preStatus };
      let tempPlayerStatus = [...tempStatus[player]];
      tempPlayerStatus.push({ row, col });
      tempStatus[player] = tempPlayerStatus;
      return { ...tempStatus };
    });
  };

  return (
    <div>
      <h2>Tic-Tac</h2>
      <div className={styles.board}>
        {board.map((row, rowIndex) => {
          return (
            <div className={styles.row}>
              {row.map((col, colIndex) => {
                return (
                  <div
                    onClick={() => onClickHandler(rowIndex, colIndex)}
                    className={styles.col}
                  >
                    {col}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className={styles.status}>
        <div>
          Player X;
          {playerStatus["X"].map((status) => (
            <div>
              [{status.row},{status.col}]
            </div>
          ))}
        </div>
        <div>
          Player O;
          {playerStatus["O"].map((status) => (
            <div>
              [{status.row},{status.col}]
            </div>
          ))}
        </div>
      </div>
      {winner && <h2>I am the Winny MF.... "{winner}" ,,, Dammm.</h2>}
    </div>
  );
};

export default Game;
