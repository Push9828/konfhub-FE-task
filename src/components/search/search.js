import "./search.css";

export default function Search() {
  return (
    <div className="search-container">
      <div className="event-search">
        <h4>Search</h4>
        <input type="text" name="search" />
      </div>
      <div className="event-filter">
        <h4>Past Events</h4>
        <select name="events">
          <option value="" selected hidden>
            Select Type
          </option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>
    </div>
  );
}
