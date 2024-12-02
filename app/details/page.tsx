import { NextPage } from "next";

import Image from "next/image";
import { NavLinks } from "../components/NavLinks";
import Background from "@/public/flower_design.png";

const Details: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative">
      <div className="absolute inset-0 z-0 h-full brightness-30">
        <Image
          alt="Background Image"
          src={Background}
          sizes="100vw"
          // Make the image display full width
          style={{
            width: "100%",
            height: "auto",
            filter: "invert(80%)",
            opacity: "30%",
          }}
        />
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center flex-1 py-5 space-y-6 z-10 p-8">
        <h2 className="text-3xl text-center font-semibold mb-4">Ceremony</h2>
        <p className="text-center ">
          We would be honored to have you with us as we exchange our vows
          surrounded by the natural beauty of
          <NavLinks
            href="https://g.co/kgs/t2168iR"
            className="hover:underline font-extrabold"
          >
            The Cox Arboretum
          </NavLinks>
          , in Dayton, Ohio. The ceremony will begin at{" "}
          <span className="font-extrabold">
            4:30 PM on Saturday, May 3rd, 2024
          </span>
          , at the picturesque Allee, offering breathtaking views of lush
          gardens and vibrant native plantings.
        </p>
        <p>
          Please dress for the weather. The reception is planned to be held
          outdoors, weather permitting. The dress code for the evening is
          cocktail attire.
        </p>
        <p>
          Should the weather not cooperate, our celebration will gracefully move
          to the Century Bar Upstairs, where the joy and love of the day will
          continue undiminished, ensuring a comfortable and memorable experience
          for all.
        </p>

        <h2 className="text-3xl text-center font-semibold mb-4">Reception</h2>
        <p className="text-center ">
          After the ceremony, we warmly invite you to join us for dinner and a
          joyful celebration at
          <NavLinks
            href="https://g.co/kgs/CpXqr6G"
            className="hover:underline font-extrabold"
          >
            Century Bar Upstairs
          </NavLinks>
          .
        </p>
        <p>
          Located in a historic building with timeless 19th-century details,
          Century Bar is renowned for its extensive bourbon and whiskey
          offerings. The upstairs is a private event space where we’ll gather to
          continue the celebration. We eagerly anticipate festivities in a
          perfect blend of elegance and a welcoming atmosphere.
        </p>
        <p>
          You’ll enjoy an open bar featuring custom cocktails and a delectable
          dinner catered by Grist Provisions, a culinary gem celebrated for its
          fresh pasta and inventive, upscale take on Italian cuisine. Their
          seasonal menu ensures a delightful experience, and we’d love to
          accommodate any dietary needs—just let us know! We eagerly look
          forward to raising a glass with you and celebrating this special
          occasion together!
        </p>

        <h2 className="text-3xl text-center font-semibold mb-4">Gifts</h2>
        <p className="text-center ">
          Your presence at our wedding is the greatest gift. We’re grateful to
          share this day with you. Thank you!
        </p>
      </div>
    </div>
  );
};

export default Details;
