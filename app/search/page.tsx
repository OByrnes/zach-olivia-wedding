import { NextPage } from "next";
import { searchForGroup, searchForGuest } from "./api/search";
import GroupSearch from "../components/GroupSearch";
import GuestSearch from "../components/GuestSearch";
const Guest: NextPage = () => {
  const searchGroup = async (searchTerm: string) => {
    "use server";
    const response = await searchForGroup(searchTerm);
    return response;
  };
  const searchGuest = async (searchTerm: string) => {
    "use server";
    const response = await searchForGuest(searchTerm);

    return response;
  };

  return (
    <div className="min-h-screen gap-4 flex-wrap justify-center content-center items-center">
      <div className="w-full flex align-center justify-center">
        <h1 className="text-center">Find your RSVP</h1>
      </div>
      <GroupSearch searchForGroup={searchGroup} />
      <div className="w-full flex align-center justify-center">
        <h2 className="text-center">OR</h2>
      </div>
      <GuestSearch searchForGuest={searchGuest} />
    </div>
  );
};

export default Guest;
