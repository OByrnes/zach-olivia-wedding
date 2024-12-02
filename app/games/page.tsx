"use client";

import { FC } from "react";
import { NavLinks } from "../components/NavLinks";

const Games: FC = () => {
  return (
    <div className="m-10 columns-1 md:columns-3">
      <NavLinks href={"/games/wordle"}>Wordle</NavLinks>
      <NavLinks href={"/games/connections"}>Connections</NavLinks>
      <NavLinks href={"/games/crossword"}>Crossword</NavLinks>
    </div>
  );
};

export default Games;
