import H1 from "@/components/H1";
import axios from "axios";
import Image from "next/image";

type EventPageProps = {
  params: {
    slug: string;
  };
};

export default async function EventPage({ params }: EventPageProps) {
  const response = await axios.get(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${params.slug}`
  );

  const event = response.data;

  return (
    <main>
      <section className="relative h-[500px] overflow-hidden">
        {/* Background image */}
        <Image
          src={event.imageUrl}
          alt=""
          fill
          sizes="100vw"
          quality={10}
          priority
          className="scale-110 object-cover blur-2xl"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center gap-10 px-6">
          {/* Event image */}
          <div className="relative hidden h-[300px] w-[300px] shrink-0 overflow-hidden rounded-xl shadow-2xl sm:block">
            <Image
              src={event.imageUrl}
              alt={event.name}
              fill
              sizes="300px"
              className="object-cover"
            />
          </div>

          {/* Event information */}
          <div className="flex flex-col gap-4 text-white">
            {/* Date */}
            <p className="text-lg font-semibold text-white/80">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>

            {/* Title */}
            <H1>{event.name}</H1>

            {/* Organizer */}
            <p className="text-lg text-white/70">
              Organized by{" "}
              <span className="font-bold italic text-white">
                {event.organizerName}
              </span>
            </p>

			<button type="button" className="mt-4 w-full rounded-lg bg-white px-5 py-2 text-lg font-bold text-black hover:bg-white/90 sm:w-fit hover:scale-105 active:scale-[1.02] transition smooth">Get Tickets</button>
          </div>
        </div>
      </section>
    </main>
  );
}