import EventItem from "./EventItem";
import classes from "./event-list.module.css";

const EventList = (props) => {
  const { items } = props;
  console.log(items, "items");
  return (
    <ul className={classes.list}>
      {items?.map((item) => (
        <EventItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          location={item.location}
          image={item.image}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default EventList;
