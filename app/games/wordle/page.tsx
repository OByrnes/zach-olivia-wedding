"use client";
import { CompletedRow, CurrentRow, Row } from "@/app/components/RowWordle";
import styles from "./wordle.module.scss";
import Keyboard from "@/app/components/Keyboard";
import { GameStatus } from "@/app/components/types";
import { useWindow } from "@/app/hooks/useWindow";
import { FC, useEffect, useState } from "react";
import { useWordChecker } from "react-word-checker";
const keys = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];
const Wordle: FC = () => {
  const [wordOfTheDay, setWordOfTheDay] = useState<string>("NERDY");
  const [turn, setTurn] = useState<number>(1);
  const [currentWord, setCurrentWord] = useState<string>("");
  const [completedWords, setCompletedWords] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Playing);
  const [jiggle, setJiggle] = useState<boolean>(false);
  const { wordExists } = useWordChecker("en");
  const triggerJiggle = () => {
    setJiggle(true);
    setTimeout(() => {
      setJiggle(false);
      setCurrentWord("");
    }, 500);
  };

  useWindow("keydown", handleKeyDown);

  function handleKeyDown(event: KeyboardEvent) {
    const key = event.key.toUpperCase();

    onKeyPressed(key);
  }

  function onKeyPressed(key: string) {
    if (gameStatus !== GameStatus.Playing) {
      return;
    }

    if (key === "BACKSPACE" && currentWord.length > 0) {
      onDelete();
      return;
    }

    if (key === "ENTER" && currentWord.length === 5 && turn <= 6) {
      onEnter();
      return;
    }

    if (currentWord.length >= 5) return;

    // ingresar la letra al estado
    if (keys.includes(key)) {
      onInput(key);
      return;
    }
  }

  function onInput(letter: string) {
    const newWord = currentWord + letter;
    setCurrentWord(newWord);
  }

  function onDelete() {
    const newWord = currentWord.slice(0, -1);
    setCurrentWord(newWord);
  }

  async function onEnter() {
    if (currentWord === wordOfTheDay) {
      setCompletedWords([...completedWords, currentWord]);
      setGameStatus(GameStatus.Won);
      return;
    }

    if (turn === 6) {
      setCompletedWords([...completedWords, currentWord]);
      setGameStatus(GameStatus.Lost);
      return;
    }

    if (currentWord.length === 5 && !wordExists(currentWord)) {
      triggerJiggle();
      return;
    }
    setCompletedWords([...completedWords, currentWord]);
    setTurn(turn + 1);
    setCurrentWord("");
  }

  return (
    <>
      <div className={styles.mainContainer}>
        {completedWords.map((word, i) => (
          <CompletedRow
            key={i}
            word={word}
            solution={wordOfTheDay}
            animate={true}
          />
        ))}

        {gameStatus === GameStatus.Playing ? (
          <CurrentRow word={currentWord} jiggle={jiggle} />
        ) : null}

        {Array.from(Array(6 - turn)).map((_, i) => (
          <Row jiggle={jiggle} key={i} />
        ))}
      </div>

      <Keyboard keys={keys} onKeyPressed={onKeyPressed} />
    </>
  );
};
export default Wordle;