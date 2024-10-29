import React from "react";

import Crossword from "@/app/components/Crossword";

const grid = [
  [
    { letter: "H", isEditable: false },
    { letter: "A", isEditable: false },
    { letter: "P", isEditable: false },
    { letter: "P", isEditable: false },
    { letter: "Y", isEditable: false },
  ],
  [
    { letter: "", isEditable: true },
    { letter: "", isEditable: true },
    { letter: "", isEditable: true },
    { letter: "", isEditable: true },
    { letter: "", isEditable: true },
  ],
  [
    { letter: "", isEditable: true },
    { letter: "", isEditable: true },
    { letter: "", isEditable: true },
    { letter: "", isEditable: true },
    { letter: "", isEditable: true },
  ],
  [
    { letter: "", isEditable: true },
    { letter: "", isEditable: true },
    { letter: "", isEditable: true },
    { letter: "", isEditable: true },
    { letter: "", isEditable: true },
  ],
  [
    { letter: "", isEditable: true },
    { letter: "", isEditable: true },
    { letter: "", isEditable: true },
    { letter: "", isEditable: true },
    { letter: "", isEditable: true },
  ],
];

const clues = {
  across: ["happpy"],
  down: ["Opposite of sad"],
};

const Home: React.FC = () => {
  return (
    <div>
      <main>
        <h1>Mini Crossword</h1>
        <Crossword grid={grid} clues={clues} />
      </main>
    </div>
  );
};

export default Home;
