import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "@/dummy-data";

const HomePage = () => {
  const feturedEvents = getFeaturedEvents();
  console.log(feturedEvents);
  return (
    <div>
      <ul>
        {/* {feturedEvents.map((event) => ( */}
        <EventList items={feturedEvents} />
        {/* ))} */}
      </ul>
    </div>
  );
};

export default HomePage;
