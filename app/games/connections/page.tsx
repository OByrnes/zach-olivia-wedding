import { NavLinks } from "../components/NavLinks";
import { Connections } from "../components/Connections";

export default function GamesPage() {
  return (
    <div>
      <Connections />
      <div className="w-full md:w-full flex-row-reverse h-12 flex md:flex-col justify-center gap-4 items-center mt-10">
        <NavLinks
          href="/games/wordle"
          className="bg-deep-cove-300 dark:bg-deep-cove-950 hover:bg-deep-cove-600 dark:hover:bg-deep-cove-800  font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-deep-cove-300 transition-all transform hover:scale-105 active:scale-95 animate-bounce-slow"
        >
          Play Wordle
        </NavLinks>
        <h2 className="tracking-tight md:tracking-wide text-center drop-shadow-lg">
          Thanks for playing!
        </h2>
      </div>
    </div>
  );
}
