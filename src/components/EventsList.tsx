import { EventType } from "@/lib/types";
import EventCard from "./EventCard";

export default function EventsList({events}:{events:EventType[]}) {
    return (
        <section className="flex flex-wrap gap-10 justify-center px-[20px] max-w-[1100px] mx-auto py-24">
            {events.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </section>
    );
}


