
import EventsList from "@/components/EventsList";
import H1 from "@/components/H1";
import { db } from "@/prisma/db";
import Link from "next/link";

const EVENTS_PER_PAGE = 6;

type EventPageProps = {
  params: {
    slug: string;
    city: string;
  };
};


export  function generateMetadata({params} : EventPageProps)  {
  const city  = params.city;
  return {
    title: `Events in ${city === "all" ? "All Events" : city}`
  }
 }



export default async function EventsPage({
  params,
  searchParams,
}: {
  params: {
    city: string;
  };
  searchParams: {
    page?: string;
  };
}) {
  const city = params.city;
  const requestedPage = Number(searchParams.page ?? "1");
  const filteredEvents = city.toLowerCase() === "all"
    ? db.orm.public.Event
    : db.orm.public.Event.where((event) => event.city.ilike(city));
  const { totalEvents } = await filteredEvents.aggregate((aggregate) => ({
    totalEvents: aggregate.count(),
  }));
  const totalPages = Math.max(1, Math.ceil(totalEvents / EVENTS_PER_PAGE));
  const currentPage = Number.isInteger(requestedPage)
    ? Math.min(Math.max(requestedPage, 1), totalPages)
    : 1;
  const events = await filteredEvents
    .orderBy([(event) => event.date.asc(), (event) => event.id.asc()])
    .offset((currentPage - 1) * EVENTS_PER_PAGE)
    .limit(EVENTS_PER_PAGE)
    .all();

  const formattedCity =
    city.charAt(0).toUpperCase() + city.slice(1);
  const pageHref = (page: number) => `/events/${encodeURIComponent(city)}?page=${page}`;

  return (
    <main className="flex flex-col items-center px-3 pt-24">
      <H1>
        {city === "all" ? "All Events" : `Events in ${formattedCity}`}
      </H1>
      <EventsList events={events}/>

      {totalEvents > 0 && (
        <nav aria-label="Event pages" className="mb-20 flex items-center gap-2">
          <Link
            href={pageHref(currentPage - 1)}
            aria-disabled={currentPage === 1}
            className={`rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold transition ${
              currentPage === 1
                ? "pointer-events-none opacity-40"
                : "hover:border-white/40 hover:bg-white/10"
            }`}
          >
            Previous
          </Link>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <Link
              key={page}
              href={pageHref(page)}
              aria-current={page === currentPage ? "page" : undefined}
              className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold transition ${
                page === currentPage
                  ? "bg-white text-black"
                  : "border border-white/15 hover:border-white/40 hover:bg-white/10"
              }`}
            >
              {page}
            </Link>
          ))}

          <Link
            href={pageHref(currentPage + 1)}
            aria-disabled={currentPage === totalPages}
            className={`rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold transition ${
              currentPage === totalPages
                ? "pointer-events-none opacity-40"
                : "hover:border-white/40 hover:bg-white/10"
            }`}
          >
            Next
          </Link>
        </nav>
      )}
    </main>
  );
}
