"use client";

import { type EventType } from "@/lib/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type EventListTypeProp = {
  event: EventType;
};

export default function EventCard({ event }: EventListTypeProp) {
  const date = new Date(event.date);
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const day = date.toLocaleDateString("en-US", { day: "numeric" });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link href={`/event/${event.slug}`} className="group block h-full">
        <article
          className="
            relative
            flex
            h-[520px]
            flex-col
            overflow-hidden
            rounded-3xl
            bg-white
            shadow-[0_8px_30px_rgba(0,0,0,0.08)]
            transition-all
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]
            hover:-translate-y-3
            hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.18)]
          "
        >
          {/* Image */}
          <div className="relative h-[65%] overflow-hidden">
            <Image
              src={event.imageUrl}
              alt={event.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
              className="
                object-cover
                transition-transform
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:scale-105
              "
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

            {/* Date badge */}
            <div
              className="
                absolute
                left-5
                top-5
                flex
                h-16
                w-16
                flex-col
                items-center
                justify-center
                rounded-2xl
                bg-white
                shadow-lg
                transition-transform
                duration-500
                group-hover:scale-110
              "
            >
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                {month}
              </span>
              <span className="text-2xl font-extrabold leading-none text-gray-900">
                {day}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col justify-between px-6 py-5">
            <div>
              <h2 className="line-clamp-2 text-2xl font-bold leading-tight tracking-tight text-gray-900">
                {event.name}
              </h2>

              <p className="mt-2 text-base font-medium text-gray-600">
                {event.organizerName}
              </p>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
              <svg
                className="h-4 w-4 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
                
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <span className="truncate font-medium">{event.location}</span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}