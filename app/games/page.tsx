"use client";

import { FC } from "react";
import Card from "../components/Card";
import wordlepic from "@/public/wordle.jpg";
import connectionPic from "@/public/connections.jpg";
import crosswordpic from "@/public/crossword.jpg";
const Games: FC = () => {
  return (
    <div className="container mx-auto mt-36 justify-center center size-full gap-5 flex">
      <Card
        description="Play wordle"
        title="Wordle"
        imgSrc={wordlepic}
        href={"/games/wordle"}
      ></Card>
      <Card
        title="Connections"
        description="Play Connections"
        imgSrc={connectionPic}
        href={"/games/connections"}
      ></Card>
      <Card
        description="Play Crossword"
        title="Crossword"
        imgSrc={crosswordpic}
        href={"/games/crossword"}
      ></Card>
    </div>
  );
};

export default Games;
