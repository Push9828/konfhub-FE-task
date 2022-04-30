import React, { useState, useEffect } from "react";
import axios from "axios";
import Eventgrid from "./components/event-grid/event-grid";
import Header from "./components/header/header";
import Search from "./components/search/search";
import "./App.css";

export default function App() {
  const [eventData, setEventData] = useState([]);
  const [search, setSearch] = useState([]);
  const [eventStatus, setEventStatus] = useState(true);
  const [limit, setLimit] = useState(16);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://iitm1blt3l.execute-api.ap-southeast-1.amazonaws.com/dev/hosted-events?limit=${limit}&search_query=${search}&future_events=${eventStatus}`
      );
      setEventData(result.data.events);
    };
    fetchData();
  }, [limit, eventStatus, search]);

  return (
    <>
      <Header />
      <Search
        getSearch={(q) => setSearch(q)}
        getOption={(o) => setEventStatus(o)}
      />
      <Eventgrid eventData={eventData} />
      <div className="footer">
        <hr className="end-page" />
        <button className="load-more" onClick={() => setLimit(limit + 12)}>
          Load More
        </button>
        <hr className="end-page" />
      </div>
    </>
  );
}
