import { useMemo } from "react";
import Box from "./Box";
import styles from "./Row.module.scss";
import { BoxStatus } from "./types";

interface CompletedRowProps {
  word: string;
  solution: string;
  animate: boolean;
}

export const CompletedRow = ({
  word,
  solution,
  animate = false,
}: CompletedRowProps) => {
  const arr = Array.from(Array(5));
  function getCharacterIndexMap(str: string): Map<string, number[]> {
    const charIndexMap = new Map<string, number[]>();

    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);

      if (!charIndexMap.has(char)) {
        charIndexMap.set(char, []);
      }

      charIndexMap.get(char)!.push(i);
    }

    return charIndexMap;
  }
  const indexCorrect = useMemo(() => {
    const guessIndexMap = getCharacterIndexMap(word);
    const correctIndexMap = getCharacterIndexMap(solution);
    let statusMap = new Array(5).fill("absent");
    let i = 0;
    while (i <= 4) {
      let guessedChar = word[i];
      let correctChar = solution[i];
      if (guessedChar === correctChar) {
        statusMap[i] = "correct";
      } else {
        if (word.includes(correctChar)) {
          if (word.indexOf(correctChar) !== i) {
            statusMap[word.indexOf(correctChar)] = "present";
          }
        } else {
          statusMap[i] = "absent";
        }
      }
      i++;
    }

    return statusMap;
  }, []);
  function checkLetter(pos: number): BoxStatus {
    return indexCorrect[pos] || "empty";
  }

  return (
    <div className={styles.row}>
      {arr.map((_, i) => (
        <Box
          key={i}
          value={word[i]}
          status={checkLetter(i)}
          animate={animate}
          pos={i}
          jiggle={false}
        />
      ))}
    </div>
  );
};

interface CurrentRowProps {
  word: string;
  jiggle: boolean;
}

export const CurrentRow = ({ word, jiggle }: CurrentRowProps) => {
  const wordArray = word.split("");

  return (
    <div className={styles.row}>
      {wordArray.map((letter, i) => (
        <Box
          jiggle={jiggle}
          key={i}
          value={letter}
          status="edit"
          animate={jiggle}
        />
      ))}
      {Array.from(Array(5 - wordArray.length)).map((letter, i) => (
        <Box
          jiggle={jiggle}
          key={i}
          value={""}
          status="edit"
          animate={jiggle}
        />
      ))}
    </div>
  );
};
export const Row = ({ jiggle }: { jiggle: boolean }) => {
  const arr = Array.from(Array(5));
  return (
    <div className={styles.row}>
      {arr.map((_, i) => (
        <Box jiggle={false} key={i} value={""} status="empty" />
      ))}
    </div>
  );
};
