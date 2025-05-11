"use client";

import { FC } from "react";
import Card from "../components/Card";
import wordlepic from "@/app/assets/images/wordle.jpg";
import connectionPic from "@/app/assets/images/connections.jpg";
import crosswordpic from "@/app/assets/images/crossword.jpg";
const Games: FC = () => {
  return (
    <div className="container mx-auto w-full h-full  my-28">
      <h1 className="title w-full text-center text-4xl md:text-6xl tracking-tight md:tracking-widest  ">
        Play our versions of the NYT puzzles!
      </h1>
      <h3 className="title w-full text-center text-lg tracking-tight md:tracking-widest ">
        All of the puzzles were designed by Olivia{" "}
      </h3>
      <h3 className="w-full text-center text-base tracking-tight md:tracking-widest ">
        (Zach helped)
      </h3>
      <div className="container mx-auto justify-center center size-full gap-5 flex flex-col md:flex-row">
        <Card
          description="Z & O Wordle"
          title="Wordle"
          imgSrc={wordlepic}
          href={"/games/wordle"}
        ></Card>
        <Card
          title="Z & O's Connections"
          description="Connections"
          imgSrc={connectionPic}
          href={"/games/connections"}
        ></Card>
        <Card
          description="Z & O Crossword"
          title="Crossword"
          imgSrc={crosswordpic}
          href={"/games/crossword"}
        ></Card>
      </div>
    </div>
  );
};

export default Games;
