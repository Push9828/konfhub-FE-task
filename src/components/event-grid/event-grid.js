import EventCard from "../card/eventcard";
import "./event-grid.css";

export default function Eventgrid({ eventData }) {
  return (
    <>
      <h2 className="grid-title">250+ Events</h2>
      <section className="wrapper">
        {eventData.map((data) => (
          <EventCard key={data.event_id} data={data} />
        ))}
      </section>
    </>
  );
}
