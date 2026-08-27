"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "./logo";

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

const Header = () => {
	const currentPath = usePathname();

	return (
		<header className="flex h-14 items-center justify-between border-b border-white/10 px-3 md:px-9">
			<Logo />

			<nav>
				<ul className="flex gap-x-6 text-sm">
					{routes.map((route) => (
						<li
							key={route.path}
							className={clsx(
								"relative text-white/70 transition hover:text-white",
								currentPath === route.path && "text-white",
							)}
						>
							<Link href={route.path}>{route.name}</Link>

							{currentPath === route.path && (
								<motion.div
									layoutId="active-route"
									className="absolute -bottom-[17px] left-0 h-1 w-full bg-white"
								/>
							)}
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
