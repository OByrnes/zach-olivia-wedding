import Link from "next/link";

export default function Footer() {
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
    <footer className="absolute end-0 bottomalign-center justify-center w-full z-50 hover:bg-blue-950 flex md:space-x-6 shadow-lg">
      <div className="md:mx-16 md:my-8 ring-2 ring-blue-950/[.75] p-4 scroll-smooth focus:scroll-auto h-96 overscroll-contain overflow-scroll">
        <div className="flex flex-col justify-start md:px-8">
          <h3 className="py-2 text-lg bold font-semibold">Welcome!</h3>
        </div>
        {welcome.map((ele) => (
          <div
            key={ele.join("-")}
            className="flex flex-col justify-start md:px-8"
          >
            {ele.map((innerEle, i) => (
              <p key={innerEle} className="text-base italic leading-loose">
                {innerEle}
              </p>
            ))}
          </div>
        ))}
        <div className="flex flex-col justify-start px-8">
          <h3 className="text-blue-950 text-lg">Zach & Olivia</h3>
        </div>
      </div>
      <Link
        href="mailto:watsonbyrnes@gmail.com"
        className="text-purple-100 hover:underline flex space-x-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
          <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
        </svg>

        <span>Get in touch</span>
      </Link>
    </footer>
  );
}
