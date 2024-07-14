import { FC, ReactElement } from "react";
import styles from "./BackgroundImage.module.css";

const BackgroundImage: FC<{ path: string; children: ReactElement }> = ({
  path,
  children,
}) => {
  return (
    <div
      className={styles.background}
      style={{ backgroundImage: `url(${path})` }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default BackgroundImage;
