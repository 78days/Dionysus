"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "./logo";
import cn from "@/lib/utils";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Events",
    path: "/events/all",
  },
];

export default function Header() {
  const currentPath = usePathname();

  return (
    <header className="flex h-14 items-center justify-between border-b border-white/10 px-3 md:px-9">
      <Logo />

      <nav>
        <ul className="flex gap-x-6 text-sm">
          {routes.map((route) => {
            const isActive =
              route.path === "/"
                ? currentPath === "/"
                : currentPath.startsWith("/events");

            return (
              <li
                key={route.path}
                className={cn(
                  "relative text-white/70 transition hover:text-white",
                  isActive ? "text-white" : "",
                )}
              >
                <Link href={route.path}>{route.name}</Link>

                {isActive && (
                  <motion.div
                    layoutId="active-route"
                    className="absolute -bottom-[17px] left-0 h-1 w-full bg-white"
                  />
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}