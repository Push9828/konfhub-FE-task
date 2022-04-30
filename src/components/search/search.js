import { useState } from "react";
import "./search.css";

export default function Search({ getSearch, getOption }) {
  const [text, setText] = useState("");
  const [option, setOption] = useState(true);

  const onChange = (q) => {
    setText(q);
    getSearch(q);
  };

  const onfilter = (o) => {
    setOption(o);
    getOption(o);
  };
  return (
    <div className="search-container">
      <div className="event-search">
        <h4>Search</h4>
        <input
          type="text"
          name="search"
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      <div className="event-filter">
        <h4>Past Events</h4>
        <select
          name="events"
          value={option}
          onChange={(e) => onfilter(e.target.value)}
        >
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
