import Link from "next/link";
import { Connections } from "../components/Connections";

export default function GamesPage() {
  return (
    <div>
      <Connections />
      <Link
        href="/games/wordle"
        className="focus:shadow-outline-blue inline rounded-lg border border-transparent px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-950 focus:outline-none dark:hover:bg-blue-950"
      >
        Play wordle
      </Link>
    </div>
  );
}
