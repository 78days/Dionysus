"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import cn from "@/lib/utils";
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

export default function Header() {
	const currentPath = usePathname();
	const [showApiModal, setShowApiModal] = useState(false);

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

			<button
				type="button"
				onClick={() => setShowApiModal(true)}
				className="rounded-lg bg-[#cdd0e4] px-4 py-2 text-blue-700 font-semibold transition-all hover:bg-white hover:scale-105 active:scale-95"
			>
				AI Generator
			</button>

			{showApiModal && (
				<button
					type="button"
					onClick={() => setShowApiModal(false)}
					onKeyDown={(e) => {
						if (e.key === "Enter" || e.key === " ") {
							setShowApiModal(false);
						}
					}}
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
					aria-label="Close modal"
				>
					<div className="relative rounded-2xl bg-blue-800 p-6 text-white max-w-lg w-full mx-4 shadow-2xl">
						<button
							type="button"
							onClick={(e) => {
								e.stopPropagation();
								setShowApiModal(false);
							}}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									e.stopPropagation();
									setShowApiModal(false);
								}
							}}
							className="absolute top-4 right-4 text-white/70 hover:text-white transition"
							aria-label="Close"
						>
							✕
						</button>

						<h2 className="text-2xl font-bold mb-2">Business Idea Generator</h2>
						<p className="text-white/70 mb-4">
							AI-powered innovation at your fingertips
						</p>

						<a
							href="/api"
							target="_blank"
							rel="noopener noreferrer"
							className="block w-full rounded-lg bg-[#cdd0e4] px-6 py-3 text-blue-700 font-semibold text-center transition-all hover:bg-white hover:scale-105"
						>
							Open AI Generator
						</a>
					</div>
				</button>
			)}
		</header>
	);
}
