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
    <div>
      <Disclosure as="nav" className="bg-blue-950 h-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-24 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-24 w-24">
                <Link href="/">
                  <Image src={Logo} alt="Logo" />{" "}
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
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
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4">
                  <h1 className="tracking-tight text-fuscia-100-900">
                    Save the Date
                  </h1>
                  <h1 className="tracking-tight text-fuscia-100-900">
                    May 3, 2024
                  </h1>
                </div>
              </div>
            </div>

            <div className="max-md:hidden" id="mobile-menu">
              {/* Mobile menu button */}
              <DisclosureButton className="group relative inline-flex items-start justify-center rounded-md bg-blue-950 p-2 text-fuscia-100-400 hover:bg-blue-850 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
          </div>
        </div>

        <DisclosurePanel className="max-md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.href === path ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-blue-850 text-white"
                    : "text-fuscia-100 hover:bg-blue-850 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
          {/* <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img
                  alt=""
                  src={user.imageUrl}
                  className="h-10 w-10 rounded-full"
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">
                  {user.name}
                </div>
                <div className="text-sm font-medium leading-none text-fuscia-100-400">
                  {user.email}
                </div>
              </div>
              <button
                type="button"
                className="relative ml-auto flex-shrink-0 rounded-full bg-blue-950 p-1 text-fuscia-100-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-3 space-y-1 px-2">
              {userNavigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-fuscia-100-400 hover:bg-blue-850 hover:text-white"
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </div> */}
        </DisclosurePanel>
      </Disclosure>
      <header className="bg-blue-850 shadow"></header>
    </div>
  );
};
