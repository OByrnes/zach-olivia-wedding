"use client";
import React, { useState } from "react";
import styles from "./Crossword.module.css";

type Cell = {
  letter: string;
  isEditable: boolean;
};

type CrosswordProps = {
  grid: Cell[][];
  clues: { across: string[]; down: string[] };
};

const Crossword: React.FC<CrosswordProps> = ({ grid, clues }) => {
  const [answers, setAnswers] = useState<string[][]>(
    grid.map((row) => row.map((cell) => (cell.isEditable ? "" : cell.letter)))
  );

  const handleInputChange = (
    rowIndex: number,
    colIndex: number,
    value: string
  ) => {
    const newAnswers = answers.map((row, rIndex) =>
      row.map((cell, cIndex) =>
        rIndex === rowIndex && cIndex === colIndex ? value.toUpperCase() : cell
      )
    );
    setAnswers(newAnswers);
  };

  const renderGrid = () => {
    return grid.map((row, rowIndex) => (
      <div key={rowIndex} className={styles.row}>
        {row.map((cell, colIndex) => (
          <input
            key={colIndex}
            type="text"
            maxLength={1}
            value={answers[rowIndex][colIndex]}
            onChange={(e) =>
              handleInputChange(rowIndex, colIndex, e.target.value)
            }
            className={styles.cell}
            readOnly={!cell.isEditable}
            style={{ backgroundColor: cell.isEditable ? "white" : "black" }}
          />
        ))}
      </div>
    ));
  };

  return (
    <div>
      <div className={styles.grid}>{renderGrid()}</div>
      <div className={styles.clues}>
        <h3>Across</h3>
        <ul>
          {clues.across.map((clue, index) => (
            <li key={index}>{`${index + 1}. ${clue}`}</li>
          ))}
        </ul>
        <h3>Down</h3>
        <ul>
          {clues.down.map((clue, index) => (
            <li key={index}>{`${index + 1}. ${clue}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Crossword;
