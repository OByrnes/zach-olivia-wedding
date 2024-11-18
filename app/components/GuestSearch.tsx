"use client";
import { group } from "console";
import Link from "next/link";
import { ChangeEventHandler, useState } from "react";
interface GuestWithGroup {
  id: number;
  groupId: number;
  name: string | null;
  comments: string | null;
  diet: string[];
  group: {
    id: number;
    email: string;
    name: string;
    number: number;
  };
}
const GuestSearch: React.FC<{
  searchForGuest: (searchTerm: string) => Promise<
    ({
      group: {
        id: number;
        email: string;
        name: string;
        number: number;
      };
    } & {
      id: number;
      groupId: number;
      name: string | null;
      comments: string | null;
      diet: string[];
    })[]
  >;
}> = ({ searchForGuest }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<GuestWithGroup[]>([]);

  const handleSearch: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);

    if (searchTerm.trim() === "") {
      setResults([]);
      return;
    }

    const response = await searchForGuest(searchTerm);
    if (response) {
      setResults(response);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="drop-shadow-md size-full border-blue-950/90 grid gap-4 grid-cols-1 gap-3 p-6 shadow-md backdrop-grayscale-50 bg-blue-100/60">
        <label
          htmlFor="name"
          className="block text-sm font-medium leading-6 text-blue-950"
        >
          <span className="text-blue-950">
            Search by Guest Name to search for RSVP
          </span>
        </label>
        <input
          type="text"
          placeholder="Search by guest name"
          name="name"
          id="name"
          value={query}
          onChange={handleSearch}
          className="p-4 hover:bg-gray-100 hover:text-blue-950 cursor-pointer w-full flex flex-col"
        />
      </div>

      {results.length > 0 && (
        <ul className="mt-2 border border-gray-300 rounded-lg shadow-md truncate">
          {results.map((guest, index) => (
            <Link
              href={`/guest/${guest.groupId}`}
              key={index}
              className="p-4 hover:bg-gray-100 hover:text-blue-950 cursor-pointer w-full flex flex-col"
            >
              <p className="text-lg font-medium">{guest.name}</p>
              <p className="text-sm font-medium">{guest.group.email}</p>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GuestSearch;
