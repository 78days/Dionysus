import { type EventType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type EventListTypeProp = {
  event: EventType;
};

export default function EventCard({ event }: EventListTypeProp) {
  const date = new Date(event.date);

  const month = date.toLocaleDateString("en-US", {
    month: "short",
  });

  const day = date.toLocaleDateString("en-US", {
    day: "numeric",
  });

  return (
    <Link href={`/event/${event.slug}`}>
    <section
      className="
        group relative flex h-[380px] w-[450px] flex-col
        overflow-hidden rounded-lg bg-white shadow-lg
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:scale-[1.02]
        hover:shadow-2xl
        active:scale-[0.99]
      "
    >
      {/* Event Image */}
      <div className="h-[60%] w-full overflow-hidden">
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={500}
          height={280}
          className="
            h-full w-full object-cover
            transition-transform duration-500 ease-out
            group-hover:scale-105
          "
        />
      </div>

      {/* Event Information */}
      <div className="flex h-[40%] flex-col items-center justify-center px-4 text-center">
        <h2
          className="
            text-2xl font-bold text-gray-800
            transition-colors duration-300
            group-hover:text-gray-950
          "
        >
          {event.name}
        </h2>

        <p className="mt-2 text-gray-600">
          {event.organizerName}
        </p>

        <p className="text-gray-600">
          {event.location}
        </p>
      </div>

      {/* Date Badge */}
      <div
        className="
          absolute left-4 top-4
          flex h-16 w-16 flex-col
          items-center justify-center
          rounded-lg bg-white
          shadow-md
          transition-all duration-300
          group-hover:scale-105
          group-hover:shadow-lg
        "
      >
        <span className="text-xs font-bold uppercase tracking-wide text-gray-500">
          {month}
        </span>

        <span className="text-2xl font-extrabold leading-none text-gray-800">
          {day}
        </span>
      </div>
    </section>

    </Link>
  );
}