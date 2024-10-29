import Image from "next/image";
import BackgroundImage from "../public/background.jpg";

export default function Home() {
  const welcome = [
    [
      "We are thrilled to celebrate this moment with you, our friends and family!",
      "Your presence fills our hearts with joy and means so much to us.",
    ],

    [
      "We are thankful to have all of you in the future we are building together.",
    ],
    [
      "Whether you are traveling near or far away, we appreciate the time and effort you are taking to be with us on our big day.",
    ],
    [
      "Please explore this website for all the details needed to make your experience easy and enjoyable. We’ve included information about the wedding and a little bit of fun.",
    ],
    [
      "Thank you for being a part of our story. We can’t wait to celebrate with you!",
    ],
  ];
  return (
    <div className="h-full relative w-full">
      <div className="w-full h-full flex relative z-20">
        <div className="w-1/3 h-full backdrop-grayscale bg-purple-100/[.75] mx-16 my-8 ring-2 ring-blue-950/[.75] p-4">
          <div className="flex flex-col justify-start px-8">
            <h3 className="py-2 text-lg bold text-blue-950 font-semibold">
              Welcome!
            </h3>
          </div>
          {welcome.map((ele) => (
            <div
              key={ele.join("-")}
              className="flex flex-col justify-start px-8"
            >
              {ele.map((innerEle, i) => (
                <p
                  key={innerEle}
                  className="text-base text-blue-950 italic leading-loose"
                >
                  {innerEle}
                </p>
              ))}
            </div>
          ))}
          <div className="flex flex-col justify-start px-8">
            <h3 className="text-blue-950 text-lg">Zach & Olivia</h3>
          </div>
        </div>
        <div className="w-2/3"></div>
      </div>
      <div className="absolute inset-0 z-0 h-full brightness-80">
        <Image
          alt="background  image"
          sizes="100vw"
          // Make the image display full width
          style={{
            width: "100%",
            height: "auto",
          }}
          src={BackgroundImage}
        />
      </div>
    </div>
  );
}
