import styles from "./box.module.scss";
import classNames from "classnames/bind";
import { BoxStatus } from "./types";

interface BoxProps {
  value: string;
  status: BoxStatus;
  animate?: boolean;
  pos?: number;
  jiggle: boolean;
}

const classes = classNames.bind(styles);

export default function Box({
  value = "",
  status,
  animate = false,
  pos,
  jiggle,
}: BoxProps) {
  const boxStatus = classes({
    correct: status === "correct",
    present: status === "present",
    absent: status === "absent",
    empty: status === "empty",
    edit: status === "edit",
    jiggle: jiggle,
  });

  return <div className={boxStatus}>{value}</div>;
}
