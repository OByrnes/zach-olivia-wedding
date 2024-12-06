import Image, { StaticImageData } from "next/image";
import { NavLinks } from "./NavLinks";
type CardType = {
  title: string;
  description: string;
  imgSrc: StaticImageData;
  href: string;
};
const Card = ({ title, description, imgSrc, href }: CardType) => (
  <div className="relative shadow hover:shadow-lg  bg-deep-cove-950/65 w-full  md:w-1/3">
    <NavLinks href={href} aria-label={`Link to ${title}`}>
      <div className="w-full">
        <div className="bg-deep-cove-950/65 w-full inset-x-0 bottom-0 absolute">
          <p className="w-full text-center">{description}</p>
        </div>
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-center"
        />
      </div>
    </NavLinks>
  </div>
);

export default Card;
