"use client";
import { ChangeEventHandler, useState } from "react";
import { GuestData, RSVPGroup } from "../types";
import { NavLinks } from "./NavLinks";
interface GroupWithGuests {
  guests: {
    id: number;
    groupId: number;
    name: string | null;
    comments: string | null;
    diet: string[];
  }[];
  id: number;
  email: string;
  name: string;
  number: number;
}
const GroupSearch: React.FC<{
  searchForGroup: (searchTerm: string) => Promise<
    ({
      guests: {
        id: number;
        groupId: number;
        name: string | null;
        comments: string | null;
        diet: string[];
      }[];
    } & {
      id: number;
      email: string;
      name: string;
      number: number;
    })[]
  >;
}> = ({ searchForGroup }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<GroupWithGuests[]>([]);

  const handleSearch: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);

    if (searchTerm.trim() === "") {
      setResults([]);
      return;
    }

    const response = await searchForGroup(searchTerm);
    if (response) {
      setResults(response);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="drop-shadow-md size-full border-deep-cove-950/90 grid grid-cols-1 gap-3 p-6 shadow-md backdrop-grayscale-50 bg-deep-cove-100/60 dark:hover:bg-deep-cove-100/60">
        <label
          htmlFor="name"
          className="block text-sm font-medium leading-6 text-deep-cove-950"
        >
          <span className="text-deep-cove-950">
            Search by email to search for group
          </span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Search by group by email"
          value={query}
          onChange={handleSearch}
          className="p-4 hover:bg-gray-100 hover:text-deep-cove-950 cursor-pointer w-full flex flex-col"
        />
      </div>
      {results.length > 0 && (
        <ul className="mt-2 border border-gray-300 rounded-lg shadow-md truncate">
          {results.map((group, index) => (
            <NavLinks
              href={`/guest/${group.id}`}
              key={group.id}
              className="p-4 hover:bg-gray-100 hover:text-deep-cove-950 cursor-pointer w-full flex flex-col"
            >
              <div>
                <p className="text-lg font-medium">{group.name}</p>
                <p className="text-sm font-medium">{group.email}</p>
              </div>
            </NavLinks>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GroupSearch;
