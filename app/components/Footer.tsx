import siteMetadata from "@/data/siteMetadata";
import SocialIcon from "@/app/components/SocialIcon";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-2 w-fill bg-foreground">
      <div className="mt-16 w-fill flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon href={`mailto:${siteMetadata.email}`} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
      </div>
    </footer>
  );
}
