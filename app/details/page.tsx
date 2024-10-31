import { NextPage } from "next";

import Image from "next/image";
import Link from "next/link";
import Background from "@/public/flower_design.png";

const Details: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-purple-100 items-center relative">
      <div className="absolute inset-0 z-0 h-full brightness-30">
        <Image
          alt="Background Image"
          src={Background}
          sizes="100vw"
          // Make the image display full width
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <main className="flex flex-wrap items-center justify-center flex-1 py-5 space-y-6 z-10">
        <div className="container item-md mx-auto">
          <div className="bg-white/50 border border-purple-200 rounded-lg shadow-md p-6">
            <h2 className="text-blue-950 text-3xl text-center font-semibold mb-4">
              Ceremony
            </h2>
            <p className="text-center text-blue-950">
              We’d love for you to join us as we exchange vows at{" "}
              <Link
                href="https://g.co/kgs/t2168iR"
                className="text-purple-600 hover:underline"
              >
                The Cox Arboretum
              </Link>{" "}
              in Dayton, Ohio. The ceremony begins at 4:30PM on Saturday, May
              3rd, 2024.
            </p>
          </div>
        </div>

        <div className="container item-md mx-auto">
          <div className="bg-white/50 border border-gray-200 rounded-lg shadow-md p-6">
            <h2 className="text-blue-950 text-3xl text-center font-semibold mb-4">
              Reception
            </h2>
            <p className="text-center text-blue-950">
              After the ceremony, we hope you’ll join us for dinner and
              celebration at{" "}
              <Link
                href="https://g.co/kgs/CpXqr6G"
                className="text-purple-600 hover:underline"
              >
                Century Bar Upstairs
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="container item-md mx-auto">
          <div className="bg-white/50 border border-gray-200 rounded-lg shadow-md p-6">
            <h2 className="text-blue-950 text-3xl text-center font-semibold mb-4">
              Menu
            </h2>
            <p className="text-center text-blue-950">
              Dinner will be catered by Grist Provisions. Please let us know if
              you have any dietary restrictions so we can make accommodations.
            </p>
          </div>
        </div>

        <div className="container item-md mx-auto">
          <div className="bg-white/50 border border-gray-200 rounded-lg shadow-md p-6">
            <h2 className="text-blue-950 text-3xl text-center font-semibold mb-4">
              Dress Code
            </h2>
            <p className="text-center text-blue-950">
              The dress code for our wedding is cocktail attire. We look forward
              to celebrating with everyone dressed up for the occasion.
            </p>
          </div>
        </div>

        <div className="container item-md mx-auto">
          <div className="bg-white/50 border border-gray-200 rounded-lg shadow-md p-6">
            <h2 className=" text-blue-950 text-3xl text-center font-semibold mb-4">
              Registry
            </h2>
            <p className="text-center text-blue-950">
              Your presence at our wedding is the greatest gift. We’re grateful
              to share this day with you.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Details;
