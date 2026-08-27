import Link from "next/link";
import H1 from "@/components/H1";
import SearchForm from "@/components/search-form";

export default function Home() {
	return (
		<main className="flex flex-col items-center px-3 pt-24">
			<H1>Find all events around you</H1>

			<p className="text-3xl font-bold tracking-tight lg:text-5xl">
				Browse more than 10,000 events around you
			</p>

			<p>
				Browse more than{" "}
				<span className="font-bold text-primary">100 events</span> around you
			</p>

			<SearchForm />

			<section className="mt-4 flex items-center justify-between text-xs text-white/50">
				<p>Popular:</p>

				<div className="space-x-2 font-semibold">
					<Link href="/events/Lahore">Lahore</Link>
					<Link href="/events/Karachi">Karachi</Link>
				</div>
			</section>
		</main>
	);
}
