"use client";
import { Button } from "@headlessui/react";
import React, { FC, useEffect, useState } from "react";
// ["Connecticut", "Squirrel", "Toxic", "Chicken"],
// ["Carolina", "Jiu Jitsu", "walk", "Penn"],
// ["Games", "Dayton", "Smart", "podcast"],
// ["Corgi", "Baker", "Belgium", "Beer"],
const yellow_words = ["Values", "Humor", "Love", "Life"];
const green_words = ["Jersey", "Belgium", "Switzerland", "Connecticut"];
const blue_words = ["Squirrel", "Corgi", "Chicken", "Butt"];
const purple_words = ["Podcasts", "Jiu Jitsu", "Baker", "Paint"];
const WordComponent: FC<{
  word: string;
  onClick: (word: string) => void;
  selected: string[];
  jiggle: boolean;
}> = ({ word, onClick, selected, jiggle }) => {
  return (
    <Button
      className={
        selected.includes(word)
          ? `word-box word-box-selected ${jiggle ? "jiggle" : ""}`
          : `word-box word-box-unselected ${jiggle ? "jiggle" : ""}`
      }
      onClick={() => {
        onClick(word);
      }}
    >
      {word}
    </Button>
  );
};
const RowComponent: FC<{
  words: string[];
  selected: string[];
  onClick: (word: string) => void;
  jiggle: boolean;
}> = ({ words, onClick, selected, jiggle }) => {
  return (
    <div className="unsolved-row">
      {words.map((word) => (
        <WordComponent
          selected={selected}
          key={word}
          word={word}
          onClick={onClick}
          jiggle={jiggle}
        />
      ))}
    </div>
  );
};
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
const CorrectRow: FC<{ row_color: string }> = ({ row_color }) => {
  const words = () => {
    switch (row_color) {
      case "yellow":
        return yellow_words;
      case "green":
        return green_words;
      case "blue":
        return blue_words;
      default:
        return purple_words;
    }
  };
  const reason = () => {
    switch (row_color) {
      case "blue":
        return "Words that make Kalia go crazy";
      case "green":
        return "Where we went after high school: Olivia went to Belgium then North Carolina, Zach went to Penn then Conneticut";
      case "purple":
        return "How we met: We met at a Brew pub in Dayton called 'Toxic' Olivia was listening to podcasts";
      default:
        return "Hobbies and interests";
    }
  };
  return (
    <div className={`solved-categories correct-row ${row_color}-solved`}>
      {words().map((ele) => (
        <div key={ele}>{ele}</div>
      ))}
      <p className="span-4">{reason()}</p>
    </div>
  );
};

export const Connections = () => {
  const [guessesRemaining, setGuessesRemaining] = React.useState();
  const [correctlyGuessed, setCorrectlyGuessed] = React.useState<string[]>([]);
  const get_remaining_words = (correct: string[]) => {
    let remaining_words: string[] = [];
    if (!correct.includes("yellow")) {
      remaining_words = [...remaining_words, ...yellow_words];
    }
    if (!correct.includes("green")) {
      remaining_words = [...remaining_words, ...green_words];
    }
    if (!correct.includes("blue")) {
      remaining_words = [...remaining_words, ...blue_words];
    }
    if (!correct.includes("purple")) {
      remaining_words = [...remaining_words, ...purple_words];
    }
    return remaining_words;
  };
  const make_random_grid = (correct: string[]) => {
    let temp_grid = [];
    let temp_row = [];
    let remaining_words = get_remaining_words(correct);
    while (remaining_words.length) {
      for (var i = 0; i < 4; i++) {
        let random_int = getRandomInt(remaining_words.length);
        temp_row.push(remaining_words[random_int]);
        remaining_words.splice(random_int, 1);
      }
      temp_grid.push(temp_row);
      temp_row = [];
    }

    return temp_grid;
  };
  const [selected, setSelected] = React.useState<string[]>([]);
  const [jiggle, setJiggle] = useState<boolean>(false);
  const [grid, setGrid] = React.useState<string[][]>([
    ["Butt", "Paint", "Belgium", "Switzerland"],
    ["Chicken", "Podcasts", "Values", "Corgi"],
    ["Connecticut", "Love", "Humor", "Jiu Jitsu"],
    ["Life", "Jersey", "Squirrel", "Baker"],
  ]);
  const triggerJiggle = () => {
    setJiggle(true);
    setTimeout(() => {
      setJiggle(false);
    }, 500); // 0.5 seconds
  };

  const isCorrect = (words: string[]) => {
    if (
      yellow_words.every((ele) => words.includes(ele)) &&
      !correctlyGuessed.includes("yellow")
    ) {
      setCorrectlyGuessed((prevValue) => [...prevValue, "yellow"]);
      return "yellow";
    }
    if (
      green_words.every((ele) => words.includes(ele)) &&
      !correctlyGuessed.includes("green")
    ) {
      setCorrectlyGuessed((prevValue) => [...prevValue, "green"]);
      return "green";
    }
    if (
      blue_words.every((ele) => words.includes(ele)) &&
      !correctlyGuessed.includes("blue")
    ) {
      setCorrectlyGuessed((prevValue) => [...prevValue, "blue"]);
      return "blue";
    }
    if (
      purple_words.every((ele) => words.includes(ele)) &&
      !correctlyGuessed.includes("purple")
    ) {
      setCorrectlyGuessed((prevValue) => [...prevValue, "purple"]);
      return "purple";
    }
    return false;
  };
  const handleClick = (word: string) => {
    let selected_words = selected;
    if (selected_words.includes(word)) {
      setSelected(selected.filter((ele) => ele !== word));
    } else if (selected_words.length + 1 == 4) {
      let newCorrect = isCorrect([...selected, word]);
      if (newCorrect) {
        setGrid(make_random_grid([...correctlyGuessed, newCorrect]));
        setSelected([]);
      } else {
        triggerJiggle();
        setSelected([]);
      }
    } else {
      setSelected((prevValue) => [...prevValue, word]);
    }
  };
  return (
    <div className="h-full flex flex-col justify-center items-center">
      {jiggle ? (
        <div
          className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
          role="alert"
        >
          <p className="font-bold">Not Quite</p>
          <p>All of these categories are related to Zach and Olivia</p>
        </div>
      ) : null}
      <h3 className="title">Z + O Connections</h3>
      <div className="fieldset">
        {correctlyGuessed.map((ele) => (
          <CorrectRow key={ele} row_color={ele} />
        ))}
        {grid.map((ele) => (
          <RowComponent
            key={ele.join("-")}
            words={ele}
            selected={selected}
            onClick={handleClick}
            jiggle={jiggle}
          />
        ))}
      </div>
    </div>
  );
};
