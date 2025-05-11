import { NavLinks } from "./NavLinks";

export default function Footer() {
  return (
    <footer className="absoluteend-0 bottom-0 h-16 z-50 bg-deep-cove-100 dark:bg-deep-cove-950 flex md:flex-row flex-col md:space-x-6 shadow-lg">
      <div className="ring-2 ring-deep-cove-950/[.75] scroll-smooth focus:scroll-auto overscroll-contain overflow-scroll">
        <div className="flex flex-col justify-start">
          <h3 className="py-2 text-lg bold font-semibold">Thank You!</h3>
        </div>
        <div className="flex flex-col justify-start">
          <h3 className="text-lg">Zach & Olivia</h3>
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-center md:flex-col gap-2 p-1">
        <NavLinks
          href="mailto:watsonbyrnes@gmail.com"
          className="hover:underline hover:text-deep-cove-500 flex space-x-4"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
              <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
            </svg>
            Send us an email
          </span>
        </NavLinks>
        <div>
          <div className="flex flex-col">
            <h4 className="title">Olivia&apos;s number:</h4>
            <span>
              <NavLinks
                href="tel:937-831-2478"
                className="hover:underline hover:text-deep-cove-500 flex space-x-4"
              >
                937-831-2478
              </NavLinks>
            </span>
          </div>
          <div className="flex flex-col">
            <h4 className="title">Zach&apos;s number:</h4>
            <span>
              <NavLinks
                href="tel:203-455-4869"
                className="hover:underline hover:text-deep-cove-500 flex space-x-4"
              >
                203-455-4869
              </NavLinks>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
