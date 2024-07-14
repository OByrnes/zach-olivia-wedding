import { NextPage } from "next";

import Image from "next/image";
import BackgroundImage from "../../app/components/BackgroundImage";

const Guest: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <BackgroundImage path="background.jpg">
        <main className="flex flex-col items-center justify-center flex-1 py-5">
          <h1 className="text-4xl text-center">Details for Our Wedding</h1>
          <div className="container">
            <h2 className="text-3xl text-center">Venue</h2>
            <p></p>
          </div>

          <div className="container">
            <h2 className="text-3xl text-center">Lodging</h2>
            <p></p>
          </div>
          <div className="container">
            <h2 className="text-3xl text-center">Menu</h2>
            <p></p>
          </div>
          <div className="container">
            <h2 className="text-3xl text-center">Dress Code</h2>
            <p></p>
          </div>
          <div className="container">
            <h2 className="text-3xl text-center">Other</h2>
            <p></p>
          </div>
        </main>
      </BackgroundImage>
    </div>
  );
};

export default Guest;
