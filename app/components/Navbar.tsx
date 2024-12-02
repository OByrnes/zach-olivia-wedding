"use client";
import { NavLinks } from "./NavLinks";
import {
  Disclosure,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { usePathname } from "next/navigation";
import DarkLogo from "@/public/1.png";
import LightLogo from "@/public/2.png";
import { NavbarLogo } from "./NavLogo";
const navigation = [
  { name: "Details", href: "/details", current: true },
  { name: "RSVP", href: "/rsvp", current: false },
  { name: "Gallery", href: "/gallery", current: false },
  { name: "Games", href: "/games", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export const Navbar = ({
  user,
}: {
  user?: { name: string; editRSVP: string };
}) => {
  const path = usePathname();
  return (
    <div className="bg-deep-cove-200 dark:bg-deep-cove-950 fixed w-full top-0 z-50">
      <Disclosure as="nav" className="h-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-24 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-24 w-24">
                <NavLinks href="/">
                  <NavbarLogo
                    srcLight={LightLogo}
                    srcDark={DarkLogo}
                    alt="logo"
                  />
                </NavLinks>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 z-20">
                  {navigation.map((item) => (
                    <NavLinks
                      key={item.name}
                      href={item.href}
                      aria-current={item.href === path}
                      className={classNames(
                        item.href === path
                          ? "bg-deep-cove-300 dark:bg-deep-cove-800 "
                          : "text-fuscia-100 hover:bg-deep-cove-300 dark:hover:bg-deep-cove-900",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </NavLinks>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:hidden" id="mobile-menu">
              {/* Mobile menu button */}
              <Popover className="relative">
                <PopoverButton>Menu</PopoverButton>
                <PopoverPanel anchor="bottom" className="flex flex-col">
                  {navigation.map((ele) => (
                    <NavLinks key={ele.href} href={ele.href}>
                      {ele.name}
                    </NavLinks>
                  ))}
                </PopoverPanel>
              </Popover>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
};
