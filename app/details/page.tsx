import { NextPage } from "next";

import Image from "next/image";
import Link from "next/link";

const Details: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <main className="flex flex-col items-center justify-center flex-1 py-5">
        <div className="container">
          <h2 className="text-3xl text-center">Ceremony</h2>
          <p>
            The Ceremony will be held at{" "}
            <Link href="https://g.co/kgs/t2168iR">The Cox Arboretum</Link> in
            Dayton Ohio, at 4:30PM on Saturday, May 3rd, 2024.
          </p>
          <h2 className="text-3xl text-center">Reception</h2>
          <p>
            After the ceremony please join us for dinner and the reception at{" "}
            <Link href="https://g.co/kgs/CpXqr6G">Century Bar Upstairs</Link>.
          </p>
        </div>
        <div className="container">
          <h2 className="text-3xl text-center">Menu</h2>
          <p>
            Dinner will be from Grist Provisions. Please let us know if you have
            any dietary restrictions
          </p>
        </div>
        <div className="container">
          <h2 className="text-3xl text-center">Dress Code</h2>
          <p>
            The dress code for our wedding is cocktail attire. We look forward
            to seeing everyone dressed up and ready to celebrate!
          </p>
        </div>
        <div className="container">
          <h2 className="text-3xl text-center">Registry</h2>
          <p>Your presence at our wedding is all the gift we need.</p>
        </div>
      </main>
    </div>
  );
};

export default Details;
