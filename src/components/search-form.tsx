"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function SearchForm() {
	const [searchText, setSearchText] = useState("");
	const router = useRouter();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!searchText.trim()) return;

		router.push(`/events/${searchText.trim()}`);
	};

	return (
		<form className="mt-8 w-full sm:w-[580px]" onSubmit={handleSubmit}>
			<input
				className="h-16 w-full rounded-lg bg-white/[7%] px-6 outline-none transition focus:bg-white/10 focus:ring-2 focus:ring-accent/50"
				type="text"
				placeholder="Search events in any city..."
				spellCheck={false}
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
			/>
		</form>
	);
}

export default SearchForm;
