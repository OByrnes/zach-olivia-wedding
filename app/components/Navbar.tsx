"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, HeartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useParams, usePathname } from "next/navigation";
import Logo from "../../public/May.svg";
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
    <div className="bg-blue-950/50 w-full top-0 z-50">
      <Disclosure as="nav" className="h-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-24 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-24 w-24">
                <Link href="/">
                  <Image src={Logo} alt="Logo" />{" "}
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 bg-blue-950 z-20">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={item.href === path}
                      className={classNames(
                        item.href === path
                          ? "bg-blue-850 text-white"
                          : "text-fuscia-100 hover:bg-blue-750 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </Link>
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
                    <Link key={ele.href} href={ele.href}>
                      {ele.name}
                    </Link>
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
