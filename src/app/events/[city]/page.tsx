import EventsList from "@/components/EventsList";
import H1 from "@/components/H1";
import { EventType } from "@/lib/types";
import axios from "axios";

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
}: {
  params: {
    city: string;
  };
}) {
  const city = params.city;
  
  const response = await axios.get(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );

  const events: EventType[] = response.data;

  const formattedCity =
    city.charAt(0).toUpperCase() + city.slice(1);

  return (
    <main className="flex flex-col items-center px-3 pt-24">
      <H1>
        {city === "all" ? "All Events" : `Events in ${formattedCity}`}
      </H1>


        <EventsList events = {events}/>
      
    </main>
  );
}