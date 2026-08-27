import H1 from "@/components/H1";

export default function EventsPage({
  params,
}: {
  params: {
    city: string;
  };
}) {
  const city = params.city;

  const formattedCity =
    city.charAt(0).toUpperCase() + city.slice(1);

  return (
    <main className="flex flex-col items-center px-3 pt-24">
      <H1>
        {city === "all" ? "All Events" : `Events in ${formattedCity}`}
      </H1>
    </main>
  );
}