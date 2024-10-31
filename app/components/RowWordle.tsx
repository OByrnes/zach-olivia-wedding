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

  function checkLetter(letter: string, pos: number): BoxStatus {
    if (solution.includes(letter)) {
      if (solution[pos] === letter) {
        return "correct";
      } else {
        return "present";
      }
    } else {
      return "absent";
    }
  }

  return (
    <div className={styles.row}>
      {arr.map((_, i) => (
        <Box
          key={i}
          value={word[i]}
          status={checkLetter(word[i], i)}
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
