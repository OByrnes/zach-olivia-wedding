"use client";

import { usePathname } from "next/navigation";
import Link, { LinkProps } from "next/link";
import { JSXElementConstructor, ReactElement } from "react";

export function NavLinks({
  href,
  className,
  children,
  ...props
}: LinkProps & {
  className?: string;
  children: ReactElement<any, string | JSXElementConstructor<any>> | string;
}) {
  const pathname = usePathname();

  return (
    <Link
      className={`link ${pathname === href ? "active" : ""} ${className}`}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
}
