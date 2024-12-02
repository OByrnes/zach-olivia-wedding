import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "./NavLinks";
type CardType = {
  title: string;
  description: string;
  imgSrc: string;
  href: string;
};
const Card = ({ title, description, imgSrc, href }: CardType) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && "h-full"
      } relative overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      <div className="bgWrap">
        {imgSrc &&
          (href ? (
            <NavLinks href={href} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover object-center md:h-36 lg:h-48"
                width={544}
                height={306}
              />
            </NavLinks>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          ))}
      </div>
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <NavLinks href={href} aria-label={`Link to ${title}`}>
              {title}
            </NavLinks>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none">{description}</p>
        {href && (
          <NavLinks
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </NavLinks>
        )}
      </div>
    </div>
  </div>
);

export default Card;
