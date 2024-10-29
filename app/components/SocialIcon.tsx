import { SVGProps } from "react";

function Mail(svgProps: SVGProps<SVGSVGElement>) {
  return (
    <svg
      style={{ maxHeight: "35px" }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      {...svgProps}
    >
      <title>Mail</title>
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
    </svg>
  );
}

const SocialIcon = ({ href, size = 1 }: { href: string; size: number }) => {
  if (!/^mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(href))
    return null;

  const SocialSvg = Mail;

  return (
    <a
      className="text-sm text-fuscia-100-500 transition hover:text-fuscia-100-600 flex"
      target="_blank"
      style={{ maxHeight: "30px" }}
      rel="noopener noreferrer"
      href={href}
    >
      <span>Mail</span>
      <SocialSvg
        className={`fill-current text-fuscia-100-700 hover:text-primary-500 dark:text-fuscia-100-200 dark:hover:text-primary-400 h-${size} w-${size}`}
      />
    </a>
  );
};

export default SocialIcon;
