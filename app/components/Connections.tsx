"use client";
import {
  Button,
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import React, { FC, useCallback, useEffect, useState } from "react";
import hintBelgium from "@/app/assets/images/hintbelgium.jpg";
import hintKalia from "@/app/assets/images/hintKalia.jpg";
import hintHobbie from "@/app/assets/images/hintHobbie.jpg";
import hintFinal from "@/app/assets/images/gal17.jpg";
import Image from "next/image";

const yellow_words = ["Values", "Humor", "Love", "Life"];
const green_words = ["Jersey", "Belgium", "Switzerland", "Connecticut"];
const purple_words = ["Squirrel", "Corgi", "Chicken", "Butt"];
const blue_words = ["Podcasts", "Jiu Jitsu", "Baking", "Paint"];
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
        return "Hobbies and interests";
      case "green":
        return "Places we lived before moving to Dayton";
      case "purple":
        return "Words that excite Kalia";
      default:
        return "Things we share";
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
  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const [grid, setGrid] = React.useState<string[][]>([
    ["Butt", "Paint", "Belgium", "Switzerland"],
    ["Chicken", "Podcasts", "Values", "Corgi"],
    ["Connecticut", "Love", "Humor", "Jiu Jitsu"],
    ["Life", "Jersey", "Squirrel", "Baking"],
  ]);
  let [isOpen, setIsOpen] = useState(false);

  const triggerAlert = () => {
    setAlertOpen(true);
    setTimeout(() => {
      setAlertOpen(false);
    }, 2000); // 0.5 seconds
  };

  const triggerJiggle = () => {
    setJiggle(true);
    triggerAlert();
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
  const [hint, setHint] = useState({
    img: hintBelgium,
    txt: "Olivia at Carnival in Belgium, Zach went to Fas Nacht in Switzerland",
  });
  const getHint = (correctlyGuessed: string[]) => {
    let hintImage = hintKalia;
    let hintText =
      "Olivia at a Carnival parade. Maybe Zach went to a Fas Nacht festival";
    if (!correctlyGuessed.includes("green")) {
      return { img: hintBelgium, txt: hintText };
    } else if (!correctlyGuessed.includes("blue")) {
      return {
        img: hintHobbie,
        txt: "Zach goes to jiu jitsu classes in his spare time. Olivia has less painful passtimes",
      };
    } else if (!correctlyGuessed.includes("purple")) {
      return {
        img: hintKalia,
        txt: "Kalia is always on alert for squirrels or dropped food",
      };
    } else {
      return {
        img: hintFinal,
        txt: "Zach and Olivia are getting married!!!!!",
      };
    }
  };
  const openHint = () => {
    setIsOpen(true);
    setHint(getHint(correctlyGuessed));
  };
  return (
    <div className="h-full flex flex-col justify-center items-center">
      {alertOpen ? (
        <div
          className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
          role="alert"
        >
          <p className="font-bold">Not Quite</p>
          <p>All of these categories are related to Zach and Olivia</p>
        </div>
      ) : null}
      <h3 className="title">Love Connections</h3>
      <h2>Group words that share a common thread </h2>
      <button onClick={() => openHint()}>Get a hint</button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-full h-full items-center content-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border p-12 bg-deep-cove-100 dark:bg-deep-cove-950  dark:text-deep-cove-100 text-deep-cove-950">
            <DialogTitle className="font-bold">Hint</DialogTitle>
            <Description>{hint.txt}</Description>
            <div className="w-full h-64 relative">
              <Image
                alt="hint image"
                src={hint.img}
                placeholder="blur"
                fill
                sizes="(min-width: 608px) 50vw, 100vw"
                style={{
                  objectFit: "contain", // cover, contain, none
                }}
              />
            </div>
            <div className="flex gap-4">
              <button onClick={() => setIsOpen(false)}>Got it!</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
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
