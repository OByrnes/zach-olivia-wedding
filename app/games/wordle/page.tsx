"use client";
import { CompletedRow, CurrentRow, Row } from "@/app/components/RowWordle";
import styles from "./wordle.module.scss";
import Keyboard from "@/app/components/Keyboard";
import { GameStatus } from "@/app/components/types";
import { useWindow } from "@/app/hooks/useWindow";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useWordChecker } from "react-word-checker";
import { NavLinks } from "@/app/components/NavLinks";
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
  const status = useCallback(() => {
    let originalObj: { [key: string]: string } = {};
    keys.forEach((ele) => (originalObj[ele] = "key"));
    return originalObj;
  }, []);
  const [wordOfTheDay, setWordOfTheDay] = useState<string>("NERDY");
  const [turn, setTurn] = useState<number>(1);
  const [currentWord, setCurrentWord] = useState<string>("");
  const [completedWords, setCompletedWords] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Playing);
  const [guessedLetters, setGuessedLetters] = useState<{
    [key: string]: string;
  }>(status());
  const [alertOpen, setAlertOpen] = useState<boolean>();
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [jiggle, setJiggle] = useState<boolean>(false);
  const { wordExists } = useWordChecker("en");
  const triggerJiggle = (alertMessage: string) => {
    setAlertMessage(alertMessage);
    setAlertOpen(true);
    setJiggle(true);
    setTimeout(() => {
      setJiggle(false);
      setCurrentWord("");
    }, 500);
    setTimeout(() => {
      setAlertOpen(false);
    }, 2000);
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

  function checkGuessed(word: string) {
    const newGuessed = { ...guessedLetters };
    for (let i = 0; i < word.length; i++) {
      let guessedChar = word[i];
      let correctChar = wordOfTheDay[i];
      console.log(guessedChar, correctChar);
      if (newGuessed[guessedChar] !== "correct") {
        if (wordOfTheDay.includes(guessedChar)) {
          if (correctChar === guessedChar) {
            newGuessed[guessedChar] = "correct";
          } else {
            newGuessed[guessedChar] = "present";
          }
        } else {
          newGuessed[guessedChar] = "absent";
        }
      } else {
        newGuessed[guessedChar] = "correct";
      }
    }
    setGuessedLetters(newGuessed);
  }
  async function onEnter() {
    if (currentWord === wordOfTheDay) {
      checkGuessed(currentWord);
      setCompletedWords([...completedWords, currentWord]);
      setGameStatus(GameStatus.Won);
      return;
    }

    if (turn === 6) {
      checkGuessed(currentWord);
      setCompletedWords([...completedWords, currentWord]);
      setGameStatus(GameStatus.Lost);
      return;
    }

    if (currentWord.length === 5 && !wordExists(currentWord)) {
      triggerJiggle("Not in the dictionary");
      return;
    }
    checkGuessed(currentWord);
    setCompletedWords([...completedWords, currentWord]);
    setTurn(turn + 1);
    setCurrentWord("");
  }
  useMemo(() => {
    console.log(guessedLetters);
  }, [guessedLetters]);
  return (
    <>
      {alertOpen ? (
        <div
          className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
          role="alert"
        >
          <p className="font-bold">Not Quite</p>
          <p>Not a word in the dictionary!</p>
        </div>
      ) : null}
      {GameStatus.Won === gameStatus ? (
        <div
          className="bg-deep-cove-400 border-l-4 border-deep-cove-500 text-deep-cove-700 p-4"
          role="alert"
        >
          <p className="font-bold">You Won!</p>
          <NavLinks href="/games/crossword">Try the crossword</NavLinks>
        </div>
      ) : null}
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
      <Keyboard
        keys={keys}
        onKeyPressed={onKeyPressed}
        guessed={guessedLetters}
      />
    </>
  );
};
export default Wordle;
