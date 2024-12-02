import styles from "./Keyboard.module.scss";
interface KeyboardProps {
  keys: string[];
  onKeyPressed: (key: string) => void;
  guessed: { [key: string]: string };
}

export default function Keyboard({
  keys,
  onKeyPressed,
  guessed,
}: KeyboardProps) {
  function handleInput(e: any) {
    onKeyPressed(e.target.textContent);
  }

  function handleEnter(e: any) {
    onKeyPressed("ENTER");
  }

  function handleDelete(e: any) {
    onKeyPressed("BACKSPACE");
  }

  return (
    <div className={styles.keyboardContainer}>
      <div className={styles.keyboardRow}>
        {Array.from(Array(10)).map((_, i) => (
          <button
            key={i}
            className={styles[guessed[keys[i]]]}
            onClick={handleInput}
          >
            {keys[i]}
          </button>
        ))}
        <div className={styles.emptyKey}></div>
      </div>
      <div className={styles.keyboardRow}>
        {Array.from(Array(9)).map((_, i) => (
          <button
            key={i + 10}
            className={styles[guessed[keys[i + 10]]]}
            onClick={handleInput}
          >
            {keys[i + 10]}
          </button>
        ))}
      </div>
      <div className={styles.keyboardRow}>
        <button className={styles.enterKey} onClick={handleEnter}>
          ENTER
        </button>
        {Array.from(Array(7)).map((_, i) => (
          <button
            key={i + 19}
            className={styles[guessed[keys[i + 19]]]}
            onClick={handleInput}
          >
            {keys[i + 19]}
          </button>
        ))}
        <button className={styles.deleteKey} onClick={handleDelete}>
          DELETE
        </button>
      </div>
    </div>
  );
}
