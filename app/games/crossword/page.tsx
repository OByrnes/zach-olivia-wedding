"use client";
import React, { useState } from "react";
import Crossword from "@jaredreisinger/react-crossword";
import styles from "./crossword.module.scss";
import {
  CluesInputOriginal,
  Direction,
} from "@jaredreisinger/react-crossword/dist/types";
const grid: CluesInputOriginal = {
  across: {
    "1": {
      clue: "How Zach ends his calls",
      col: 0,
      row: 0,

      answer: "LATERGATOR",
    },
    "6": {
      clue: "Present tense was",
      col: 0,
      row: 1,
      answer: "IS",
    },
    "7": {
      clue: `Card up one's sleeve`,
      col: 7,
      row: 1,
      answer: "ACE",
    },
    "8": {
      clue: "Herbs and flowers used in gin without vowels",

      col: 0,
      row: 2,

      answer: "BTNCLS",
    },
    "10": {
      clue: "___ Soundsystem (Electronic Rock Band)",

      col: 7,
      row: 2,

      answer: "LCD",
    },
    "11": {
      clue: "T-swift tour",

      col: 0,
      row: 3,

      answer: "ERAS",
    },
    "12": {
      clue: "Pool stick",

      col: 7,
      row: 3,

      answer: "CUE",
    },
    "13": {
      clue: "Stock Profitability (abbr.)",
      col: 0,
      row: 4,
      answer: "ROI",
    },
    "14": {
      clue: "___ Card (extra memory) (abbr.)",
      col: 5,
      row: 4,
      answer: "SD",
    },
    "16": {
      clue: "Not a mac",

      col: 8,
      row: 4,

      answer: "PC",
    },
    "17": {
      clue: "__ in",

      col: 0,
      row: 5,

      answer: "ALL",
    },
    "18": {
      clue: "Nom de guerre",

      col: 4,
      row: 5,

      answer: "AKA",
    },
    "19": {
      clue: "No kids (abbr.)",

      col: 8,
      row: 5,

      answer: "AO",
    },
    "20": {
      clue: "Homophone of 1+1",

      col: 0,
      row: 6,

      answer: "TO",
    },
    "21": {
      clue: "Month of `The date to save`",

      col: 4,
      row: 6,

      answer: "MAY",
    },
    "22": {
      clue: `"Speak Softly and Carry a Big Stick" speaker's initials`,

      col: 8,
      row: 6,

      answer: "TR",
    },
    "23": {
      clue: "Meta's app for sharing photos (abbr.)",

      col: 0,
      row: 7,

      answer: "IG",
    },
    "24": {
      clue: "MIMAL's head",

      col: 8,
      row: 7,

      answer: "IA",
    },
    "25": {
      clue: "Google's smart home devices or home of a bird",

      col: 0,
      row: 8,

      answer: "NEST",
    },
    "27": {
      clue: "Negative word that could replace `Sike!`",

      col: 7,
      row: 8,

      answer: "NOT",
    },
    "28": {
      clue: "`Dead Serious` book that could use an editor",

      col: 0,
      row: 9,

      answer: "GRAVESTONE",
    },
  },
  down: {
    "1": {
      clue: "Taking off your bra at the end of the day eg.",

      col: 0,
      row: 0,

      answer: "LIBERATING",
    },
    "2": {
      clue: "Deal-breaker for Olivia",

      col: 1,
      row: 0,

      answer: "ASTROLOGER",
    },
    "3": {
      clue: "Baby powder ingredient",

      col: 7,
      row: 0,

      answer: "TALC",
    },
    "4": {
      clue: "Engineer, Baker eg",

      col: 8,
      row: 0,

      answer: "OCCUPATION",
    },
    "5": {
      clue: "Move around and or add art and furniture",

      col: 9,
      row: 0,

      answer: "REDECORATE",
    },
    "9": {
      clue: "__ in your coffin now",

      col: 2,
      row: 2,

      answer: "NAIL",
    },
    "10": {
      clue: "Tech field, for short",

      col: 3,
      row: 2,

      answer: "CS",
    },
    "14": {
      clue: "Mustard Plug genre",

      col: 5,
      row: 4,

      answer: "SKA",
    },
    "15": {
      clue: "24 hours",

      col: 6,
      row: 4,

      answer: "DAY",
    },
    "18": {
      clue: "Coffee time",

      col: 4,
      row: 5,

      answer: "AM",
    },
    "25": {
      clue: "Detective, if working for the FBI (abbr.)",

      col: 2,
      row: 8,

      answer: "SA",
    },
    "26": {
      clue: "Initial word in `Wolf like Me` band name",

      col: 3,
      row: 8,

      answer: "TV",
    },
    "27": {
      clue: "Nein",

      col: 7,
      row: 8,

      answer: "NO",
    },
  },
};
const theme = {
  columnBreakpoint: "400px",
  gridBackground: "#001247",
  cellBackground: "#f4ecf9",
  cellBorder: "#001247",
  textColor: "#001247",
  numberColor: "#001247",
  focusBackground: "#493ec1",
  highlightBackground: "#383ead",
};
const Home: React.FC = () => {
  const [correctAlert, setCorrectAlert] = useState<boolean>(false);
  const [clueSelected, setClueSelected] = useState<string | undefined>();
  const onClueSelected = (direction: Direction, number: string) => {
    let newClue = grid[direction][number].clue;
    if (newClue) {
      setClueSelected(grid[direction][number].clue);
    }
  };
  return (
    <div className="w-full">
      {correctAlert ? (
        <div
          className=" border-l-4 border-deep-cove-500 text--deep-cove-700 p-4"
          role="alert"
        >
          <p className="font-bold">Awesome!</p>
          <p>Glad you played!</p>
        </div>
      ) : null}
      {clueSelected ? (
        <div
          className=" border-l-4 border-deep-cove-500 text--deep-cove-700 p-4"
          role="alert"
        >
          <p className="font-bold">Current Clue</p>
          <p>{clueSelected}</p>
        </div>
      ) : null}
      <div className={`${styles.crossword} md:columns-2`}>
        <Crossword
          useStorage={true}
          theme={theme}
          downLabel={"Down"}
          acrossLabel={"Across"}
          data={grid}
          storageKey={"crossword"}
          onCrosswordCorrect={(isCorrect) => setCorrectAlert(isCorrect)}
          onClueSelected={onClueSelected}
        />
      </div>
    </div>
  );
};

export default Home;
