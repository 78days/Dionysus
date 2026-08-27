import {type EventType }from "@/lib/types"


type EventListType = {
    event : EventType
}

export default function EventCard({event} : EventListType) {
    return <section>
        {event.name}
    </section>

}