import H1 from "@/components/H1";
import { db } from "@/prisma/db";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

type EventPageProps = {
  params: {
    slug: string;
  };
};


export  function generateMetadata({params} : EventPageProps)  : Metadata{
  const slug  = params.slug;
  return {
    title: `Event  ${slug}`

  }
 }
export default async function EventPage({ params }: EventPageProps) {
  const event = await db.orm.public.Event
    .where({ slug: params.slug })
    .first();

  if (!event) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative isolate min-h-[550px] overflow-hidden">
        {/* Blurred background */}
        <Image
          src={event.imageUrl}
          alt=""
          fill
          sizes="100vw"
          quality={60}
          priority
          className="scale-110 object-cover blur-2xl"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex min-h-[550px] max-w-6xl items-center px-6 py-12 sm:px-8 lg:px-10">
          <div className="grid w-full items-center gap-10 md:grid-cols-[300px_1fr] lg:gap-14">
            
            {/* Event image */}
            <div className="relative mx-auto hidden aspect-square w-full max-w-[300px] overflow-hidden rounded-2xl border border-white/20 shadow-2xl sm:block">
              <Image
                src={event.imageUrl}
                alt={event.name}
                fill
                sizes="300px"
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Event information */}
            <div className="max-w-2xl">
              {/* Date */}
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/60 sm:text-base">
                {new Date(event.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>

              {/* Title */}
              <H1>{event.name}</H1>

              {/* Organizer */}
              <p className="mt-5 text-base text-white/70 sm:text-lg">
                Organized by{" "}
                <span className="font-semibold italic text-white">
                  {event.organizerName}
                </span>
              </p>

              {/* CTA */}
              <button
                type="button"
                className="
                  mt-8
                  w-full rounded-xl
                  bg-white px-6 py-3
                  text-base font-bold text-black
                  shadow-lg shadow-black/20
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:bg-white/90
                  hover:shadow-xl
                  active:translate-y-0
                  sm:w-fit
                "
              >
                Get Tickets
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Event details */}
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:py-20">
        {/* About */}
        <section>
          <h2 className="mb-5 text-center text-2xl font-bold tracking-tight sm:text-3xl">
            About
          </h2>

          <p className="text-center text-base leading-8 text-white/65 sm:text-lg">
            {event.description}
          </p>
        </section>

        {/* Location */}
        <section className="mt-14 border-t border-white/10 pt-12">
          <h2 className="mb-5 text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Location
          </h2>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-center shadow-sm backdrop-blur-sm">
            <p className="text-base leading-7 text-white/70 sm:text-lg">
              {event.location}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
