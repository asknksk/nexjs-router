import EventItem from "@/components/events/EventItem";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";

const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  console.log(event);
  if (!event) {
    return <p>No event found!</p>;
  }
  return (
    <div>
      <EventItem
        key={event.id}
        id={event.id}
        title={event.title}
        description={event.description}
        location={event.location}
        image={event.image}
        date={event.date}
      />
    </div>
  );
};

export default EventDetailPage;
