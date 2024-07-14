import { NextPage } from "next";

import RSVPForm from "../components/RSVPForm";

const RSVP: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <main className="flex flex-col items-center justify-center flex-1 py-5">
        <h1 className="text-4xl text-center">RSVP for Our Wedding</h1>
        <p className="mt-3 text-xl text-center">
          We are excited to celebrate with you!
        </p>
        <RSVPForm />
      </main>
    </div>
  );
};

export default RSVP;
